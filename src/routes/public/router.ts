import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { AplikasiController } from "../../controller/aplikasi-controller";
import { DashboardController } from "../../controller/dashboard-controller";

export const publicRouters = new Elysia();
publicRouters.use(
    swagger({
        path: "/dyd-public",
    }),
);

//* router module general
publicRouters.group("/api/v1", (web) =>
    web
        .post(
            "/sign-in",
            async (request) => AplikasiController.signIn(request),
            {
                detail: {
                    summary: "{Pengguna} Sign in",
                    tags: ["Aplikasi"],
                    requestBody: {
                        required: true,
                        description: "Request body",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        object: { type: "string" },
                                        username: { type: "string" },
                                        password: { type: "string" },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        )
        .post(
            "/general/sign-up",
            async (request) => AplikasiController.signUp(request),
            {
                detail: {
                    summary: "{Pengguna} Sign up",
                    tags: ["Aplikasi"],
                    requestBody: {
                        required: true,
                        description: "Request body",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        object: { type: "string" },
                                        username: { type: "string" },
                                        password: { type: "string" },
                                        confirmPassword: { type: "string" },
                                        name: { type: "string" },
                                        email: { type: "string" },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        )
        .post(
            "/general/dashboard",
            async (request) => DashboardController.dashboard(request),
            {
                detail: {
                    summary: "{Dashboard} Dinamis",
                    tags: ["Dashboard"],
                },
            },
        ),
);
