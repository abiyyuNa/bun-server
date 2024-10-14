import { Pool } from "pg";

const createPool = (config: {
    user: string | undefined;
    host: string | undefined;
    database: string | undefined;
    password: string | undefined;
    port: number;
    ssl: boolean;
    max: number;
    idleTimeoutMillis: number;
    connectionTimeoutMillis: number;
    maxUses: number;
}) => {
    return new Pool({
        user: config.user,
        host: config.host,
        database: config.database,
        password: config.password,
        port: config.port,
        ssl: config.ssl,
        max: config.max, // set pool max size
        idleTimeoutMillis: config.idleTimeoutMillis, // close idle clients after 1 second
        connectionTimeoutMillis: config.connectionTimeoutMillis, // return an error after 1 second if connection could not be established
        maxUses: config.maxUses, // close (and replace) a connection after it has been used a specific number of times
    });
};

const dyd = createPool({
    user: Bun.env.DB_USER_PG,
    host: Bun.env.DB_HOST_PG,
    database: Bun.env.DB_PG,
    password: Bun.env.DB_PASS_PG,
    port: Number(Bun.env.DB_PORT_PG),
    ssl: Bun.env.DB_SSL_PG === "true",
    max: Number(Bun.env.DB_MAX_PG), // set pool max size to 20
    idleTimeoutMillis: Number(Bun.env.DB_ITM_PG), // close idle clients after 1 second
    connectionTimeoutMillis: Number(Bun.env.DB_CTM_PG), // return an error after 1 second if connection could not be established
    maxUses: Number(Bun.env.DB_MAXUSE_PG), // close (and replace) a connection after it has been used 7500 times (see below for discussion)
});

export default {
    dyd,
};
