export interface Usuario {
    uid  :  string;
    name :  string;
    email:  string;
    role :  string;
}

export interface LoginResponse {
    ok    : boolean;
    msg?  : string;
    data? : Data;
    token?: string;
}

export interface Data {
    role:     string;
    google:   boolean;
    name:     string;
    email:    string;
    password: string;
    uid:      string;
}

