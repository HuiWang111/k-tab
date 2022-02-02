/*
 * @Autor: hui.wang
 * @Date: 2022-02-02 10:44:47
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-02 13:28:33
 * @emial: hui.wang@bizfocus.cn
 */
import * as Router from 'koa-router'
import axios from 'axios'

export const ScriptController = (router: Router) => {
    // TODO: chrome extension cannot load remote script 
    // lcoalhost cannot load also
    router.get('/iconfont', async (ctx) => {
        const res = await axios.get('http://at.alicdn.com/t/font_3166782_r3day2jg6sq.js')
        ctx.status = 200
        ctx.body = res.data
    })
}
