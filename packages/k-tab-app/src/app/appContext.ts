/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 14:49:15
 * @emial: hui.wang@bizfocus.cn
 */
import { createContext } from 'react'
import { AppService } from 'services'

export interface IAppContext {
    services: AppService;
}

export const AppContext = createContext<IAppContext | null>(null)
