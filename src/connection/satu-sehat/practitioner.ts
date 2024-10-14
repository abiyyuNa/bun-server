import satusehat from "../satu-sehat-connection";

export default class practitioner extends satusehat {
    _practitioner(param: any) {
        if (param.object === "nik") {
            const parse = JSON.parse(param.filter);
            const nik = parse.xparam0;

            return this.__practitioner(
                "get",
                `/fhir-r4/v1/Practitioner?identifier=https://fhir.kemkes.go.id/id/nik|${nik}`,
                param.token,
            );
        } else if (param.object === "ngb") {
            const parse = JSON.parse(param.filter);
            const name = parse.xparam0;
            const gender = parse.xparam1;
            const birthdate = parse.xparam2;

            return this.__practitioner(
                "get",
                `/fhir-r4/v1/Practitioner?name=${name}&gender=${gender}&birthdate=${birthdate}`,
                param.token,
            );
        } else {
            const parse = JSON.parse(param.filter);
            const id = parse.xparam0;

            return this.__practitioner(
                "get",
                `/fhir-r4/v1/Practitioner/${id}`,
                param.token,
            );
        }
    }
}
