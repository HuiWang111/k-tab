/*
 * @Autor: hui.wang
 * @Date: 2022-02-01 19:50:14
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-01 21:31:31
 * @emial: hui.wang@bizfocus.cn
 */
import { exec } from './utils.mjs'
import { join } from 'path'
import { copyFile } from 'fs/promises'
import chalk from 'chalk'

(async function() {
    const cwd = join(process.cwd(), 'packages/k-tab-app')
    
    try {
        await exec('rm -rf dist', {
            cwd
        })

        await exec('npm run build', {
            cwd
        })
    } catch(e) {
        console.error(
            chalk.red(e.message || e)
        )
    }

    await copyFile(
        join(cwd, './manifest.json'),
        join(cwd, 'dist/manifest.json')
    )
})()
