/*
 * @Autor: hui.wang
 * @Date: 2022-02-04 21:16:28
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-04 21:22:11
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import { AxiosInstance } from 'axios'
import { GithubService } from '../services/GithubService'

export const GithubController = (githubService: GithubService<AxiosInstance>, router: Router) => {
    router.get('/github/repositories/:username', async (ctx) => {
        const { username } = ctx.params

        if (!username) {
            return
        }

        try {
            const repositories = await githubService.gitRepositoriesByUserName(username)
            ctx.status = 200
            ctx.body = repositories
        } catch(e) {
            console.error(e)
        }
    })
}
