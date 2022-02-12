/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 14:37:16
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 16:41:35
 * @emial: hui.wang@bizfocus.cn
 */
import { useContext } from 'react'
import { AppContext, IAppContext } from 'app'

export const useServices = (): IAppContext['services'] => {
    return (useContext(AppContext) as IAppContext).services
}
