/*
 * @Autor: hui.wang
 * @Date: 2022-02-01 19:40:16
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-01 21:43:56
 * @emial: hui.wang@bizfocus.cn
 */
import { action, observable, makeObservable, IObservableArray } from 'mobx'

export class ChromeStroe {
    @observable
    bookmarks: IObservableArray<chrome.bookmarks.BookmarkTreeNode> = observable.array([])

    @observable
    isExtension = false

    constructor() {
        makeObservable(this)
    }

    @action
    setBookmarks = (bookmarks: chrome.bookmarks.BookmarkTreeNode[]): void => {
        this.bookmarks.replace(bookmarks)
    }

    @action
    setIsExtension = (isExtension: boolean): void => {
        this.isExtension = isExtension
    }
}