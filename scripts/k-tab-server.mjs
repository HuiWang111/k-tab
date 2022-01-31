/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 20:32:34
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 20:32:34
 * @emial: hui.wang@bizfocus.cn
 */
import { exec } from './utils.mjs'
import { join } from 'path'

(async function() {
    await exec('ts-node src/app.ts', {
        cwd: join(process.cwd(), 'packages/k-tab-server')
    })
}())
