/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 21:22:16
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-10 16:26:27
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import { AxiosInstance } from 'axios'
import { githubConfig } from '../appconfig'
import { AuthService } from '../services/AuthService'
import {
    GITHUB_LOGIN_PATH
} from '../ResourcePaths'
 
export const AuthController = (authService: AuthService<AxiosInstance>, router: Router): void => {
    router.post(GITHUB_LOGIN_PATH, async (ctx) => {
        const { code } = ctx.request.body
        
        // TODO: 总是提示 read ECONNRESET
        try {
            const tokenResponse = await authService.getGithubToken(
                githubConfig.clientId,
                githubConfig.clientSecret,
                code
            )
            const accessToken = tokenResponse.data.access_token
            
            const res = await authService.getGithubUser(accessToken)
            
            ctx.status = 200
            ctx.body = res.data
        } catch(e) {
            console.error(e.message)
            ctx.status = 201
            ctx.body = {
                message: e.message
            }
        }
    })
}