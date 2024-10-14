import pool from "../app/db-postgres";

export const __extractCreate = async (data: string) => {
    const PGQuery = `select extract.extract_create($1);--`;

    const conn = await pool.dyd.connect();
    return conn
        .query(PGQuery, [`${data}`])
        .then((result: any) => {
            return result.rows;
        })
        .catch((err: any) => {
            if (err) {
                const error = {
                    statcode: 20001,
                    rowcount: 0,
                    message: err.message,
                };

                return error;
            }
        })
        .finally(() => {
            conn.release();
        });
};

export const __extractShow = async (data: string) => {
    const PGQuery = `select extract.extract_show($1);--`;

    const conn = await pool.dyd.connect();
    return conn
        .query(PGQuery, [`${data}`])
        .then((result: any) => {
            return result.rows;
        })
        .catch((err: any) => {
            if (err) {
                const error = {
                    statcode: 20001,
                    rowcount: 0,
                    message: err.message,
                };

                return error;
            }
        })
        .finally(() => {
            conn.release();
        });
};

export const __extractFind = async (data: string) => {
    const PGQuery = `select extract.extract_find($1);--`;

    const conn = await pool.dyd.connect();
    return conn
        .query(PGQuery, [`${data}`])
        .then((result: any) => {
            return result.rows;
        })
        .catch((err: any) => {
            if (err) {
                const error = {
                    statcode: 20001,
                    rowcount: 0,
                    message: err.message,
                };

                return error;
            }
        })
        .finally(() => {
            conn.release();
        });
};
