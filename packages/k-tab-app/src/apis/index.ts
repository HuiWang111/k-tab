/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 21:37:31
 * @emial: hui.wang@bizfocus.cn
 */
import { AuthApi } from './auth'
import { Http } from 'utils'
import { AxiosInstance } from 'axios'

export class AppApi {
    auth: AuthApi

    constructor() {
        const httpClient: AxiosInstance = new Http().client

        this.auth = new AuthApi(httpClient)
    }
}