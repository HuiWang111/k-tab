/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 19:47:02
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 19:54:39
 * @emial: hui.wang@bizfocus.cn
 */
import { exec } from './utils.mjs'
import { join } from 'path'

(async function() {
    await exec('npm start', {
        cwd: join(process.cwd(), 'packages/k-tab-app')
    })
}())
