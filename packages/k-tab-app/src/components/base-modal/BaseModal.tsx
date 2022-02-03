/*
 * @Autor: hui.wang
 * @Date: 2022-02-02 13:46:43
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-03 21:21:09
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, PropsWithChildren, useState } from 'react'
import { Modal, ModalProps } from 'antd'
import classnames from 'classnames'
import { FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons'
import './styles.less'

interface IBaseModalProps extends Omit<ModalProps, 'width'> {
    draggable?: boolean;
    beforeMaximize?: () => void;
    beforeUnmaximize?: () => void;
} 

export const BaseModal: FC<PropsWithChildren<IBaseModalProps>> = ({
    children,
    className,
    beforeMaximize,
    beforeUnmaximize,
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
            wrapClassName='k-tab-base-modal-wrap'
        >
            <div className='k-tab-base-modal-operation'>
                <span
                    className='icon-wrapper' title='放大/缩小'
                    onClick={async () => {
                        if (maximized) {
                            beforeUnmaximize?.()
                            setMaximized(false)
                        } else {
                            beforeMaximize?.()
                            setMaximized(true)
                        }
                    }}
                >
                    {
                        maximized
                            ? <FullscreenExitOutlined />
                            : <FullscreenOutlined />
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
            <div className='left-resize col-resize'></div>
            <div className='right-resize col-resize'></div>
            <div className='top-resize row-resize'></div>
            <div className='bottom-resize row-resize'></div>
        </Modal>
    )
}
