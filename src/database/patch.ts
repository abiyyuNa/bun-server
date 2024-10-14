import fs from "fs";
import path from "path";
import { Client } from "pg";

const client = new Client({
    user: Bun.env.DB_USER_PG,
    host: Bun.env.DB_HOST_PG,
    database: Bun.env.DB_PG,
    password: String(Bun.env.DB_PASS_PG),
    port: Number(Bun.env.DB_PORT_PG),
});

async function runSQLFiles() {
    try {
        await client.connect();
        console.log(`============ START ===========`);
        console.log(`==============================`);
        console.log("Terhubung ke database.");
        console.log(`==============================`);

        const sqlDir = path.join(__dirname, "ddl");
        const subdirs = fs
            .readdirSync(sqlDir)
            .filter((file) =>
                fs.lstatSync(path.join(sqlDir, file)).isDirectory(),
            );

        for (const subdir of subdirs) {
            const subdirPath = path.join(sqlDir, subdir);
            const files = fs
                .readdirSync(subdirPath)
                .filter((file) => file.endsWith(".sql"))
                .sort((a, b) => a.localeCompare(b));

            for (const file of files) {
                const filePath = path.join(subdirPath, file);
                const sql = fs.readFileSync(filePath, "utf8");
                console.log(`Menjalankan ${file} dari ${subdir}...`);
                await client.query(sql);
                console.log(`${file} dari ${subdir} berhasil dijalankan.`);
            }
        }

        console.log("Semua file SQL berhasil dijalankan.");
    } catch (err) {
        console.error("Terjadi kesalahan saat menjalankan file SQL:", err);
    } finally {
        await client.end();
        console.log(`==============================`);
        console.log("Terputus dari database.");
        console.log(`==============================`);

        console.log(`============= END ============`);
    }
}

runSQLFiles();
