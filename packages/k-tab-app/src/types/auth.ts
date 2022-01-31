/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:49
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 20:53:53
 * @emial: hui.wang@bizfocus.cn
 */
export interface IAuthError {
    message: string;
}

export interface ICurrentUser {
    id: number;
    name: string;
}

export interface IAuth {
    authed: boolean;
    loading: boolean;
    user?: ICurrentUser;
    error?: IAuthError;
}

export interface ILoginData {
    code: string;
}