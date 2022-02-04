/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 21:16:10
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-04 21:22:54
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import * as Koa from 'koa'
import * as bodyParser from 'koa-body'
import { serverPort, services } from './appconfig'
import {
    AuthController,
    GithubController
} from './controllers'

const init = async (): Promise<void> => {
    const app = new Koa()
    const router = new Router()

    router.use(bodyParser({
        multipart: true
    }))

    AuthController(services.authService, router)
    GithubController(services.githubService, router)

    app.use(router.routes())
    app.listen(serverPort, () => {
        console.info(`k-tab-server is run on port ${serverPort}`)
    })
}

init()
