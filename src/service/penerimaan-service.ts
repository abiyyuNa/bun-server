import {
    __penerimaanCreate,
    __penerimaanFind,
    __penerimaanShow,
    __penerimaanSoftDelete,
} from "../function/penerimaan-function";
import { BarangRequest } from "../model/v1/master-model";
import {
    FindallRequest,
    PenerimaanResponse,
    ShowRequest,
    SoftDeleteRequest,
    TransferTunaiRequest,
} from "../model/v1/penerimaan-model";

export class PenerimaanService {
    static async _barang(
        barangRequest: BarangRequest,
    ): Promise<PenerimaanResponse> {
        const [query] = await __penerimaanCreate(JSON.stringify(barangRequest));
        const resQuery = JSON.parse(query.penerimaan_create);

        return resQuery;
    }
    static async _transferTunai(
        transterTunaiRequest: TransferTunaiRequest,
    ): Promise<PenerimaanResponse> {
        const [query] = await __penerimaanCreate(
            JSON.stringify(transterTunaiRequest),
        );
        const resQuery = JSON.parse(query.penerimaan_create);

        return resQuery;
    }
    static async _find(
        findRequest: FindallRequest,
    ): Promise<PenerimaanResponse> {
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

        const [query] = await __penerimaanFind(JSON.stringify(jsonRequest));
        const resQuery = JSON.parse(query.penerimaan_find);

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
    static async _show(showRequest: ShowRequest): Promise<PenerimaanResponse> {
        const [query] = await __penerimaanShow(JSON.stringify(showRequest));
        const resQuery = JSON.parse(query.penerimaan_show);

        return resQuery;
    }
    static async _softDelete(
        softDeleteRequest: SoftDeleteRequest,
    ): Promise<PenerimaanResponse> {
        const [query] = await __penerimaanSoftDelete(
            JSON.stringify(softDeleteRequest),
        );
        const resQuery = JSON.parse(query.penerimaan_soft_delete);

        return resQuery;
    }
}
