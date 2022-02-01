/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 11:10:26
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-01 21:43:18
 * @emial: hui.wang@bizfocus.cn
 */
import { AppStore } from 'stores'
import { AppApi } from 'apis'
import { SearchService } from './search'
import { AuthService } from './auth'
import { ChromeService } from './chrome'

export class AppService {
    searchService: SearchService
    authService: AuthService
    chromeService: ChromeService

    constructor() {
        const stores = new AppStore()
        const apis = new AppApi()

        this.searchService = new SearchService(stores)
        this.authService = new AuthService(stores, apis)
        this.chromeService = new ChromeService(stores)
    }
}
