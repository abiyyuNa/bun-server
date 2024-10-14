import pg from "../app/db-postgres";

export const __dashboard = async (data: any) => {
    const PGQuery = JSON.parse(data);

    const conn = await pg.dyd.connect();
    return conn
        .query(PGQuery)
        .then((result: any) => {
            const res = {
                statcode: 0,
                rowcount: result.rows.length,
                message: "Data berhasil ditemukan",
                data: result.rows,
            };

            return res;
        })
        .catch((err: any) => {
            if (err) {
                const error = {
                    statcode: 20001,
                    rowcount: 0,
                    message: err.message,
                    data: "[]",
                };

                return error;
            }
        })
        .finally(() => {
            conn.release();
        });
};
