/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:49
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 11:04:51
 * @emial: hui.wang@bizfocus.cn
 */
import { HttpError } from 'utils'
import { AxiosInstance } from 'axios'
import { ILoginData } from 'types'
import { AppStore, AuthStore } from 'stores'
import { LOGIN_PATH, LOGOUT_PATH } from './resourses'
import { message } from 'antd'

export class AuthApi {
    constructor(
        private httpClient: AxiosInstance,
        private store: AppStore
    ) {}
}