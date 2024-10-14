import Elysia from "elysia";
import { cors } from "@elysiajs/cors";
import { logs } from "../middleware/logs-middleware";
import { publicRouters } from "../routes/public/router";
import { privateRouters } from "../routes/private/router";

export const web = new Elysia();

web.get("/", () => {
    return "Webservice API DOMYADHU";
});

web.use(
    cors({
        origin: "*",
        methods: ["GET", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "x-token"],
        credentials: true,
        preflight: true,
    }),
);
web.use(logs);
web.use(publicRouters);
web.use(privateRouters);
