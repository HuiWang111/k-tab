/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 15:52:25
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 15:52:26
 * @emial: hui.wang@bizfocus.cn
 */
import { useState } from 'react'

export const useVisible = (
    defaultVisible = false,
    onVisibleChange?: (visible: boolean) => void
): [boolean, () => void, () => void] => {
    const [visible, setVisible] = useState(defaultVisible)

    return [
        visible,
        () => {
            setVisible(true)
            onVisibleChange?.(true)
        },
        () => {
            setVisible(false)
            onVisibleChange?.(false)
        }
    ]
}
