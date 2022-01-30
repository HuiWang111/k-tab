/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 11:05:33
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 11:07:52
 * @emial: hui.wang@bizfocus.cn
 */
import { action, observable, makeObservable, IObservableArray } from 'mobx'
import type { IEngine } from 'types'

export class SearchStore {
    engines: IObservableArray<IEngine> = observable.array([])

    constructor() {
        makeObservable(this)
    }

    @action
    setEngines = (engines: IEngine[]): void => {
        this.engines.replace(engines)
    }
}
