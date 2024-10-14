import { z } from "zod";
import { logger } from "../app/logging";
import {
    FindallRequest,
    ShowRequest,
    SoftDeleteRequest,
    TransferTunaiRequest,
} from "../model/v1/penerimaan-model";
import { validation } from "../validation/validation";
import { PenerimaanValidation } from "../validation/v1/penerimaan-validation";
import { PenerimaanService } from "../service/penerimaan-service";
import { BarangRequest } from "../model/v1/master-model";

export class PenerimaanController {
    static async barangCreate(request: any) {
        try {
            const data: BarangRequest = request.body as BarangRequest;
            data.token = request.headers["x-token"];

            validation.validate(PenerimaanValidation.BARANG, data);
            const response = await PenerimaanService._barang(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }
    static async transferTunaiCreate(request: any) {
        try {
            const data: TransferTunaiRequest =
                request.body as TransferTunaiRequest;
            data.token = request.headers["x-token"];

            validation.validate(PenerimaanValidation.TRANSFER_TUNAI, data);
            const response = await PenerimaanService._transferTunai(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }
    static async find(request: any) {
        try {
            const data: FindallRequest = {
                token: request.headers["x-token"],
                object: request.query.param0,
                offset: request.query.param1 ? Number(request.query.param1) : 0,
                limit: request.query.param2 ? Number(request.query.param2) : 10,
                filter: request.query.param3 as string,
                order: request.query.param4 as string,
            };

            validation.validate(PenerimaanValidation.FIND, data);
            const response = await PenerimaanService._find(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }
    static async show(request: any) {
        try {
            const data: ShowRequest = {
                object: request.query.param0,
                token: request.headers["x-token"],
                id: request.params.id,
            };

            validation.validate(PenerimaanValidation.SHOW, data);
            const response = await PenerimaanService._show(data);
            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }
            return error;
        }
    }
    static async softDelete(request: any) {
        try {
            const data: SoftDeleteRequest = request.body as SoftDeleteRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(PenerimaanValidation.SOFT_DELETE, data);
            const response = await PenerimaanService._softDelete(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }
}
