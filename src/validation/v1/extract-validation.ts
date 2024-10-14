import { z, ZodType } from "zod";

export class ExtractValidation {
    static readonly TARGET: ZodType = z.object({
        object: z.string().min(1).max(35),
    });

    static readonly PENERIMAAN: ZodType = z.object({
        object: z.string().min(1).max(35),
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
}
