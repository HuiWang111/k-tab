/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 11:10:26
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 21:39:56
 * @emial: hui.wang@bizfocus.cn
 */
import { AppStore } from 'stores'
import { AppApi } from 'apis'
import { SearchService } from './search'
import { AuthService } from './auth'

export class AppService {
    searchService: SearchService
    authService: AuthService

    constructor() {
        const stores = new AppStore()
        const apis = new AppApi()

        this.searchService = new SearchService(stores)
        this.authService = new AuthService(stores, apis)
    }
}
