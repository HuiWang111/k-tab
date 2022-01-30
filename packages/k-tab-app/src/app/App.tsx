/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:51
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 14:52:30
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { Home } from '../views/home/Home'
import { AppContext } from './appContext'
import { appService } from './services'

const App: FC = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <AppContext.Provider value={{ services: appService }}>
                <Home />
            </AppContext.Provider>
        </ConfigProvider>
    )
}

export default App
