import { AplikasiService } from "../service/aplikasi-service";
import { z } from "zod";
import { validation } from "../validation/validation";
import { AplikasiValidation } from "../validation/v1/aplikasi-validation";
import { logger } from "../app/logging";
import {
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

export class AplikasiController {
    static async signIn(request: any) {
        try {
            const data: SignInRequest = request.body as SignInRequest;

            validation.validate(AplikasiValidation.SIGNIN, data);
            const response = await AplikasiService._signIn(data);

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

    static async signUp(request: any) {
        try {
            const data: SignUpRequest = request.body as SignUpRequest;

            validation.validate(AplikasiValidation.SIGNUP, data);
            const response = await AplikasiService._signUp(data);

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

    static async signOut(request: any) {
        try {
            const data: SignOutRequest = request.headers as SignOutRequest;
            data.token = request.headers["x-token"];

            const response = await AplikasiService._signOut(data);

            return response;
        } catch (error) {
            logger.log("error", error);

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

            validation.validate(AplikasiValidation.FIND, data);
            const response = await AplikasiService._find(data);

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
                id: Number(request.params.id),
                token: request.headers["x-token"] as string,
                object: request.query.param0 as string,
            };

            validation.validate(AplikasiValidation.SHOW, data);
            const response = await AplikasiService._show(data);

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

    static async forgot(request: any) {
        try {
            const data: ForgotRequest = request.body as ForgotRequest;
            data.id = Number(request.params.id);
            data.token = request.headers["x-token"];

            validation.validate(AplikasiValidation.FORGOT, data);
            const response = await AplikasiService._forgot(data);

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

    static async updatePatch(request: any) {
        try {
            const data: UpdateStatusRequest =
                request.body as UpdateStatusRequest;
            data.id = Number(request.params.id);
            data.token = request.headers["x-token"];

            validation.validate(AplikasiValidation.STATUS, data);
            const response = await AplikasiService._updatePatch(data);

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

    static async updatePut(request: any) {
        try {
            const data: UpdatePenggunaRequest =
                request.body as UpdatePenggunaRequest;
            data.id = Number(request.params.id);
            data.token = request.headers["x-token"];

            validation.validate(AplikasiValidation.PENGGUNA_UPDATE, data);
            const response = await AplikasiService._updatePut(data);

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

    static async penggunaGroupCreate(request: any) {
        try {
            const data: PenggunaGroupRequest =
                request.body as PenggunaGroupRequest;
            data.token = request.headers["x-token"];

            validation.validate(AplikasiValidation.PENGGUNA_GROUP_CREATE, data);
            const response = await AplikasiService._penggunaGroupCreate(data);

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

    static async penggunaGroupUpdate(request: any) {
        try {
            const data: PenggunaGroupRequest =
                request.body as PenggunaGroupRequest;
            data.id = Number(request.params.id);
            data.token = request.headers["x-token"];

            validation.validate(AplikasiValidation.PENGGUNA_GROUP_UPDATE, data);
            const response = await AplikasiService._penggunaGroupUpdate(data);

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

    static async searchEngine(request: any) {
        try {
            const data: FindallRequest = {
                token: request.headers["x-token"],
                object: request.query.param0,
                offset: request.query.param1 ? Number(request.query.param1) : 0,
                limit: request.query.param2 ? Number(request.query.param2) : 10,
                filter: request.query.param3 as string,
                order: request.query.param4 as string,
            };

            validation.validate(AplikasiValidation.FIND, data);
            const response = await AplikasiService._searchEngine(data);

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
