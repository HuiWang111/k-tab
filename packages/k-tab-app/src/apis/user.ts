/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 11:05:17
 * @emial: hui.wang@bizfocus.cn
 */
import { AxiosInstance } from 'axios'
import { AppStore } from 'stores'

export class UserApi {
    constructor(
        private httpClient: AxiosInstance,
        private store: AppStore
    ) {}
}