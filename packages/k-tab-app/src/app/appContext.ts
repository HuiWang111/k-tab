/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 16:35:07
 * @emial: hui.wang@bizfocus.cn
 */
import { createContext } from 'react'
import { AppService } from 'services'

export interface IAppContext {
    services: AppService;
}

export const AppContext = createContext<IAppContext | null>(null)

export interface IThemeContext {
    dark: boolean;
    color: string;
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export interface IConfigContext {
    icon: {
        size: number,
        fontSize: number,
        fontColor: string,
        borderRaduis: number,
        rowGap: number,
        columnGap: number,
        opacity: number,
    };
}

export const ConfigContext = createContext<IConfigContext | null>(null)
