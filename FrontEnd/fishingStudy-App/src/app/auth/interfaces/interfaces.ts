export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    role?: string;
    token?: string;
    msg?: string;
}
