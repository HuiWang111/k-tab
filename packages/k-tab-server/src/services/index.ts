/*
 * @Autor: hui.wang
 * @Date: 2022-02-04 20:48:27
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-04 21:16:12
 * @emial: hui.wang@bizfocus.cn
 */
import axios, { AxiosInstance } from 'axios'
import { AuthService } from './AuthService'
import { GithubService } from './GithubService'

export class Services<HttpClient extends AxiosInstance> {
    public readonly authService: AuthService<HttpClient>
    public readonly githubService: GithubService<HttpClient>

    constructor() {
        const httpClient = axios.create() as HttpClient

        this.authService = new AuthService<HttpClient>(httpClient)
        this.githubService = new GithubService<HttpClient>(httpClient)
    }
}