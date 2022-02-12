/*
 * @Autor: hui.wang
 * @Date: 2022-02-12 20:09:40
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 21:12:26
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { Collapse, Slider } from 'antd'

const { Panel } = Collapse

interface IProps {
    iconSize: number;
    onIconSizeChange: (value: number) => void;
}

export const SettingPanel: FC<IProps> = ({
    iconSize,
    onIconSizeChange
}: IProps) => {
    return (
        <Collapse
            accordion
            expandIconPosition='right'
        >
            <Panel
                header={(
                    <div className='k-tab-setting-drawer-collapse'>
                        <p className='setting-name'>图标</p>
                        <p className='setting-desc'>图标样式、图标间距、宽度</p>
                    </div>
                )}
                key="1"
            >
                <div className='setting-row'>
                    <div className='setting-name'>图标大小</div>
                    <div className='setting-content'>
                        <Slider value={iconSize} onChange={onIconSizeChange} />
                    </div>                    
                </div>
            </Panel>
        </Collapse>
    )
}
