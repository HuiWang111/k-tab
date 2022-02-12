/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 16:19:50
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 16:40:51
 * @emial: hui.wang@bizfocus.cn
 */
import { createContext, useContext } from 'react'
import { AppStore } from 'stores'
import { AppApi } from 'apis'

export interface IAppContext {
    api: AppApi;
    store: AppStore;
}

export const AppContext = createContext<IAppContext | null>(null)

export const useAppContext = (): IAppContext => {
    return useContext(AppContext) as IAppContext
}
