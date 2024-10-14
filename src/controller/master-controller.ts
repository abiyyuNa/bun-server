import { z } from "zod";
import { logger } from "../app/logging";
import {
    AkadRequest,
    AsramaRequest,
    BarangRequest,
    DepartemenRequest,
    DonaturRequest,
    FindallRequest,
    JenisReferensiRequest,
    LagRequest,
    LokasiRequest,
    OrganisasiRequest,
    PegawaiRequest,
    ProgramRequest,
    ReferensiRequest,
    SelectRequest,
    ShowRequest,
    SoftDeleteRequest,
    SumberPenerimaanRequest,
    WigRequest,
} from "../model/v1/master-model";
import { validation } from "../validation/validation";
import { MasterValidation } from "../validation/v1/master-validation";
import { MasterService } from "../service/master-service";

export class MasterController {
    static async barangCreate(request: any) {
        try {
            const data: BarangRequest = request.body as BarangRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.BARANG_CREATE, data);
            const response = await MasterService._barangCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async barangUpdate(request: any) {
        try {
            const data: BarangRequest = request.body as BarangRequest;
            data.token = request.headers["x-token"];
            data.id = Number(request.params.id);

            validation.validate(MasterValidation.BARANG_UPDATE, data);
            const response = await MasterService._barangUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async sumberPenerimaanCreate(request: any) {
        try {
            const data: SumberPenerimaanRequest =
                request.body as SumberPenerimaanRequest;
            data.token = request.headers["x-token"];

            validation.validate(
                MasterValidation.SUMBER_PENERIMAAN_CREATE,
                data,
            );
            const response = await MasterService._sumberPenerimaanCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async sumberPenerimaanUpdate(request: any) {
        try {
            const data: SumberPenerimaanRequest =
                request.body as SumberPenerimaanRequest;
            data.token = request.headers["x-token"];
            data.id = Number(request.params.id);

            validation.validate(
                MasterValidation.SUMBER_PENERIMAAN_UPDATE,
                data,
            );
            const response = await MasterService._sumberPenerimaanUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async programCreate(request: any) {
        try {
            const data: ProgramRequest = request.body as ProgramRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.PROGRAM_CREATE, data);
            const response = await MasterService._programCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async programUpdate(request: any) {
        try {
            const data: ProgramRequest = request.body as ProgramRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.PROGRAM_UPDATE, data);
            const response = await MasterService._programUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async wigCreate(request: any) {
        try {
            const data: WigRequest = request.body as WigRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.WIG_CREATE, data);
            const response = await MasterService._wigCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async wigUpdate(request: any) {
        try {
            const data: WigRequest = request.body as WigRequest;
            data.token = request.headers["x-token"];
            data.id = Number(request.params.id);

            validation.validate(MasterValidation.WIG_UPDATE, data);
            const response = await MasterService._wigUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async organisasiCreate(request: any) {
        try {
            const data: OrganisasiRequest = request.body as OrganisasiRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.ORGANISASI_CREATE, data);
            const response = await MasterService._organisasiCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async organisasiUpdate(request: any) {
        try {
            const data: OrganisasiRequest = request.body as OrganisasiRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.ORGANISASI_UPDATE, data);
            const response = await MasterService._organisasiUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async lokasiCreate(request: any) {
        try {
            const data: LokasiRequest = request.body as LokasiRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.LOKASI_CREATE, data);
            const response = await MasterService._lokasiCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async lokasiUpdate(request: any) {
        try {
            const data: LokasiRequest = request.body as LokasiRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.LOKASI_UPDATE, data);
            const response = await MasterService._lokasiUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async lagCreate(request: any) {
        try {
            const data: LagRequest = request.body as LagRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.LAG_CREATE, data);
            const response = await MasterService._lagCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async lagUpdate(request: any) {
        try {
            const data: LagRequest = request.body as LagRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.LAG_UPDATE, data);
            const response = await MasterService._lagUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async donaturCreate(request: any) {
        try {
            const data: DonaturRequest = request.body as DonaturRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.DONATUR_CREATE, data);
            const response = await MasterService._donaturCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async donaturUpdate(request: any) {
        try {
            const data: DonaturRequest = request.body as DonaturRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.DONATUR_UPDATE, data);
            const response = await MasterService._donaturUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async asramaCreate(request: any) {
        try {
            const data: AsramaRequest = request.body as AsramaRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.ASRAMA_CREATE, data);
            const response = await MasterService._asramaCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async asramaUpdate(request: any) {
        try {
            const data: AsramaRequest = request.body as AsramaRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.ASRAMA_UPDATE, data);
            const response = await MasterService._asramaUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async departemenCreate(request: any) {
        try {
            const data: DepartemenRequest = request.body as DepartemenRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.DEPARTEMEN_CREATE, data);
            const response = await MasterService._departemenCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async departemenUpdate(request: any) {
        try {
            const data: DepartemenRequest = request.body as DepartemenRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.DEPARTEMEN_UPDATE, data);
            const response = await MasterService._departemenUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async akadCreate(request: any) {
        try {
            const data: AkadRequest = request.body as AkadRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.AKAD_CREATE, data);
            const response = await MasterService._akadCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async akadUpdate(request: any) {
        try {
            const data: AkadRequest = request.body as AkadRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.AKAD_UPDATE, data);
            const response = await MasterService._akadUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async jenisReferensiCreate(request: any) {
        try {
            const data: JenisReferensiRequest =
                request.body as JenisReferensiRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.JNS_REF_CREATE, data);
            const response = await MasterService._jenisReferensiCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async jenisReferensiUpdate(request: any) {
        try {
            const data: JenisReferensiRequest =
                request.body as JenisReferensiRequest;
            data.token = request.headers["x-token"];
            data.id = Number(request.params.id);

            validation.validate(MasterValidation.JNS_REF_UPDATE, data);
            const response = await MasterService._jenisReferensiUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async referensiCreate(request: any) {
        try {
            const data: ReferensiRequest = request.body as ReferensiRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.REF_CREATE, data);
            const response = await MasterService._referensiCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async referensiUpdate(request: any) {
        try {
            const data: ReferensiRequest = request.body as ReferensiRequest;
            data.token = request.headers["x-token"];
            data.jenis = Number(request.params.jenis);
            data.id = Number(request.params.id);

            validation.validate(MasterValidation.REF_UPDATE, data);
            const response = await MasterService._referensiUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async pegawaiCreate(request: any) {
        try {
            const data: PegawaiRequest = request.body as PegawaiRequest;
            data.token = request.headers["x-token"];

            validation.validate(MasterValidation.PEGAWAI_CREATE, data);
            const response = await MasterService._pegawaiCreate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async pegawaiUpdate(request: any) {
        try {
            const data: PegawaiRequest = request.body as PegawaiRequest;
            data.token = request.headers["x-token"];
            data.id = Number(request.params.id);

            validation.validate(MasterValidation.PEGAWAI_UPDATE, data);
            const response = await MasterService._pegawaiUpdate(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async selectize(request: any) {
        try {
            const data: SelectRequest = {
                object: request.query.param0,
                filter: request.query.param1,
                token: request.headers["x-token"],
            };

            validation.validate(MasterValidation.SELECT, data);
            const response = await MasterService._selectize(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async find(request: any) {
        try {
            const data: FindallRequest = {
                token: request.headers["x-token"],
                object: request.query.param0,
                offset: request.query.param1 ? Number(request.query.param1) : 0,
                limit: request.query.param2 ? Number(request.query.param2) : 10,
                filter: request.query.param3 as string,
                order: request.query.param4 as string,
            };

            validation.validate(MasterValidation.FIND, data);
            const response = await MasterService._find(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }

    static async show(request: any) {
        try {
            const data: ShowRequest = {
                object: request.query.param0,
                token: request.headers["x-token"],
                id: request.params.id,
            };

            validation.validate(MasterValidation.SHOW, data);
            const response = await MasterService._show(data);
            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }
            return error;
        }
    }

    static async softDelete(request: any) {
        try {
            const data: SoftDeleteRequest = request.body as SoftDeleteRequest;
            data.token = request.headers["x-token"];
            data.id = request.params.id;

            validation.validate(MasterValidation.SOFT_DELETE, data);
            const response = await MasterService._softDelete(data);

            return response;
        } catch (error) {
            logger.log("error", error);
            if (error instanceof z.ZodError) {
                return {
                    statcode: 20004,
                    rowcount: 0,
                    message: error.errors,
                    data: "",
                };
            }

            return error;
        }
    }
}
