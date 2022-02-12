/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 16:36:02
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 16:38:17
 * @emial: hui.wang@bizfocus.cn
 */
import { useContext } from 'react'
import { IConfigContext, ConfigContext } from 'app'

export const useConfig = (): IConfigContext => {
    return useContext(ConfigContext) as IConfigContext
}
