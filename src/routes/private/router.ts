import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { __authMiddleware } from "../../middleware/auth-middleware";
import { AplikasiController } from "../../controller/aplikasi-controller";
import { MasterController } from "../../controller/master-controller";
import { ExtractController } from "../../controller/extract-controller";
import { PenerimaanController } from "../../controller/penerimaan-controller";

export const privateRouters = new Elysia();
privateRouters.use(
    swagger({
        path: "/dyd-private",
    }),
);

//* router module penerimaan
privateRouters
    .onBeforeHandle((request) => {
        return __authMiddleware(request.headers["x-token"]);
    })
    .onAfterHandle(() => {})
    .group("/api/v1/penerimaan", (trx) =>
        trx
            .post(
                "/barang",
                async (request) => PenerimaanController.barangCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Penerimaan} Barang",
                        tags: ["Penerimaan"],
                    },
                },
            )
            .post(
                "/",
                async (request) =>
                    PenerimaanController.transferTunaiCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Penerimaan} Transfer Tunai",
                        tags: ["Penerimaan"],
                    },
                },
            )
            .patch(
                "/:id",
                async (request) => PenerimaanController.softDelete(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Penerimaan} Soft Delete",
                        tags: ["Penerimaan"],
                    },
                },
            )
            .get(
                "/:id",
                async (request) => PenerimaanController.show(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Penerimaan} Show",
                        tags: ["Penerimaan"],
                    },
                },
            )
            .get("/", async (request) => PenerimaanController.find(request), {
                beforeHandle() {},
                detail: {
                    summary: "{Penerimaan} Find or all",
                    tags: ["Penerimaan"],
                },
            }),
    );

//* router module extract
privateRouters
    .onBeforeHandle((request) => {
        return __authMiddleware(request.headers["x-token"]);
    })
    .onAfterHandle(() => {})
    .group("/api/v1/extract", (ext) =>
        ext
            .post(
                "/penerimaan",
                async (request) => ExtractController.penerimaanCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Extract} Penerimaan",
                        tags: ["Extract"],
                    },
                },
            )
            .post(
                "/target",
                async (request) => ExtractController.targetCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Extract} Target",
                        tags: ["Extract"],
                    },
                },
            )
            .get("/:id", async (request) => ExtractController.show(request), {
                beforeHandle() {},
                detail: {
                    summary: "{Extract} Show",
                    tags: ["Extract"],
                },
            })
            .get("/", async (request) => ExtractController.find(request), {
                beforeHandle() {},
                detail: {
                    summary: "{Extract} Find or all",
                    tags: ["Extract"],
                },
            }),
    );

