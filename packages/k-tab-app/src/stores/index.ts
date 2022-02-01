/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-01 19:47:45
 * @emial: hui.wang@bizfocus.cn
 */
import { SearchStore } from './search'
import { ChromeStroe } from './chrome'

export class AppStore {
    search = new SearchStore()

    chrome = new ChromeStroe()
}