/*
 * @Autor: hui.wang
 * @Date: 2022-02-04 20:37:30
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-04 20:48:00
 * @emial: hui.wang@bizfocus.cn
 */
import { AxiosInstance, AxiosResponse } from 'axios'
import { URLMergeQuery } from '../utils'

export class AuthService<HttpClient extends AxiosInstance> {
    constructor(private httpClient: HttpClient) {}

    getGithubToken = async (
        clientId: string,
        clientSecret: string,
        code: string
    ): Promise<AxiosResponse> => {
        return this.httpClient({
            method: 'POST',
            url: URLMergeQuery(
                'https://github.com/login/oauth/access_token',
                {
                    'client_id': clientId,
                    'client_secret': clientSecret,
                    'code': code
                }
            ),
            headers: {
                accept: 'application/json'
            }
        })
    }

    getGithubUser = async (token: string) => {
        return this.httpClient({
            method: 'get',
            url: `https://api.github.com/user`,
            headers: {
                accept: 'application/json',
                Authorization: `token ${token}`
            }
        })
    }
}