//* router module master
privateRouters
    .onBeforeHandle((request) => {
        return __authMiddleware(request.headers["x-token"]);
    })
    .onAfterHandle(() => {})
    .group("/api/v1/master", (mst) =>
        mst
            .post(
                "/barang",
                async (request) => MasterController.barangCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Barang",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/barang/:id",
                async (request) => MasterController.barangUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Barang",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/sumber-penerimaan",
                async (request) =>
                    MasterController.sumberPenerimaanCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Sumber Penerimaan",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/sumber-penerimaan/:id",
                async (request) =>
                    MasterController.sumberPenerimaanUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Sumber Penerimaan",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/program",
                async (request) => MasterController.programCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Program",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/program/:id",
                async (request) => MasterController.programUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Program",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/wig",
                async (request) => MasterController.wigCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} WIG",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/wig/:id",
                async (request) => MasterController.wigUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} WIG",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/organisasi",
                async (request) => MasterController.organisasiCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Organisasi",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/organisasi/:id",
                async (request) => MasterController.organisasiUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Organisasi",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/lokasi",
                async (request) => MasterController.lokasiCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Lokasi",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/lokasi/:id",
                async (request) => MasterController.lokasiUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Lokasi",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/lag",
                async (request) => MasterController.lagCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} LAG",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/lag/:id",
                async (request) => MasterController.lagUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} LAG",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/donatur",
                async (request) => MasterController.donaturCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Donatur",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/donatur/:id",
                async (request) => MasterController.donaturUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Donatur",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/asrama",
                async (request) => MasterController.asramaCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Asrama",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/asrama/:id",
                async (request) => MasterController.asramaUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Asrama",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/departemen",
                async (request) => MasterController.departemenCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Departemen",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/departemen/:id",
                async (request) => MasterController.departemenUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Departemen",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/akad",
                async (request) => MasterController.akadCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Akad",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/akad/:id",
                async (request) => MasterController.akadUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Akad",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/jenis-referensi",
                async (request) =>
                    MasterController.jenisReferensiCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Jenis Referensi",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/jenis-referensi/:id",
                async (request) =>
                    MasterController.jenisReferensiUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Jenis Referensi",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/referensi",
                async (request) => MasterController.referensiCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Referensi",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/referensi/:jenis/:id",
                async (request) => MasterController.referensiUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Referensi",
                        tags: ["Master"],
                    },
                },
            )
            .post(
                "/pegawai",
                async (request) => MasterController.pegawaiCreate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Pegawai",
                        tags: ["Master"],
                    },
                },
            )
            .put(
                "/pegawai/:id",
                async (request) => MasterController.pegawaiUpdate(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Pegawai",
                        tags: ["Master"],
                    },
                },
            )
            .get(
                "/selectize",
                async (request) => MasterController.selectize(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Selectize",
                        tags: ["Master"],
                    },
                },
            )
            .get("/:id", async (request) => MasterController.show(request), {
                beforeHandle() {},
                detail: {
                    summary: "{Master} Show",
                    tags: ["Master"],
                },
            })
            .get("/", async (request) => MasterController.find(request), {
                beforeHandle() {},
                detail: {
                    summary: "{Master} Find or all",
                    tags: ["Master"],
                },
            })
            .patch(
                "/:id",
                async (request) => MasterController.softDelete(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Master} Soft Delete",
                        tags: ["Master"],
                    },
                },
            ),
    );

//* router module aplikasi
privateRouters
    .onBeforeHandle((request) => {
        return __authMiddleware(request.headers["x-token"]);
    })
    .onAfterHandle(() => {})
    .group("/api/v1", (app) =>
        app
            .post(
                "/sign-up",
                async (request) => AplikasiController.signUp(request),
                {
                    detail: {
                        summary: "{Pengguna} Sign up",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .delete(
                "/sign-out",
                async (request) => AplikasiController.signOut(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Pengguna} Sign out",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .put(
                "/pengguna/forgot/:id",
                async (request) => AplikasiController.forgot(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Pengguna} Forgot",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .patch(
                "/pengguna/:id",
                async (request) => AplikasiController.updatePatch(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Pengguna} Update-status",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .put(
                "/pengguna/:id",
                async (request) => AplikasiController.updatePut(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Pengguna} Update",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .get(
                "/pengguna/:id",
                async (request) => AplikasiController.show(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Pengguna} Show",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .get(
                "/pengguna",
                async (request) => AplikasiController.find(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Pengguna} Find or all",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .post(
                "/pengguna/pengguna-group",
                async (request) =>
                    AplikasiController.penggunaGroupCreate(request),
                {
                    detail: {
                        summary: "{Pengguna} Pengguna Group",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .put(
                "/pengguna/pengguna-group/:id",
                async (request) =>
                    AplikasiController.penggunaGroupUpdate(request),
                {
                    detail: {
                        summary: "{Pengguna} Pengguna Group",
                        tags: ["Aplikasi"],
                    },
                },
            )
            .get(
                "/search",
                async (request) => AplikasiController.searchEngine(request),
                {
                    beforeHandle() {},
                    detail: {
                        summary: "{Search Engine} Search Engine",
                        tags: ["Aplikasi"],
                    },
                },
            ),
    );
