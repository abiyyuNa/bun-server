import { z, ZodType } from "zod";

export class AplikasiValidation {
    static readonly SIGNUP: ZodType = z
        .object({
            token: z.string().optional(),
            object: z.string().min(1).max(35),
            username: z
                .string({
                    message: "INFO, Username tidak boleh kosong",
                })
                .min(4, {
                    message: "INFO, Username minimal 4 karakter",
                })
                .max(100, {
                    message: "INFO, Username maksimal 100 karakter",
                }),
            password: z
                .string({
                    message: "INFO, Password tidak boleh kosong",
                })
                .min(4, {
                    message: "INFO, Password minimal 4 karakter",
                })
                .max(150, {
                    message: "INFO, Password maksimal 150 karakter",
                }),
            confirmPassword: z
                .string({
                    message: "INFO, Konfirmasi password tidak boleh kosong",
                })
                .min(4, {
                    message: "INFO, Konfirmasi password minimal 4 karakter",
                })
                .max(150, {
                    message: "INFO, Konfirmasi password maksimal 150 karakter",
                }),
            email: z
                .string({
                    message: "INFO, Email tidak boleh kosong",
                })
                .email({
                    message: "INFO, Alamat email tidak sesuai",
                }),
            pegawai_id: z.number().positive(),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "INFO, Passwords tidak sesuai",
            path: ["confirmPassword"], //? Path to the field to attach error message
        });

    static readonly SIGNIN: ZodType = z.object({
        object: z.string().min(1).max(35),
        username: z
            .string()
            .min(4, {
                message:
                    "INFO, Username tidak boleh kosong, minimal 4 karakter",
            })
            .max(100, {
                message:
                    "INFO, Username tidak boleh kosong, maksimal 100 karakter",
            }),
        password: z
            .string()
            .min(4, {
                message:
                    "INFO, Password tidak boleh kosong, minimal 4 karakter",
            })
            .max(16, {
                message:
                    "INFO, Password tidak boleh kosong, maksimal 16 karakter",
            }),
    });

    static readonly FORGOT: ZodType = z
        .object({
            id: z.number().positive(),
            object: z.string().min(1).max(35),
            username: z
                .string()
                .min(4, {
                    message:
                        "INFO, Username tidak boleh kosong, minimal 4 karakter",
                })
                .max(100, {
                    message:
                        "INFO, Username tidak boleh kosong, maksimal 100 karakter",
                }),
            newPassword: z
                .string()
                .min(4, {
                    message:
                        "INFO, New password tidak boleh kosong, minimal 4 karakter",
                })
                .max(100, {
                    message:
                        "INFO, New password tidak boleh kosong, maksimal 100 karakter",
                }),
            confirmPassword: z
                .string()
                .min(4, {
                    message:
                        "INFO, Konfirmasi Password tidak boleh kosong, minimal 4 karakter",
                })
                .max(150),
        })
        .refine((data) => data.newPassword === data.confirmPassword, {
            message: "INFO, Passwords tidak sesuai",
            path: ["confirmPassword"], //? Path to the field to attach error message
        });

    static readonly STATUS: ZodType = z.object({
        id: z.number().positive(),
        token: z.string(),
        object: z.string().min(1).max(35),
        status: z.boolean(),
    });

    static readonly PENGGUNA_UPDATE: ZodType = z.object({
        id: z.number().positive(),
        token: z.string(),
        object: z.string().min(1).max(35),
        username: z
            .string({
                message: "INFO, Username tidak boleh kosong",
            })
            .min(4, {
                message: "INFO, Username minimal 4 karakter",
            })
            .max(100, {
                message: "INFO, Username maksimal 100 karakter",
            }),
        email: z
            .string({
                message: "INFO, Email tidak boleh kosong",
            })
            .email({
                message: "INFO, Alamat email tidak sesuai",
            }),
        akses_id: z
            .number({
                message: "INFO, Akses tidak boleh kosong",
            })
            .positive({
                message: "INFO, Akses berisi angka positive",
            }),
        wig_id: z
            .number({
                message: "INFO, Wig tidak boleh kosong",
            })
            .positive({
                message: "INFO, Wig berisi angka positive",
            }),
    });

    static readonly SHOW: ZodType = z.object({
        id: z.number().positive(),
        token: z.string(),
        object: z.string().min(1).max(35),
    });

    static readonly FIND: ZodType = z.object({
        token: z.string(),
        object: z.string().min(1).max(35),
        offset: z.number().nonnegative(),
        limit: z.number().max(100).positive(),
        filter: z.string(),
        order: z.string(),
    });

    static readonly SOFT_DELETE: ZodType = z.object({
        object: z.string().min(1).max(35),
        id: z.number().positive(),
        isaktif: z.boolean(),
        updated_by: z.number().positive(),
    });

    static readonly PENGGUNA_GROUP_CREATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        token: z.string(),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deskripsi minimal 3 karakter",
            })
            .max(150, {
                message: "INFO, Deskripsi maksimal 150 karakter",
            }),
        created_by: z.number().positive(),
    });

    static readonly PENGGUNA_GROUP_UPDATE: ZodType = z.object({
        object: z.string().min(1).max(35),
        token: z.string(),
        id: z.number().positive(),
        deskripsi: z
            .string({ message: "INFO, Deskripsi tidak boleh kosong" })
            .min(3, {
                message: "INFO, Deskripsi minimal 3 karakter",
            })
            .max(150, {
                message: "INFO, Deskripsi maksimal 150 karakter",
            }),
        updated_by: z.number().positive(),
    });
}
