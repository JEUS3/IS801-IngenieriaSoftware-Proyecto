export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    role?: string;
    token?: string;
    msg?: string;
}

// interface de solicitud a reset-password
export interface ResetPasswordRequest {
    newPassword: string;
    token: string;
}
// interface de la respuesta de reset-password
export interface ResetPasswordResponse {
    ok: boolean;
    msg: string;
}