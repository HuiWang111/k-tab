/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 11:27:01
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 15:51:33
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { IconFont } from '../icon/Icon'
import './styles.less'

interface ISidebarProps {
    onLogin: () => void;
    onSetting: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({
    onLogin,
    onSetting
}: ISidebarProps) => {
    return (
        <nav className='k-tab-sidebar'>
            <header className='k-tab-sidebar-header' onClick={onLogin}>
                <IconFont type='icon-morentouxiang' />
                <span>登录</span>
            </header>
            <main className='k-tab-sidebar-content'>
                
            </main>
            <footer className='k-tab-sidebar-footer'>
                <IconFont
                    type='icon-shezhi'
                    className='rotate'
                    onClick={onSetting}
                />
            </footer>
        </nav>
    )
}
