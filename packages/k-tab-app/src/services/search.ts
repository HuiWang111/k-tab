/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 11:08:53
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 15:11:13
 * @emial: hui.wang@bizfocus.cn
 */
import { AppStore } from 'stores'
import { IEngine } from 'types'

export class SearchService {
    constructor(private stores: AppStore) {}
    
    fetchEngines = (): void => {
        this.stores.search.setEngines([
            { name: 'baidu', title: '百度搜索', href: 'http://www.baidu.com/s?wd=' },
            { name: 'google', title: 'google搜索', href: 'https://www.google.com/search?q=' },
            { name: 'Bing', title: '必应搜索', href: 'https://cn.bing.com/search?q=' },
            { name: 'GitHub', title: 'github搜索', href: 'https://github.com/search?q=' }
        ])
    }

    getEngines = (): IEngine[] => {
        return this.stores.search.engines.slice()
    }
}