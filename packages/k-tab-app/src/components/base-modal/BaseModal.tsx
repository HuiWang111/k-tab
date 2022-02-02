/*
 * @Autor: hui.wang
 * @Date: 2022-02-02 13:46:43
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-02 19:33:42
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, PropsWithChildren, useState } from 'react'
import { Modal, ModalProps } from 'antd'
import classnames from 'classnames'
import { FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons'
import { IconFont } from '../iconfont/IconFont'
import './styles.less'

type IBaseModalProps = Omit<ModalProps, 'width'>

export const BaseModal: FC<PropsWithChildren<IBaseModalProps>> = ({
    children,
    className,
    ...restProps
}: PropsWithChildren<IBaseModalProps>) => {
    const [maximized, setMaximized] = useState(false)
    
    return (
        <Modal
            {...restProps}
            title={null}
            footer={null}
            closable={false}
            className={classnames({
                'k-tab-base-modal': true,
                'k-tab-base-modal-fullpage': maximized,
                [className as string]: Boolean(className)
            })}
            width={900}
        >
            <div className='k-tab-base-modal-operation'>
                <span className='icon-wrapper' title='放大/缩小'>
                    {
                        maximized
                            ? (
                                <FullscreenExitOutlined
                                    onClick={() => setMaximized(false)}
                                />
                            )
                            : (
                                <FullscreenOutlined
                                    onClick={() => setMaximized(true)}
                                />
                            )
                    }
                </span>
                <span className='icon-wrapper close-icon-wrapper' title='关闭'>
                    <CloseOutlined
                        onClick={restProps.onCancel}
                        className='close-icon'
                    />
                </span>
            </div>
            { children }
        </Modal>
    )
}
