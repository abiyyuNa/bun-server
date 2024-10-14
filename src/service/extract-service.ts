import fs from "fs";
// import xlsx from "xlsx";
import * as xlsx from 'xlsx';
import {
    __extractCreate,
    __extractFind,
    __extractShow,
} from "../function/extract-function";
import {
    ExtractResponse,
    FindallRequest,
    PenerimaanRequest,
    ShowRequest,
    TargetRequest,
} from "../model/v1/extract-model";

export class ExtractService {
    static async _penerimaanCreate(
        penerimaanRequest: PenerimaanRequest,
    ): Promise<ExtractResponse> {
        const file = Buffer.from(penerimaanRequest.file, "base64");
        const filename = Date.now() + ".xlsx";

        fs.writeFileSync(`./uploads/penerimaan/${filename}`, file.toString());

        const workbook = xlsx.read(file, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const payload = xlsx.utils.sheet_to_json(sheet);

        const data = {
            object: penerimaanRequest.object,
            token: penerimaanRequest.token,
            file: filename,
            details: payload,
        };

        const [query] = await __extractCreate(JSON.stringify(data));
        const resQuery = JSON.parse(query.extract_create);

        if (resQuery.statcode === 0) {
            fs.unlinkSync(`./uploads/penerimaan/${filename}`);
        }

        return resQuery;
    }
    static async _targetCreate(
        targetRequest: TargetRequest,
    ): Promise<ExtractResponse> {
        const file = Buffer.from(targetRequest.file, "base64");
        const filename = Date.now() + ".xlsx";

        fs.writeFileSync(`./uploads/target/${filename}`, file.toString());

        const workbook = xlsx.read(file, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const payload = xlsx.utils.sheet_to_json(sheet);

        const data = {
            object: targetRequest.object,
            token: targetRequest.token,
            file: filename,
            created_by: targetRequest.created_by,
            details: payload,
        };

        const [query] = await __extractCreate(JSON.stringify(data));
        const resQuery = JSON.parse(query.extract_create);

        if (resQuery.statcode === 0) {
            fs.unlinkSync(`./uploads/target/${filename}`);
        }

        return resQuery;
    }
    static async _find(findRequest: FindallRequest): Promise<ExtractResponse> {
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

        const [query] = await __extractFind(JSON.stringify(jsonRequest));
        const resQuery = JSON.parse(query.extract_find);

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
    static async _show(showRequest: ShowRequest): Promise<ExtractResponse> {
        const [query] = await __extractShow(JSON.stringify(showRequest));
        const resQuery = JSON.parse(query.extract_show);

        return resQuery;
    }
}
