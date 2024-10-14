export type MasterResponse = {
    statcode?: number;
    rowcount?: number;
    message?: string;
    data?: string;
    pagination?: {};
};

export type BarangRequest = {
    object: string;
    id?: number;
    token: string;
    kode: string;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type SumberPenerimaanRequest = {
    object: string;
    id?: number;
    token: string;
    wig_id: number;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type ProgramRequest = {
    object: string;
    id: string;
    token: string;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type WigRequest = {
    object: string;
    token: string;
    id: number;
    kode: string;
    departemen_id: number;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type OrganisasiRequest = {
    object: string;
    id?: string;
    token: string;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type LokasiRequest = {
    object: string;
    token: string;
    id?: number;
    ref_jenis_lokasi: number;
    kode: string;
    deskripsi: string;
    alias: string;
    isaktif?: boolean;
    alamat: string;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type LagRequest = {
    object: string;
    token: string;
    id?: number;
    kode: string;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type DonaturRequest = {
    object: string;
    token: string;
    id?: number;
    kode?: string;
    deskripsi: string;
    nama: string;
    jenis_kelamin: number;
    panggilan: string;
    gelar_depan: string;
    gelar_belakang: string;
    alamat: string;
    agama: number;
    nik: number;
    wilayah: number;
    tempat_lahir: number;
    tanggal_lahir: string;
    kontak: string;
    email: string;
    hobi: number;
    pekerjaan: number;
    perkawinan: number;
    asrama_id: number;
    kodepos: number;
    rt: string;
    rw: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type AsramaRequest = {
    object: string;
    token: string;
    id?: number;
    kode: string;
    deskripsi: string;
    alias: string;
    isaktif?: boolean;
    alamat: string;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type DepartemenRequest = {
    object: string;
    token: string;
    id?: number;
    kode: string;
    deskripsi: string;
    isaktif?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type JenisReferensiRequest = {
    object: string;
    token: string;
    id?: number;
    deskripsi: string;
    status: boolean;
};

export type ReferensiRequest = {
    object: string;
    token: string;
    id?: number;
    jenis?: number;
    jenis_referensi?: number;
    deskripsi: string;
    status: boolean;
};

export type PegawaiRequest = {
    object: string;
    token: string;
    id?: number;
    nip: string;
    nik: string;
    ihs_number?: string;
    nama: string;
    panggilan: string;
    gelar_depan: string;
    gelar_belakang: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    agama: number;
    jenis_kelamin: number;
    alamat: string;
    rt: string;
    rw: string;
    kodepos: number;
    status?: boolean;
    tanggal_status?: string;
    jabatan: string;
    wilayah: string;
    kontak: number;
    lokasi_id: number;
    departemen_id: number;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type AkadRequest = {
    object: string;
    id: string;
    token: string;
    deskripsi: string;
    isaktif?: boolean;
    isdonatur?: boolean;
    created_by: number;
    created_at?: string;
    updated_by?: number;
    updated_at?: string;
};

export type SelectRequest = {
    object: string;
    token: string;
    filter: string;
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
    status: boolean;
    isaktif?: boolean;
    isdonatur?: boolean;
    updated_by?: number;
};
