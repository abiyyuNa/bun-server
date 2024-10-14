import { z } from "zod";
import { logger } from "../app/logging";
import { validation } from "../validation/validation";
import {
    FindallRequest,
    PenerimaanRequest,
    ShowRequest,
    TargetRequest,
} from "../model/v1/extract-model";
import { ExtractValidation } from "../validation/v1/extract-validation";
import { ExtractService } from "../service/extract-service";

export class ExtractController {
    static async penerimaanCreate(request: any) {
        try {
            const data: PenerimaanRequest = request.body as PenerimaanRequest;
            data.token = request.headers["x-token"];

            validation.validate(ExtractValidation.PENERIMAAN, data);
            const response = await ExtractService._penerimaanCreate(data);

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
    static async targetCreate(request: any) {
        try {
            const data: TargetRequest = request.body as TargetRequest;
            data.token = request.headers["x-token"];

            validation.validate(ExtractValidation.TARGET, data);
            const response = await ExtractService._targetCreate(data);

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

            validation.validate(ExtractValidation.FIND, data);
            const response = await ExtractService._find(data);

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

            validation.validate(ExtractValidation.SHOW, data);
            const response = await ExtractService._show(data);
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
