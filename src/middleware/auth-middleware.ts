import { logger } from "../app/logging";
import { __aplikasiValidate } from "../function/aplikasi-function";

export const __authMiddleware = async (request: any) => {
    try {
        const token = request;

        if (!token) {
            return {
                statcode: 20005,
                rowcount: 0,
                message: "Unauthorized",
                data: "",
            };
        }

        const validateToken = {
            object: "pengguna-token",
            token: request,
        };
        const [query] = await __aplikasiValidate(JSON.stringify(validateToken));
        const resQuery = JSON.parse(query.aplikasi_validate);

        if (resQuery.statcode != 0) {
            return resQuery;
        }
    } catch (error) {
        logger.log("Error", error);
        return {
            statcode: 20001,
            rowcount: 0,
            message: error,
            data: "",
        };
    }
};
