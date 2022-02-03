/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-03 20:40:28
 * @emial: hui.wang@bizfocus.cn
 */
export function URLMergeQuery(url: string, data: Record<string, any>): string {
    let qs = ''
    for (const key in data) {
        const value = data[key]
        if (!value || !key) {
            continue
        }

        qs += qs
            ? `&${key}=${value}`
            : `${key}=${value}`
    }

    return qs
        ? url + '?' + qs
        : url
}

export function parseCurrentQuery(): Record<string, string> {
    const search = window.location.search.slice(1)

    const reg = /([^&=]+)(=([^&=]*))?/g
    let p: RegExpExecArray | null
    const object: Record<string, string> = {}

    while ((p = reg.exec(search))) {
        const [, key, , value] = p
        object[key] = value
    }
    
    return object
}

export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
