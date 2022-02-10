/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 20:54:42
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-10 16:23:08
 * @emial: hui.wang@bizfocus.cn
 */
import { AppStore } from 'stores'
import { AppApi } from 'apis'
import { ILoginData } from 'types'

export class AuthService {
    constructor(private stores: AppStore, private apis: AppApi) {}
    
    fetchGithubUser = async (data: ILoginData): Promise<void> => {
        try {
            const res = await this.apis.auth.fetchGithubUser(data)
            // console.log(res)
        } catch (e) {
            console.error(e)
        }
    }
}