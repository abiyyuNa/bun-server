import axios from "axios";
import cryptoJs from "crypto-js";
import _ from "lodash";
import lzString from "lz-string";

export default class BpjsConnection {
    CONS_ID = Bun.env.BPJS_CONS_ID as string;
    CONS_SECRET = Bun.env.BPJS_CONS_SECRET as string;
    USERKEY_VCLAIM = Bun.env.BPJS_USERKEY_VCLAIM as string;
    USERKEY_ANTREAN = Bun.env.BPJS_USERKEY_ANTREAN as string;
    BASE_URL_VCLAIM = Bun.env.BPJS_BASE_URL_VCLAIM as string;
    BASE_URL_ANTREAN = Bun.env.BPJS_BASE_URL_ANTREAN as string;
    timestamp!: number;
    headers!: {};
    signature: any;
    data: any;

    constructor() {
        this.setTimestamp();
        this.setSignature();
    }

    setHeaders(service_type: string) {
        this.headers = {
            "Content-Type": "application/json",
            "X-cons-id": this.CONS_ID,
            "X-timestamp": this.timestamp,
            "X-signature": this.signature,
            user_key:
                service_type == "antrean"
                    ? this.USERKEY_ANTREAN
                    : this.USERKEY_VCLAIM,
        };
    }

    setTimestamp() {
        this.timestamp = Math.floor(new Date().getTime() / 1000);
    }

    setSignature() {
        const hash = cryptoJs.HmacSHA256(
            this.CONS_ID + "&" + this.timestamp,
            this.CONS_SECRET,
        );

        this.signature = cryptoJs.enc.Base64.stringify(hash);
    }

    async __peserta(method: string, service: string) {
        this.setHeaders("vclaim");

        return await axios({
            method: method,
            url: this.BASE_URL_VCLAIM + service,
            headers: this.headers,
            data: _.includes(["post", "put", "delete"], method)
                ? this.data
                : null,
        })
            .then((response) => {
                return this.responsePeserta(response.data);
            })
            .catch((error) => {
                return this.responsePeserta({
                    statcode: 20001,
                    rowcount: 0,
                    message: error.message,
                    data: "[]",
                });
            });
    }

    responsePeserta(data: any) {
        if (data.metaData.code == 200 && _.isString(data.response)) {
            return this.responseDecrypt(data);
        }

        return {
            statcode: 20001,
            rowcount: 0,
            message: data.message,
            data: "[]",
        };
    }

    responseDecrypt(data: any) {
        const passphrase = this.CONS_ID + this.CONS_SECRET + this.timestamp;
        const key = cryptoJs.enc.Hex.parse(
            cryptoJs.SHA256(passphrase).toString(),
        );
        const iv = cryptoJs.enc.Hex.parse(
            cryptoJs.SHA256(passphrase).toString().slice(0, 32),
        );
        const decrypted = cryptoJs.AES.decrypt(data.response, key, {
            iv: iv,
            mode: cryptoJs.mode.CBC,
            padding: cryptoJs.pad.Pkcs7,
        }).toString(cryptoJs.enc.Utf8);

        return {
            statcode: 0,
            rowcount: 1,
            message: data.metaData.message,
            data: JSON.parse(
                lzString.decompressFromEncodedURIComponent(decrypted),
            ),
        };
    }
}
