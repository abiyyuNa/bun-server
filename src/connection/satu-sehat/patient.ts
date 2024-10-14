import satusehat from "../satu-sehat-connection";

export default class patient extends satusehat {
    _patient(param: any) {
        if (param.object === "nik") {
            const parse = JSON.parse(param.filter);
            const nik = parse.xparam0;

            return this.__patient(
                "get",
                `/fhir-r4/v1/Patient?identifier=https://fhir.kemkes.go.id/id/nik|${nik}`,
                param.token,
            );
        } else if (param.object === "bni") {
            const parse = JSON.parse(param.filter);
            const nik = parse.xparam0;

            return this.__patient(
                "get",
                `/fhir-r4/v1/Patient?identifier=https://fhir.kemkes.go.id/id/nik-ibu|${nik}`,
                param.token,
            );
        } else if (param.object === "nnb") {
            const parse = JSON.parse(param.filter);
            const nik = parse.xparam0;
            const name = parse.xparam1;
            const birthdate = parse.xparam2;

            return this.__patient(
                "get",
                `/fhir-r4/v1/Patient?name=${name}&birthdate=${birthdate}&identifier=https://fhir.kemkes.go.id/id/nik|${nik}`,
                param.token,
            );
        } else if (param.object === "nbg") {
            const parse = JSON.parse(param.filter);
            const name = parse.xparam0;
            const birthdate = parse.xparam1;
            const gender = parse.xparam2;

            return this.__patient(
                "get",
                `/fhir-r4/v1/Patient?name=${name}&birthdate=${birthdate}&gender=${gender}`,
                param.token,
            );
        } else {
            const parse = JSON.parse(param.filter);
            const id = parse.xparam0;

            return this.__patient(
                "get",
                `/fhir-r4/v1/Patient/${id}`,
                param.token,
            );
        }
    }
}
