export type PenerimaanResponse = {
    statcode?: number;
    rowcount?: number;
    message?: string;
    data?: string;
    pagination?: {};
};

export type BarangRequest = {
    object: string;
    token: string;
    donatur_id: number;
    akad_id: string;
    program_id?: string;
    kategori: number;
    kategori_desc?: string;
    barang_id: number;
    ref_satuan: number;
    ref_jenis: number;
    tanggal_expired: string;
    jumlah: number;
    created_by: number;
};

export type TransferTunaiRequest = {
    object: string;
    token: string;
    donatur_id: number;
    akad_id: string;
    program_id?: string;
    kategori: number;
    kategori_desc?: string;
    referensi_kode?: string;
    walet_no?: string;
    nama?: string;
    ref_bank?: number;
    cvc_number?: string;
    cvc_expired?: string;
    qris_kode?: string;
    nilai: number;
    lag_id?: number;
    desc_lag?: string;
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

export type SoftDeleteRequest = {
    object: string;
    token: string;
    id: number | string;
    isaktif: boolean;
    updated_by?: number;
};
