/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 21:16:10
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-02 10:47:37
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import { initialize, serverPort } from './appconfig'
import {
    AuthController,
    ScriptController
} from './controllers'

const init = async (): Promise<void> => {
    // try {
    //     await initialize()
    // } catch(e) {
    //     console.error(e)
    // }

    const app = new Koa()
    const router = new Router()

    router.use(bodyParser({
        multipart: true
    }))

    AuthController(router)
    ScriptController(router)

    app.use(router.routes())
    app.listen(serverPort, () => {
        console.info(`k-tab-server is run on port ${serverPort}`)
    })
}

init()
