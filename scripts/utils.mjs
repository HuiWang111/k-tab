/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 19:37:05
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 20:32:41
 * @emial: hui.wang@bizfocus.cn
 */
import { exec as execute } from 'child_process'

export function exec(command, options) {
    return new Promise((resolve, reject) => {
        const proc = execute(command, options)

        proc.stdout?.pipe(process.stdout)

        proc.stderr?.on('data', chunk => {
            reject(chunk)
        })

        proc.stdout?.on('close', () => {
            resolve()
        })
    })
}
