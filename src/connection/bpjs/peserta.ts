import bpjs from "../bpjs-connection";

export default class peserta extends bpjs {
    _peserta(tanggal: string, data: any) {
        if (data.object === "nik") {
            return this.__peserta(
                "get",
                `/Peserta/nik/${data.nomor}/tglSEP/${tanggal}`,
            );
        } else {
            return this.__peserta(
                "get",
                `/Peserta/nokartu/${data.nomor}/tglSEP/${tanggal}`,
            );
        }
    }
}
