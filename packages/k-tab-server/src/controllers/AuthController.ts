/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 21:22:16
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 21:43:41
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import axios from 'axios'
import { URLMergeQuery } from '../utils'

export const AuthController = (router: Router): void => {
    router.get('/oauth/redirect', async (ctx) => {
        const code = ctx.request.query.code
        const clientId = 0
        const clientSecret = ''

        try {
            const tokenResponse = await axios({
                method: 'POST',
                url: URLMergeQuery(
                    'https://github.com/login/oauth/access_token',
                    {
                        'client_id': clientId,
                        'client_secret': clientSecret,
                        'code': code
                    }
                ),
                headers: {
                    accept: 'application/json'
                }
            })
            const accessToken = tokenResponse.data.access_token

            const res = await axios({
                method: 'get',
                url: `https://api.github.com/user`,
                headers: {
                  accept: 'application/json',
                  Authorization: `token ${accessToken}`
                }
            })
            
            ctx.status = 200
            ctx.body = res.data
        } catch(e) {
            console.error(e)
            ctx.status = 201
            ctx.body = {
                message: e.message
            }
        }
    })
}