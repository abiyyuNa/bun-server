import swagger from "@elysiajs/swagger";
import { web } from "./app/web";
import path from "../package.json";
const port = Bun.env.LOCAL_PORT ?? "0000";

web.use(
    swagger({
        path: "/dyd",
        documentation: {
            info: {
                title: "DYD Documentation",
                description: "Development API's endpoints",
                version: "1.0.0",
            },
        },
    }),
).listen(port, () => {
    console.log(
        `🦊 Server ${path.name} version ${path.version} running at ${web.server?.hostname}:${web.server?.port}`,
    );
});
