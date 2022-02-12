/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 17:02:18
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 19:45:42
 * @emial: hui.wang@bizfocus.cn
 */
import { useState, useEffect } from 'react'
import { setRootCssVariables } from 'utils'

interface IMethods {
    iconSize: number;
    setIconSize: (size: number) => void;
}

export const useCssVariables = (): IMethods => {
    const [iconSize, setIconSize] = useState(54)

    useEffect(() => {
        setRootCssVariables('--icon-size', iconSize + 'px')
    }, [iconSize])

    return {
        iconSize,
        setIconSize
    }
}