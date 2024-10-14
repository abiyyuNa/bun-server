export type DashboardResponse = {
    statcode?: number;
    rowcount?: number;
    message?: string;
    data?: string;
    pagination?: {};
};

export type DashboardRequest = {
    object: string;
    param: string;
};
