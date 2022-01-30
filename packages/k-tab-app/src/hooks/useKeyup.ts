/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 12:08:36
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 14:26:37
 * @emial: hui.wang@bizfocus.cn
 */
import { useEffect } from 'react'

export const useKeyup = (
    effect: (key: string) => void,
    deps?: readonly any[],
    keys?: string[]
): void => {
    useEffect(() => {
        const listener: (this: Window, ev: WindowEventMap['keyup']) => any = (e) => {
            if (!keys) {
                effect(e.key)
            } else if (keys.includes(e.key)) {
                effect(e.key)
            }
        }

        window.addEventListener('keyup', listener)

        return () => {
            window.removeEventListener('keyup', listener)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}

export const useEnter = (
    effect: (key: string) => void,
    deps?: readonly any[]
): void => {
    useKeyup(effect, deps, ['Enter'])
}
