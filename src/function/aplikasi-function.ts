import pool from "../app/db-postgres";

export const __aplikasiValidate = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_validate($1);--`;

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

export const __aplikasiCreate = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_create($1);--`;

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

export const __aplikasiUpdate = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_update($1);--`;

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

export const __aplikasiSoftDelete = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_soft_delete($1);--`;

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

export const __aplikasiHardDelete = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_hard_delete($1);--`;

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

export const __aplikasiShow = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_show($1);--`;

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

export const __aplikasiFind = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_find($1);--`;

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

export const __aplikasiSearchEngine = async (data: string) => {
    const PGQuery = `select aplikasi.aplikasi_search_engine($1);--`;

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
