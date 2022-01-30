/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 11:10:26
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 11:13:30
 * @emial: hui.wang@bizfocus.cn
 */
import { AppStore } from 'stores'
import { SearchService } from './search'

export class AppService {
    searchService: SearchService

    constructor() {
        const stores = new AppStore()

        this.searchService = new SearchService(stores)
    }
}
