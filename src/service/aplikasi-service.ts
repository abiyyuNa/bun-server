import {
    __aplikasiCreate,
    __aplikasiFind,
    __aplikasiHardDelete,
    __aplikasiSearchEngine,
    __aplikasiShow,
    __aplikasiUpdate,
    __aplikasiValidate,
} from "../function/aplikasi-function";
import {
    AplikasiResponse,
    FindallRequest,
    ForgotRequest,
    PenggunaGroupRequest,
    ShowRequest,
    SignInRequest,
    SignOutRequest,
    SignUpRequest,
    UpdatePenggunaRequest,
    UpdateStatusRequest,
} from "../model/v1/aplikasi-model";

export class AplikasiService {
    static async checkDataMustExists(data: string) {
        const [query] = await __aplikasiValidate(data);
        const resQuery = JSON.parse(query.aplikasi_validate);

        return resQuery;
    }

    static async _signIn(
        signInRequest: SignInRequest,
    ): Promise<AplikasiResponse> {
        let [query] = await __aplikasiValidate(JSON.stringify(signInRequest));
        let resQuery = JSON.parse(query.aplikasi_validate);

        if (resQuery.statcode != 0) {
            return resQuery;
        }

        const isMatch = await Bun.password.verify(
            signInRequest.password,
            resQuery.data,
        );

        if (!isMatch) {
            return {
                statcode: 20002,
                rowcount: 0,
                message: "INFO, username atau password salah",
                data: "",
            };
        }

        const uuid = crypto.randomUUID();

        const updateRequest = {
            object: signInRequest.object,
            username: signInRequest.username,
            password: signInRequest.password,
            token: uuid,
        };

        [query] = await __aplikasiUpdate(JSON.stringify(updateRequest));
        resQuery = JSON.parse(query.aplikasi_update);

        return resQuery;
    }

    static async _signUp(
        signUpRequest: SignUpRequest,
    ): Promise<AplikasiResponse> {
        const validation = await this.checkDataMustExists(
            JSON.stringify(signUpRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        signUpRequest.password = await Bun.password.hash(
            signUpRequest.password,
            {
                algorithm: "bcrypt",
                cost: 10,
            },
        );

        const [query] = await __aplikasiCreate(JSON.stringify(signUpRequest));
        const resQuery = JSON.parse(query.aplikasi_create);

        return resQuery;
    }

    static async _signOut(request: SignOutRequest): Promise<AplikasiResponse> {
        const signOutRequest = {
            object: "pengguna-logout",
            token: request.token,
        };

        const [query] = await __aplikasiHardDelete(
            JSON.stringify(signOutRequest),
        );
        const resQuery = JSON.parse(query.aplikasi_hard_delete);

        return resQuery;
    }

    static async _show(showRequest: ShowRequest): Promise<AplikasiResponse> {
        const validation = await this.checkDataMustExists(
            JSON.stringify(showRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __aplikasiShow(JSON.stringify(showRequest));
        const resQuery = JSON.parse(query.aplikasi_show);

        return resQuery;
    }

    static async _find(findRequest: FindallRequest): Promise<AplikasiResponse> {
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

        const [query] = await __aplikasiFind(JSON.stringify(jsonRequest));
        const resQuery = JSON.parse(query.aplikasi_find);

        if (resQuery.statcode != 0 || resQuery.data == null) {
            return {
                statcode: 20002,
                rowcount: 0,
                message: "INFO, data tidak ditemukan",
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

    static async _forgot(
        forgotRequest: ForgotRequest,
    ): Promise<AplikasiResponse> {
        const validation = await this.checkDataMustExists(
            JSON.stringify(forgotRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        forgotRequest.newPassword = await Bun.password.hash(
            forgotRequest.newPassword,
            {
                algorithm: "bcrypt",
                cost: 10,
            },
        );

        const [query] = await __aplikasiUpdate(JSON.stringify(forgotRequest));
        const resQuery = JSON.parse(query.aplikasi_update);

        return resQuery;
    }

    static async _updatePatch(
        updateRequest: UpdateStatusRequest,
    ): Promise<AplikasiResponse> {
        const validation = await this.checkDataMustExists(
            JSON.stringify(updateRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __aplikasiUpdate(JSON.stringify(updateRequest));
        const resQuery = JSON.parse(query.aplikasi_update);

        return resQuery;
    }

    static async _updatePut(
        updateRequest: UpdatePenggunaRequest,
    ): Promise<AplikasiResponse> {
        const validation = await this.checkDataMustExists(
            JSON.stringify(updateRequest),
        );

        if (validation.statcode != 0) {
            return validation;
        }

        const [query] = await __aplikasiUpdate(JSON.stringify(updateRequest));
        const resQuery = JSON.parse(query.aplikasi_update);

        return resQuery;
    }

    static async _penggunaGroupCreate(
        penggunaGroupRequest: PenggunaGroupRequest,
    ): Promise<AplikasiResponse> {
        const [query] = await __aplikasiCreate(
            JSON.stringify(penggunaGroupRequest),
        );
        const resQuery = JSON.parse(query.aplikasi_create);

        return resQuery;
    }

    static async _penggunaGroupUpdate(
        penggunaGroupRequest: PenggunaGroupRequest,
    ): Promise<AplikasiResponse> {
        const [query] = await __aplikasiUpdate(
            JSON.stringify(penggunaGroupRequest),
        );
        const resQuery = JSON.parse(query.aplikasi_update);

        return resQuery;
    }

    static async _searchEngine(
        findRequest: FindallRequest,
    ): Promise<AplikasiResponse> {
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

        const [query] = await __aplikasiSearchEngine(
            JSON.stringify(jsonRequest),
        );
        const resQuery = JSON.parse(query.aplikasi_search_engine);

        if (resQuery.statcode != 0 || resQuery.data == null) {
            return {
                statcode: 20002,
                rowcount: 0,
                message:
                    resQuery.statcode === 20003
                        ? resQuery.message
                        : "INFO, Data tidak ditemukan",
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
}
