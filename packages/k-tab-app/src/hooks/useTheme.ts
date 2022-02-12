/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 16:38:36
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 16:38:36
 * @emial: hui.wang@bizfocus.cn
 */
import { useContext } from 'react'
import { IThemeContext, ThemeContext } from 'app'

export const useTheme = (): IThemeContext => {
    return useContext(ThemeContext) as IThemeContext
}
