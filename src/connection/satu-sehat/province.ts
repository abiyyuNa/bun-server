import satusehat from "../satu-sehat-connection";

export default class province extends satusehat {
    _province(param: any) {
        return this.__province(
            "get",
            `/masterdata/v2/provinces?current_page=${param.current_page}&next=${param.next}&prev=${param.prev}`,
            param.token,
        );
    }
}
