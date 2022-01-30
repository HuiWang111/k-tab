/*
 * @Autor: hui.wang
 * @Date: 2022-01-29 21:52:17
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 19:09:02
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { SearchBox, DateTime } from 'components'
import { observer } from 'mobx-react-lite'
import { useServices, useMount } from 'hooks'
import './styles.less'

export const Home: FC = observer(() => {
    const { searchService } = useServices()

    useMount(() => {
        searchService.fetchEngines()
    })

    return (
        <div className='k-tab-root'>
            <div className='k-tab-bg'></div>
            <DateTime />
            <SearchBox engines={searchService.getEngines()} />
        </div>
    )
})