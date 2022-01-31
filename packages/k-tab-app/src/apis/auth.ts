/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:49
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 21:29:01
 * @emial: hui.wang@bizfocus.cn
 */
import { AxiosInstance, AxiosResponse } from 'axios'
import { ILoginData } from 'types'
import { GITHUB_LOGIN_PATH, LOGOUT_PATH } from './resourses'

export class AuthApi {
    constructor(
        private httpClient: AxiosInstance
    ) {}

    fetchGithubUser = async (data: ILoginData): Promise<AxiosResponse> => {
        return this.httpClient.post(GITHUB_LOGIN_PATH, data)
    }
}