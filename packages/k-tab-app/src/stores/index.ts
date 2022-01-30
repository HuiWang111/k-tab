/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 11:10:11
 * @emial: hui.wang@bizfocus.cn
 */
import { AuthStore } from './auth'
import { SearchStore } from './search'

const token = AuthStore.getToken()

export class AppStore {
    auth = new AuthStore({
        authed: !!token,
        loading: false
    })

    search = new SearchStore()
}

export { AuthStore, TOKEN_KEY } from './auth'