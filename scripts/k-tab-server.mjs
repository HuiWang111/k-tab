/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 20:32:34
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-01 15:49:07
 * @emial: hui.wang@bizfocus.cn
 */
import { exec } from './utils.mjs'
import { join } from 'path'

(async function() {
    await exec('npm start', {
        cwd: join(process.cwd(), 'packages/k-tab-server')
    })
}())
