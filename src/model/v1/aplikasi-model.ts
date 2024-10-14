export type AplikasiResponse = {
    statcode?: number;
    rowcount?: number;
    message?: string;
    data?: string;
    pagination?: {};
};

export type SignUpRequest = {
    token?: string;
    object: string;
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    pegawai_id: number;
    wig_id: number;
};

export type SignInRequest = {
    object: string;
    username: string;
    password: string;
};

export type SignOutRequest = {
    token: string;
};

export type FindallRequest = {
    token: string;
    object: string;
    offset: number;
    limit: number;
    filter: string;
    order: string;
};

export type ShowRequest = {
    id: number;
    token: string;
    object: string;
};

export type SoftDeleteRequest = {
    object: string;
    token: string;
    id: number;
    isaktif: boolean;
    updated_by?: number;
};

export type ForgotRequest = {
    id: number;
    token: string;
    object: string;
    username: string;
    newPassword: string;
    confirmPassword: string;
};

export type UpdateStatusRequest = {
    id: number;
    token: string;
    object: string;
    status: boolean;
};

export type UpdatePenggunaRequest = {
    id: number;
    token: string;
    username: string;
    email: string;
    pegawai_id: number;
    akses_id: number;
    wig_id: number;
};

export type PenggunaGroupRequest = {
    id?: number;
    token: string;
    object: string;
    deskripsi: string;
    created_by?: number;
    updated_by?: number;
};
