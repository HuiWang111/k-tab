/*
 * @Autor: hui.wang
 * @Date: 2022-02-04 21:08:11
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-04 21:16:15
 * @emial: hui.wang@bizfocus.cn
 */
import { AxiosInstance } from 'axios'
import { JSDOM } from 'jsdom'

export class GithubService<HttpClient extends AxiosInstance> {
    constructor(private httpClient: HttpClient) {}

    gitRepositoriesByUserName = async (username: string) => {
        const res = await this.httpClient.get(`https://github.com/${username}?tab=repositories`)
    }
}
