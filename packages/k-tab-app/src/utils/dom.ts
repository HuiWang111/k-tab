/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 16:51:55
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 17:00:01
 * @emial: hui.wang@bizfocus.cn
 */
function createSetElementCssVariablesMethod(element: HTMLElement): (name: string, value: string) => void {
    return function (name: string, value: string) {
        element.style.setProperty(name, value)
    }
}

export const setRootCssVariables = createSetElementCssVariablesMethod(document.documentElement)
