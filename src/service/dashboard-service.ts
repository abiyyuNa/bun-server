import { __dashboard } from "../function/dashboard-function";
import {
    DashboardRequest,
    DashboardResponse,
} from "../model/v1/dashboard-model";

export class DashboardService {
    static async _dashboard(
        DashboardRequest: DashboardRequest,
    ): Promise<DashboardResponse> {
        const query = await __dashboard(JSON.stringify(DashboardRequest));

        return query;
    }
}
