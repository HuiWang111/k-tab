/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 15:58:31
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 16:12:46
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { Modal, ModalProps } from 'antd'
import './styles.less'

type ILoginModalProps = ModalProps & {
    description: string,
}

export const LoginModal: FC<ILoginModalProps> = ({
    title,
    description,
    ...restProps
}: ILoginModalProps) => {
    return (
        <Modal
            {...restProps}
            title={null}
            footer={null}
            className='k-tab-login-modal'
        >
            <header className='k-tab-login-modal-header'>
                <span className='title'>{title}</span>
                <span className='description'>{description}</span>
            </header>
            <main className='k-tab-login-modal-content'>
                
            </main>
        </Modal>
    )
}
