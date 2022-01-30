/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-29 21:58:07
 * @emial: hui.wang@bizfocus.cn
 */
import { ComponentType } from 'react'

interface IRouteConfig {
    path: string;
    component: ComponentType;
}

export const publicRouteConfig: IRouteConfig[] = []

export const privateRouteConfig: IRouteConfig[] = []
