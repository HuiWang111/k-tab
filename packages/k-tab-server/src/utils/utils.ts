/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 21:33:50
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 21:33:50
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
