import pool from "../app/db-postgres";

export const __penerimaanCreate = async (data: string) => {
    const PGQuery = `select penerimaan.penerimaan_create($1);--`;

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

export const __penerimaanShow = async (data: string) => {
    const PGQuery = `select penerimaan.penerimaan_show($1);--`;

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

export const __penerimaanUpdate = async (data: string) => {
    const PGQuery = `select penerimaan.penerimaan_update($1);--`;

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

export const __penerimaanFind = async (data: string) => {
    const PGQuery = `select penerimaan.penerimaan_find($1);--`;

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

export const __penerimaanSoftDelete = async (data: string) => {
    const PGQuery = `select penerimaan.penerimaan_soft_delete($1);--`;

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
