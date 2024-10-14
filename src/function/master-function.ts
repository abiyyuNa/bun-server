import pool from "../app/db-postgres";

export const __masterValidateCreate = async (data: string) => {
    const PGQuery = `select master.master_validate_create($1);--`;

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

export const __masterValidateUpdate = async (data: string) => {
    const PGQuery = `select master.master_validate_update($1);--`;

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

export const __masterSelectize = async (data: string) => {
    const PGQuery = `select master.master_select($1);--`;

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

export const __masterCreate = async (data: string) => {
    const PGQuery = `select master.master_create($1);--`;

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

export const __masterShow = async (data: string) => {
    const PGQuery = `select master.master_show($1);--`;

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

export const __masterUpdate = async (data: string) => {
    const PGQuery = `select master.master_update($1);--`;

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

export const __masterFind = async (data: string) => {
    const PGQuery = `select master.master_find($1);--`;

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

export const __masterSoftDelete = async (data: string) => {
    const PGQuery = `select master.master_soft_delete($1);--`;

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
