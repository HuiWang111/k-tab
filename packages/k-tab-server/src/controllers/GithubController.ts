/*
 * @Autor: hui.wang
 * @Date: 2022-02-04 21:16:28
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-05 21:09:35
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import { AxiosInstance } from 'axios'
import { GithubService } from '../services/GithubService'
import {
    GET_USER_REPOSITORIES_PATH,
    GET_USER_STARS_PATH
} from '../ResourcePaths'

export const GithubController = (githubService: GithubService<AxiosInstance>, router: Router) => {
    router.get(GET_USER_REPOSITORIES_PATH, async (ctx) => {
        const { username } = ctx.params

        if (!username) {
            return
        }

        try {
            const repositories = await githubService.getRepositoriesByUserName(username)
            ctx.status = 200
            ctx.body = repositories
        } catch(e) {
            console.error(e.message)
            ctx.status = 201
            ctx.body = {
                message: e.message
            }
        }
    })

    router.get(GET_USER_STARS_PATH, async (ctx) => {
        const { username } = ctx.params

        if (!username) {
            return
        }

        try {
            const stars = await githubService.getStarsByUserName(username)
            ctx.status = 200
            ctx.body = stars
        } catch(e) {
            console.error(e.message)
            ctx.status = 201
            ctx.body = {
                message: e.message
            }
        }
    })
}
