export type ExtractResponse = {
    statcode?: number;
    rowcount?: number;
    message?: string;
    data?: string;
    pagination?: {};
};

export type PenerimaanRequest = {
    object: string;
    token: string;
    file: string;
    id_bank: number;
    nama_bank: string;
    id_jenis: string;
    desc_jenis: string;
    deskripsi: string;
    nilai: number;
    created_by: number;
};

export type TargetRequest = {
    object: string;
    token: string;
    tanggal: string;
    file: string;
    wig: string;
    lag: string;
    nilai: number;
    created_by: number;
};

export type FindallRequest = {
    object: string;
    token: string;
    offset: number;
    limit: number;
    filter: string;
    order: string;
};

export type ShowRequest = {
    object: string;
    token: string;
    id: any;
};
