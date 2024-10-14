import {
    __masterCreate,
    __masterFind,
    __masterSelectize,
    __masterShow,
    __masterSoftDelete,
    __masterUpdate,
    __masterValidateCreate,
    __masterValidateUpdate,
} from "../function/master-function";
import {
    AkadRequest,
    AsramaRequest,
    BarangRequest,
    DepartemenRequest,
    DonaturRequest,
    FindallRequest,
    JenisReferensiRequest,
    LagRequest,
    LokasiRequest,
    MasterResponse,
    OrganisasiRequest,
    PegawaiRequest,
    ProgramRequest,
    ReferensiRequest,
    SelectRequest,
    ShowRequest,
    SoftDeleteRequest,
    SumberPenerimaanRequest,
    WigRequest,
} from "../model/v1/master-model";

export class MasterService {
    static async checkDataMustExistsCreate(data: string) {
        const [query] = await __masterValidateCreate(data);
        const resQuery = JSON.parse(query.master_validate_create);

        return resQuery;
    }

    static async checkDataMustExistsUpdate(data: string) {
        const [query] = await __masterValidateUpdate(data);
        const resQuery = JSON.parse(query.master_validate_update);

        return resQuery;
    }

    static async _barangCreate(
        barangRequest: BarangRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(barangRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(barangRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _barangUpdate(
        barangRequest: BarangRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(barangRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(barangRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _sumberPenerimaanCreate(
        sumberPenerimaanRequest: SumberPenerimaanRequest,
    ): Promise<MasterResponse> {
        const [query] = await __masterCreate(
            JSON.stringify(sumberPenerimaanRequest),
        );
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _sumberPenerimaanUpdate(
        sumberPenerimaanRequest: SumberPenerimaanRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(sumberPenerimaanRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(
            JSON.stringify(sumberPenerimaanRequest),
        );
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _programCreate(
        programRequest: ProgramRequest,
    ): Promise<MasterResponse> {
        const [query] = await __masterCreate(JSON.stringify(programRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _programUpdate(
        programRequest: ProgramRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(programRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(programRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _wigCreate(wigRequest: WigRequest): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(wigRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(wigRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _wigUpdate(wigRequest: WigRequest): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(wigRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(wigRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _organisasiCreate(
        organisasiRequest: OrganisasiRequest,
    ): Promise<MasterResponse> {
        const [query] = await __masterCreate(JSON.stringify(organisasiRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _organisasiUpdate(
        organisasiRequest: OrganisasiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(organisasiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(organisasiRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _lokasiCreate(
        lokasiRequest: LokasiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(lokasiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(lokasiRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _lokasiUpdate(
        lokasiRequest: LokasiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(lokasiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(lokasiRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _lagCreate(lagRequest: LagRequest): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(lagRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(lagRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _lagUpdate(lagRequest: LagRequest): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(lagRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(lagRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _donaturUpdate(
        donaturRequest: DonaturRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(donaturRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(donaturRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _donaturCreate(
        donaturRequest: DonaturRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(donaturRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(donaturRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _asramaCreate(
        AsramaRequest: AsramaRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(AsramaRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(AsramaRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _asramaUpdate(
        AsramaRequest: AsramaRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(AsramaRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(AsramaRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _departemenCreate(
        DepartemenRequest: DepartemenRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(DepartemenRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(DepartemenRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _departemenUpdate(
        DepartemenRequest: DepartemenRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(DepartemenRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(DepartemenRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _akadCreate(
        AkadRequest: AkadRequest,
    ): Promise<MasterResponse> {
        const [query] = await __masterCreate(JSON.stringify(AkadRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _akadUpdate(
        AkadRequest: AkadRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(AkadRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(AkadRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _jenisReferensiCreate(
        JenisReferensiRequest: JenisReferensiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(JenisReferensiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(
            JSON.stringify(JenisReferensiRequest),
        );
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _jenisReferensiUpdate(
        JenisReferensiRequest: JenisReferensiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(JenisReferensiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(
            JSON.stringify(JenisReferensiRequest),
        );
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _referensiCreate(
        ReferensiRequest: ReferensiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(ReferensiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(ReferensiRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _referensiUpdate(
        ReferensiRequest: ReferensiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(ReferensiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(ReferensiRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _pegawaiCreate(
        PegawaiRequest: PegawaiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsCreate(
            JSON.stringify(PegawaiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterCreate(JSON.stringify(PegawaiRequest));
        const resQuery = JSON.parse(query.master_create);

        return resQuery;
    }

    static async _pegawaiUpdate(
        PegawaiRequest: PegawaiRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(PegawaiRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterUpdate(JSON.stringify(PegawaiRequest));
        const resQuery = JSON.parse(query.master_update);

        return resQuery;
    }

    static async _selectize(
        selectRequest: SelectRequest,
    ): Promise<MasterResponse> {
        const jsonParse = JSON.parse(selectRequest.filter);

        const selectJson = {
            object: selectRequest.object,
            token: selectRequest.token,
            fparam0: jsonParse.xparam0,
            fparam1: jsonParse.xparam1,
            fparam2: jsonParse.xparam2,
            fparam3: jsonParse.xparam3,
            fparam4: jsonParse.xparam4,
        };

        const [query] = await __masterSelectize(JSON.stringify(selectJson));
        const resQuery = JSON.parse(query.master_select);

        return resQuery;
    }

    static async _find(findRequest: FindallRequest): Promise<MasterResponse> {
        let numRows: number;
        const offset = findRequest.offset;
        const limit = findRequest.limit;
        let numPages: number;

        const fParse = JSON.parse(findRequest.filter);
        const oParse = JSON.parse(findRequest.order);

        const fParam0 = fParse.xparam0;
        const fParam1 = fParse.xparam1;
        const fParam2 = fParse.xparam2;
        const fParam3 = fParse.xparam3;
        const fParam4 = fParse.xparam4;
        const fParam5 = fParse.xparam5;
        const fParam6 = fParse.xparam6;
        const fParam7 = fParse.xparam7;
        const oParam0 = oParse.xparam0;
        const oParam1 = oParse.xparam1;

        const jsonRequest = {
            object: findRequest.object,
            fparam0: fParam0,
            fparam1: fParam1,
            fparam2: fParam2,
            fparam3: fParam3,
            fparam4: fParam4,
            fparam5: fParam5,
            fparam6: fParam6,
            fparam7: fParam7,
            oparam0: oParam0,
            oparam1: oParam1,
            offset: Number(offset * limit),
            limit: Number(limit),
            token: findRequest.token,
        };

        if (offset >= limit) {
            return {
                statcode: 20002,
                rowcount: 0,
                message: "INFO, Halaman tidak ditemukan",
                data: "[]",
            };
        }

        const [query] = await __masterFind(JSON.stringify(jsonRequest));
        const resQuery = JSON.parse(query.master_find);

        if (resQuery.statcode != 0 || resQuery.data == null) {
            return {
                statcode: 20002,
                rowcount: 0,
                message: resQuery.message,
                data: "[]",
            };
        }

        numRows = Number(resQuery.rowcount ?? 0);
        numPages = Math.ceil(numRows / limit);

        return {
            statcode: resQuery.statcode,
            rowcount: resQuery.rowcount,
            message: resQuery.message,
            data: resQuery.data,
            pagination: {
                current: offset + 1,
                perPage: limit,
                total: resQuery.rowcount,
                prev: offset < limit ? offset : 0,
                next: offset >= 0 ? numPages : 0,
            },
        };
    }

    static async _show(showRequest: ShowRequest): Promise<MasterResponse> {
        const [query] = await __masterShow(JSON.stringify(showRequest));
        const resQuery = JSON.parse(query.master_show);

        return resQuery;
    }

    static async _softDelete(
        softDeleteRequest: SoftDeleteRequest,
    ): Promise<MasterResponse> {
        const validation = await this.checkDataMustExistsUpdate(
            JSON.stringify(softDeleteRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __masterSoftDelete(
            JSON.stringify(softDeleteRequest),
        );
        const resQuery = JSON.parse(query.master_soft_delete);

        return resQuery;
    }
}
