import satusehat from "../satu-sehat-connection";

export default class oauth extends satusehat {
    _oauth() {
        return this.__oauth(
            "post",
            `/oauth2/v1/accesstoken?grant_type=client_credentials`,
        );
    }
}
