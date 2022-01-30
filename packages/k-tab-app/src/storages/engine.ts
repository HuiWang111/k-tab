/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 19:17:21
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 19:22:02
 * @emial: hui.wang@bizfocus.cn
 */
const ENGINE_KEY = 'k-tab-engine'

export class EngineStorage {
    static save(engine: { name: string, href: string, }): void {
        try {
            localStorage.setItem(ENGINE_KEY, JSON.stringify(engine))
        } catch (e) {
            console.error(`save engine Error: ${e}`)
        }
    }

    static get(): { name: string, href: string, } | null {
        try {
            const json = localStorage.getItem(ENGINE_KEY)
            if (json) {
                return JSON.parse(json)
            }
            return null
        } catch (e) {
            console.error(`get engine Error: ${e}`)
            return null
        }
    }
}