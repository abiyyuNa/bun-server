import mkko from "../mkko-connection";

export default class oauth extends mkko {
    _oauth() {
        return this.__oauth("post", `/api/mkko/auth`);
    }
}
