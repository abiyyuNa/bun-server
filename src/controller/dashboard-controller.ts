import { logger } from "../app/logging";
import { DashboardRequest } from "../model/v1/dashboard-model";
import { DashboardService } from "../service/dashboard-service";

export class DashboardController {
    static async dashboard(request: any) {
        try {
            const data: DashboardRequest = request.body as DashboardRequest;
            const response = await DashboardService._dashboard(data);

            return response;
        } catch (error) {
            logger.log("error", error);

            return error;
        }
    }
}
