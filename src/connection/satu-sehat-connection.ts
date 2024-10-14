import axios from "axios";

export default class SatusehatConnection {
    BASE_URL = Bun.env.SATSET_BASE_URL;
    ORGANIZATION_ID = Bun.env.SATSET_ORGANIZATION_ID;
    CLIENT_ID = Bun.env.SATSET_CLIENT_ID;
    CLIENT_SECRET = Bun.env.SATSET_CLIENT_SECRET;
    headersOauth!: { "content-type": string };
    headers!: { Authorization: string; Accept: string };

    setHeadersOauth() {
        this.headersOauth = {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
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
            client_secret: this.CLIENT_SECRET,
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

    async __province(method: string, service: string, token: string) {
        this.setHeaders(token);

        return await axios({
            method: method,
            url: this.BASE_URL + service,
            headers: this.headers,
        })
            .then((response) => {
                return this.result({
                    statcode: 0,
                    rowcount: 1,
                    message: `data berhasil ditemukan`,
                    data: response.data.data,
                    meta: response.data.meta,
                });
            })
            .catch((error) => {
                return this.result({
                    statcode: 20001,
                    rowcount: 0,
                    message: error.message,
                    data: "[]",
                    meta: "{}",
                });
            });
    }

    async __practitioner(method: string, service: string, token: string) {
        this.setHeaders(token);

        return await axios({
            method: method,
            url: this.BASE_URL + service,
            headers: this.headers,
        })
            .then((response) => {
                return this.result({
                    statcode: 0,
                    rowcount: 1,
                    message: `data berhasil ditemukan`,
                    data: response.data,
                    meta: "{}",
                });
            })
            .catch((error) => {
                return this.result({
                    statcode: 20001,
                    rowcount: 0,
                    message: error.message,
                    data: "[]",
                    meta: "{}",
                });
            });
    }

    async __patient(method: string, service: string, token: string) {
        this.setHeaders(token);

        return await axios({
            method: method,
            url: this.BASE_URL + service,
            headers: this.headers,
        })
            .then((response) => {
                return this.result({
                    statcode: 0,
                    rowcount: 1,
                    message: `data berhasil ditemukan`,
                    data: response.data,
                    meta: "{}",
                });
            })
            .catch((error) => {
                return this.result({
                    statcode: 20001,
                    rowcount: 0,
                    message: error.message,
                    data: "[]",
                    meta: "{}",
                });
            });
    }

    result(data: any) {
        return data;
    }
}
