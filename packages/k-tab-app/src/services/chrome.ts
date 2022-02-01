/*
 * @Autor: hui.wang
 * @Date: 2022-02-01 19:37:38
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-01 21:45:23
 * @emial: hui.wang@bizfocus.cn
 */
import { AppStore } from 'stores'

export class ChromeService {
    constructor(private stores: AppStore) {}

    getBookmarks = async (): Promise<void> => {
        try {
            const subTree = await chrome.bookmarks.getSubTree('1')
            this.stores.chrome.setIsExtension(true)
            if (subTree.length) {
                this.stores.chrome.setBookmarks(subTree[0].children || [])
            }
        } catch (e) {
            console.error(e)
        }
    }
}
