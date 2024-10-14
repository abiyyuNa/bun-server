import { z, ZodType } from "zod";

export class PenerimaanValidation {
    static readonly BARANG: ZodType = z.object({
        object: z.string().min(1).max(35),
        donatur_id: z
            .number({ message: "INFO, Donatur tidak boleh kosong" })
            .positive(),
        akad_id: z
            .string({ message: "INFO, Akad tidak boleh kosong" })
            .min(5)
            .max(5),
        kategori: z
            .number({ message: "INFO, Kategori tidak boleh kosong" })
            .positive(),
        barang_id: z.number({ message: "INFO, Barang tidak boleh kosong" }),
        ref_satuan: z.number({ message: "INFO, Satuan tidak boleh kosong" }),
        ref_jenis: z.number({ message: "INFO, Jenis tidak boleh kosong" }),
        tanggal_expired: z
            .string({ message: "INFO, Tanggal tidak boleh kosong" })
            .date(),
        jumlah: z
            .number({ message: "INFO, Jumlah tidak boleh kosong" })
            .positive(),
    });

    static readonly TRANSFER_TUNAI: ZodType = z.object({
        object: z.string().min(1).max(35),
        donatur_id: z
            .number({ message: "INFO, Donatur tidak boleh kosong" })
            .positive(),
        akad_id: z
            .string({ message: "INFO, Akad tidak boleh kosong" })
            .min(5)
            .max(5),
        nilai: z
            .number({ message: "INFO, Nominal tidak boleh kosong" })
            .positive(),
        kategori: z
            .number({ message: "INFO, Kategori tidak boleh kosong" })
            .positive(),
        desc_lag: z
            .string({ message: "INFO, Deskripsi Lag tidak boleh kosong" })
            .min(1)
            .max(150),
    });

    static readonly FIND: ZodType = z.object({
        object: z.string().min(1).max(35),
        offset: z.number().nonnegative(),
        limit: z.number().max(100).positive(),
        filter: z.string(),
        order: z.string(),
    });

    static readonly SHOW: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(36).max(36),
    });

    static readonly SOFT_DELETE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(36).max(36),
        isaktif: z.boolean().optional(),
    });
}
