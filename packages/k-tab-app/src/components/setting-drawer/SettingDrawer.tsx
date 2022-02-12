/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 19:41:17
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 20:46:19
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, useState, useEffect } from 'react'
import { Drawer, DrawerProps, Tabs } from 'antd'
import { PlusOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { SettingPanel } from './SettingPanel'
import './styles.less'

const { TabPane } = Tabs

interface IProps extends DrawerProps {
    iconSize: number;
    activeKey?: string;
    onPlus?: () => void;
    onIconSizeChange: (value: number) => void;
}

export const SettingDrawer: FC<IProps> = ({
    iconSize,
    activeKey: propsActiveKey,
    onPlus,
    onIconSizeChange,
    ...restProps
}: IProps) => {
    const [activeKey, setActiveKey] = useState('mime')

    useEffect(() => {
        if (propsActiveKey) {
            setActiveKey(propsActiveKey)
        }
    }, [propsActiveKey])
    
    const handleTabChange = (key: string) => {
        if (key !== 'plus') {
            setActiveKey(key)
        } else {
            onPlus?.()
        }
    }

    return (
        <Drawer
            {...restProps}
            className='k-tab-setting-drawer'
        >
            <Tabs
                activeKey={activeKey}
                onChange={handleTabChange}
                centered
            >
                <TabPane
                    tab={(
                        <div className='k-tab-setting-drawer-tab-item'>
                            <PlusOutlined />
                            <span className='tab-item-text'>添加</span>
                        </div>
                    )}
                    key='plus'
                ></TabPane>
                <TabPane
                    tab={(
                        <div className='k-tab-setting-drawer-tab-item'>
                            <UserOutlined />
                            <span className='tab-item-text'>我的</span>
                        </div>
                    )}
                    key='mime'
                >
                    <SettingPanel
                        iconSize={iconSize}
                        onIconSizeChange={onIconSizeChange}
                    />
                </TabPane>
                <TabPane
                    tab={(
                        <div className='k-tab-setting-drawer-tab-item'>
                            <SettingOutlined />
                            <span className='tab-item-text'>设置</span>
                        </div>
                    )}
                    key='setting'
                >

                </TabPane>
            </Tabs>
        </Drawer>
    )
}
