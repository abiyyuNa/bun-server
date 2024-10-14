import axios from "axios";

export default class MkkoConnection {
    CLIENT_ID = Bun.env.MKKO_CLIENT_ID;
    CLIENT_KEY = Bun.env.MKKO_CLIENT_KEY;
    BASE_URL = Bun.env.MKKO_BASE_URL;
    headersOauth!: { "content-type": string };
    headers!: { Authorization: string; Accept: string };

    setHeadersOauth() {
        this.headersOauth = {
            "content-type": "application/x-www-form-urlencoded",
        };
    }

    setHeaders(token: string) {
        this.headers = {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        };
    }

    async __oauth(method: string, service: string) {
        this.setHeadersOauth();

        const data = {
            client_id: this.CLIENT_ID,
            client_key: this.CLIENT_KEY,
        };

        return await axios({
            method: method,
            url: this.BASE_URL + service,
            headers: this.headersOauth,
            data: data,
        })
            .then((response) => {
                return this.responseOauth({
                    statcode: 0,
                    rowcount: 1,
                    message: `berhasil generate token`,
                    data: response.data,
                });
            })
            .catch((error) => {
                return this.responseOauth({
                    statcode: 20001,
                    rowcount: 0,
                    message: `gagal generate token`,
                    data: error,
                });
            });
    }

    responseOauth(data: {}) {
        return data;
    }
}
