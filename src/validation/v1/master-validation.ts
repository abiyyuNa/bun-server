import { z, ZodType } from "zod";

export class MasterValidation {
    static readonly BARANG_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        kode: z
            .string({ message: "INFO, Kode tidak boleh kosong" })
            .min(6, {
                message: "INFO, Kode WIG minimal 6 karakter",
            })
            .max(6, {
                message: "INFO, Kode WIG maksimal 6 karakter",
            }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(255, {
                message: "INFO, Deksripsi maksimal 100 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly BARANG_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.number().positive(),
        kode: z
            .string({ message: "INFO, Kode tidak boleh kosong" })
            .min(6, {
                message: "INFO, Kode WIG minimal 6 karakter",
            })
            .max(6, {
                message: "INFO, Kode WIG maksimal 6 karakter",
            }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(255, {
                message: "INFO, Deksripsi maksimal 100 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly SUMBER_PENERIMAAN_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        wig_id: z
            .number({ message: "INFO, WIG tidak boleh kosong" })
            .positive(),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(255, {
                message: "INFO, Deksripsi maksimal 100 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly SUMBER_PENERIMAAN_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.number().positive(),
        wig_id: z
            .number({ message: "INFO, WIG tidak boleh kosong" })
            .positive(),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(255, {
                message: "INFO, Deksripsi maksimal 100 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly PROGRAM_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly PROGRAM_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly WIG_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        kode: z
            .string({ message: "INFO, Kode WIG tidak boleh kosong" })
            .min(3, {
                message: "INFO, Kode WIG minimal 3 karakter",
            })
            .max(5, {
                message: "INFO, Kode WIG maksimal 5 karakter",
            }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(100, {
                message: "INFO, Deksripsi maksimal 100 karakter",
            }),
        departemen_id: z
            .number({
                message: "INFO, Departemen tidak boleh kosong",
            })
            .positive({ message: "INFO, Departemen tidak boleh kosong" }),
        created_by: z.number().positive(),
    });

    static readonly WIG_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        kode: z
            .string({ message: "INFO, Kode WIG tidak boleh kosong" })
            .min(3, {
                message: "INFO, Kode WIG minimal 3 karakter",
            })
            .max(5, {
                message: "INFO, Kode WIG maksimal 5 karakter",
            }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(100, {
                message: "INFO, Deksripsi maksimal 100 karakter",
            }),
        departemen_id: z
            .number({
                message: "INFO, Departemen tidak boleh kosong",
            })
            .positive({ message: "INFO, Departemen tidak boleh kosong" }),
        updated_by: z.number().positive(),
    });

    static readonly ORGANISASI_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly ORGANISASI_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly LOKASI_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        ref_jenis_lokasi: z
            .number({ message: "INFO, Jenis lokasi tidak boleh kosong" })
            .positive(),
        kode: z
            .string({ message: "INFO, Kode tidak boleh kosong" })
            .min(4, {
                message: "INFO, Kode minimal 4 karakter",
            })
            .max(4, {
                message: "INFO, Kode maksimal 4 karakter",
            }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(150, {
                message: "INFO, Deksripsi maksimal 150 karakter",
            }),
        alias: z
            .string({ message: "INFO, Alias tidak boleh kosong" })
            .min(3, {
                message: "INFO, Alias minimal 2 karakter",
            })
            .max(3, {
                message: "INFO, Alias maksimal 3 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly LOKASI_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        ref_jenis_lokasi: z
            .number({ message: "INFO, Jenis lokasi tidak boleh kosong" })
            .positive(),
        // kode: z
        //     .string()
        //     .min(4, {
        //         message: "INFO, Kode tidak boleh kosong, minimal 4 karakter",
        //     })
        //     .max(4, {
        //         message: "INFO, Kode tidak boleh kosong, maksimal 4 karakter",
        //     }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(150, {
                message: "INFO, Deksripsi maksimal 150 karakter",
            }),
        alias: z
            .string({ message: "INFO, Alias tidak boleh kosong" })
            .min(3, {
                message: "INFO, Alias minimal 2 karakter",
            })
            .max(3, {
                message: "INFO, Alias maksimal 3 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly LAG_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        kode: z
            .string({ message: "INFO, Kode tidak boleh kosong" })
            .min(2, {
                message: "INFO, Kode minimal 2 karakter",
            })
            .max(5, {
                message: "INFO, Kode maksimal 5 karakter",
            }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(150, {
                message: "INFO, Deksripsi maksimal 150 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly LAG_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        // kode: z
        //     .string()
        //     .min(2, {
        //         message: "INFO, Kode tidak boleh kosong, minimal 2 karakter",
        //     })
        //     .max(2, {
        //         message: "INFO, Kode tidak boleh kosong, minimal 2 karakter",
        //     }),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deksripsi minimal 3 karakter",
            })
            .max(150, {
                message: "INFO, Deksripsi maksimal 150 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly DONATUR_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        nama: z
            .string({
                message: "INFO, Nama tidak boleh kosong",
            })
            .min(3, {
                message: "INFO, Nama minimal 3 karakter",
            })
            .max(100, {
                message: "INFO, Nama maksimal 4 karakter",
            })
            .refine(
                // (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""),
                (value) => /^[A-Z][a-zA-Z]*$/.test(value ?? ""),
                {
                    message:
                        "INFO, Nama dimulai dengan huruf kapital dan tidak boleh mengandung angka",
                },
            ),
        nik: z
            .string({
                message: "INFO, NIK tidak boleh kosong",
            })
            .min(16, {
                message: "INFO, NIK minimal 16 karakter",
            })
            .max(16, {
                message: "INFO, NIK maksimal 16 karakter",
            }),
        jenis_kelamin: z.number().positive(),
        alamat: z
            .string({
                message: "INFO, Alamat tidak boleh kosong",
            })
            .min(15, {
                message: "INFO, Alamat minimal 15 karakter",
            })
            .max(150, {
                message: "INFO, Alamat maksimal 255 karakter",
            }),
        tanggal_lahir: z
            .string({
                message: "INFO, Tanggal lahir tidak boleh kosong",
            })
            .date(),
        kontak: z
            .string({
                message: "INFO, Kontak tidak boleh kosong",
            })
            .min(7, {
                message: "INFO, Kontak minimal 7 karakter",
            })
            .max(13, {
                message: "INFO, Kontak maksimal 13 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly DONATUR_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        nama: z
            .string({
                message: "INFO, Nama tidak boleh kosong",
            })
            .min(3, {
                message: "INFO, Nama minimal 3 karakter",
            })
            .max(100, {
                message: "INFO, Nama maksimal 4 karakter",
            })
            .refine(
                (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""),
                { message: "INFO, Nama tidak boleh berisi angka" },
            ),
        nik: z
            .string({
                message: "INFO, NIK tidak boleh kosong",
            })
            .min(16, {
                message: "INFO, NIK minimal 16 karakter",
            })
            .max(16, {
                message: "INFO, NIK maksimal 16 karakter",
            }),
        jenis_kelamin: z.number().positive(),
        alamat: z
            .string({
                message: "INFO, Alamat tidak boleh kosong",
            })
            .min(15, {
                message: "INFO, Alamat minimal 15 karakter",
            })
            .max(150, {
                message: "INFO, Alamat maksimal 255 karakter",
            }),
        tanggal_lahir: z
            .string({
                message: "INFO, Tanggal lahir tidak boleh kosong",
            })
            .date(),
        kontak: z
            .string({
                message: "INFO, Kontak tidak boleh kosong",
            })
            .min(7, {
                message: "INFO, Kontak minimal 7 karakter",
            })
            .max(13, {
                message: "INFO, Kontak maksimal 13 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly ASRAMA_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        kode: z
            .string()
            .min(4, {
                message: "INFO, Kode tidak boleh kosong, minimal 4 karakter",
            })
            .max(4, {
                message: "INFO, Kode tidak boleh kosong, maksimal 4 karakter",
            }),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        alias: z
            .string()
            .min(3, {
                message: "INFO, Alias tidak boleh kosong, minimal 2 karakter",
            })
            .max(3, {
                message: "INFO, Alias tidak boleh kosong, maksimal 3 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly ASRAMA_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        // kode: z
        //     .string()
        //     .min(4, {
        //         message: "INFO, Kode tidak boleh kosong, minimal 4 karakter",
        //     })
        //     .max(4, {
        //         message: "INFO, Kode tidak boleh kosong, maksimal 4 karakter",
        //     }),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        alias: z
            .string()
            .min(3, {
                message: "INFO, Alias tidak boleh kosong, minimal 2 karakter",
            })
            .max(3, {
                message: "INFO, Alias tidak boleh kosong, maksimal 3 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly DEPARTEMEN_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        kode: z
            .string()
            .min(2, {
                message: "INFO, Kode tidak boleh kosong, minimal 2 karakter",
            })
            .max(2, {
                message: "INFO, Kode tidak boleh kosong, minimal 2 karakter",
            }),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly DEPARTEMEN_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        // kode: z
        //     .string()
        //     .min(2, {
        //         message: "INFO, Kode tidak boleh kosong, minimal 2 karakter",
        //     })
        //     .max(2, {
        //         message: "INFO, Kode tidak boleh kosong, minimal 2 karakter",
        //     }),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly AKAD_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly AKAD_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.string().min(0).max(11),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, minimal 3 karakter",
            })
            .max(150, {
                message:
                    "INFO, Deksripsi tidak boleh kosong, maksimal 150 karakter",
            }),
        updated_by: z.number().positive(),
    });

    static readonly JNS_REF_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Jenis Referensi tidak boleh kosong, minimal 3 karakter",
            })
            .max(255, {
                message:
                    "INFO, Jenis Referensi tidak boleh kosong, maksimal 255 karakter",
            }),
        status: z.boolean(),
    });

    static readonly JNS_REF_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.number().positive(),
        deskripsi: z
            .string()
            .min(3, {
                message:
                    "INFO, Jenis Referensi tidak boleh kosong, minimal 3 karakter",
            })
            .max(255, {
                message:
                    "INFO, Jenis Referensi tidak boleh kosong, maksimal 255 karakter",
            }),
        status: z.boolean(),
    });

    static readonly REF_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
    });

    static readonly REF_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.number().positive(),
        jenis: z
            .number()
            .positive({ message: "INFO, Jenis tidak boleh kosong" }),
        deskripsi: z
            .string()
            .min(1, {
                message:
                    "INFO, Referensi tidak boleh kosong, minimal 1 karakter",
            })
            .max(255, {
                message:
                    "INFO, Referensi tidak boleh kosong, maksimal 255 karakter",
            }),
        status: z.boolean(),
    });

    static readonly PEGAWAI_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        nip: z
            .string({
                message: "INFO, NIP tidak boleh kosong",
            })
            .min(9, {
                message: "INFO, NIP tidak boleh kosong, minimal 9 karakter",
            })
            .max(30, {
                message: "INFO, NIP tidak boleh kosong, maksimal 30 karakter",
            }),
        nik: z
            .string({
                message: "INFO, NIK tidak boleh kosong",
            })
            .min(16, {
                message: "INFO, NIK tidak boleh kosong, minimal 16 karakter",
            })
            .max(16, {
                message: "INFO, NIK tidak boleh kosong, maksimal 16 karakter",
            }),
        nama: z
            .string({
                message: "INFO, Nama tidak boleh kosong",
            })
            .min(3, {
                message: "INFO, Nama tidak boleh kosong, minimal 3 karakter",
            })
            .max(75, {
                message: "INFO, Nama tidak boleh kosong, maksimal 75 karakter",
            })
            .refine(
                (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""),
                { message: "INFO, Nama tidak boleh berisi angka" },
            ),
        // panggilan: z.string().min(3).max(15).optional(),
        // gelar_depan: z.string().max(13).optional(),
        // gelar_belakang: z.string().max(15).optional(),
        // tempat_lahir: z.string().min(3).max(25).optional(),
        tanggal_lahir: z
            .string({
                message: "INFO, Tanggal lahir tidak boleh kosong",
            })
            .date(),
        agama: z
            .number({
                message: "INFO, Agama tidak boleh kosong",
            })
            .positive({ message: "INFO, Agama tidak boleh kosong" }),
        jenis_kelamin: z
            .number()
            .positive({ message: "INFO, Jenis Kelamin tidak boleh kosong" }),
        alamat: z
            .string({
                message: "INFO, Alamat tidak boleh kosong",
            })
            .min(15, {
                message: "INFO, Alamat tidak boleh kosong, minimal 15 karakter",
            })
            .max(255, {
                message:
                    "INFO, Alamat tidak boleh kosong, maksimal 255 karakter",
            }),
        // rt: z.string().min(1).max(3).optional(),
        // rw: z.string().min(1).max(3).optional(),
        // kodepos: z.number().optional(),
        wilayah: z
            .string({
                message: "INFO, Wilayah tidak boleh kosong",
            })
            .min(10, {
                message:
                    "INFO, Wilayah tidak boleh kosong, minimal 10 karakter",
            })
            .max(10, {
                message:
                    "INFO, Wilayah tidak boleh kosong, maksimal 10 karakter",
            }),
        jabatan: z
            .string({
                message: "INFO, Jabatan tidak boleh kosong",
            })
            .min(5, {
                message: "INFO, Jabatan tidak boleh kosong, minimal 5 karakter",
            })
            .max(5, {
                message:
                    "INFO, Jabatan tidak boleh kosong, maksimal 5 karakter",
            }),
        kontak: z
            .string({
                message: "INFO, Kontak tidak boleh kosong",
            })
            .min(7, {
                message: "INFO, Kontak tidak boleh kosong",
            })
            .max(12, {
                message: "INFO, Kontak tidak boleh kosong",
            })
            .refine((value) => /^(62|0)8[1-9]\d{6,11}$/.test(value ?? ""), {
                message: "INFO, nomor handphone tidak sesuai ",
            }),
        lokasi_id: z
            .number({
                message: "INFO, Lokasi tidak boleh kosong",
            })
            .positive({ message: "INFO, Lokasi tidak boleh kosong" }),
        departemen_id: z
            .number({
                message: "INFO, Departemen tidak boleh kosong",
            })
            .positive({ message: "INFO, Departemen tidak boleh kosong" }),
        created_by: z.number().positive(),
    });

    static readonly PEGAWAI_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.number().positive(),
        nip: z
            .string({
                message: "INFO, NIP tidak boleh kosong",
            })
            .min(9, {
                message: "INFO, NIP tidak boleh kosong, minimal 9 karakter",
            })
            .max(30, {
                message: "INFO, NIP tidak boleh kosong, maksimal 30 karakter",
            }),
        nik: z
            .string({
                message: "INFO, NIK tidak boleh kosong",
            })
            .min(16, {
                message: "INFO, NIK tidak boleh kosong, minimal 16 karakter",
            })
            .max(16, {
                message: "INFO, NIK tidak boleh kosong, maksimal 16 karakter",
            }),
        nama: z
            .string({
                message: "INFO, Nama tidak boleh kosong",
            })
            .min(3, {
                message: "INFO, Nama tidak boleh kosong, minimal 3 karakter",
            })
            .max(75, {
                message: "INFO, Nama tidak boleh kosong, maksimal 75 karakter",
            })
            .refine(
                (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""),
                { message: "INFO, Nama tidak boleh berisi angka" },
            ),
        // panggilan: z.string().min(3).max(15).optional(),
        // gelar_depan: z.string().max(13).optional(),
        // gelar_belakang: z.string().max(15).optional(),
        // tempat_lahir: z.string().min(3).max(25).optional(),
        tanggal_lahir: z
            .string({
                message: "INFO, Tanggal lahir tidak boleh kosong",
            })
            .date(),
        agama: z
            .number()
            .positive({ message: "INFO, Agama tidak boleh kosong" }),
        jenis_kelamin: z
            .number()
            .positive({ message: "INFO, Jenis Kelamin tidak boleh kosong" }),
        alamat: z
            .string({
                message: "INFO, Alamat tidak boleh kosong",
            })
            .min(15, {
                message: "INFO, Alamat tidak boleh kosong, minimal 15 karakter",
            })
            .max(255, {
                message:
                    "INFO, Alamat tidak boleh kosong, maksimal 255 karakter",
            }),
        // rt: z.string().min(1).max(3).optional(),
        // rw: z.string().min(1).max(3).optional(),
        // kodepos: z.number().optional(),
        jabatan: z
            .string({
                message: "INFO, Jabatan tidak boleh kosong",
            })
            .min(5, {
                message: "INFO, Jabatan tidak boleh kosong, minimal 5 karakter",
            })
            .max(5, {
                message:
                    "INFO, Jabatan tidak boleh kosong, maksimal 5 karakter",
            }),
        kontak: z
            .string({
                message: "INFO, Kontak tidak boleh kosong",
            })
            .min(7, {
                message: "INFO, Kontak tidak boleh kosong, minimal 7 karakter",
            })
            .max(13, {
                message:
                    "INFO, Kontak tidak boleh kosong, maksimal 13 karakter",
            })
            .refine((value) => /^(62|0)8[1-9]\d{6,11}$/.test(value ?? ""), {
                message: "INFO, Kontak tidak sesuai ",
            }),
        lokasi_id: z
            .number({
                message: "INFO, Lokasi tidak boleh kosong",
            })
            .positive({ message: "INFO, Lokasi tidak boleh kosong" }),
        departemen_id: z
            .number({
                message: "INFO, Departemen tidak boleh kosong",
            })
            .positive({ message: "INFO, Departemen tidak boleh kosong" }),
        updated_by: z.number().positive(),
    });

    static readonly SELECT: ZodType = z.object({
        object: z.string().min(1).max(35),
        filter: z.string().min(1).max(255),
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
        id: z.string(),
    });

    static readonly SOFT_DELETE: ZodType = z.object({
        object: z.string().min(1).max(35),
        // id: z.number().positive(),
        status: z.boolean().optional(),
        isaktif: z.boolean().optional(),
        isdonatur: z.boolean().optional(),
        updated_by: z.number().positive(),
    });
}
