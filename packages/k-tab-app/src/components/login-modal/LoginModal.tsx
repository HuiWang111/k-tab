/*
 * @Autor: hui.wang
 * @Date: 2022-01-31 15:58:31
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 17:23:00
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { Modal, ModalProps } from 'antd'
import { IconFont } from '../icon/Icon'
import './styles.less'

interface ILoginMode {
    icon: string;
    url: string;
}

type ILoginModalProps = ModalProps & {
    description: string,
    loginModes: ILoginMode[],
}

export const LoginModal: FC<ILoginModalProps> = ({
    title,
    description,
    loginModes,
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
                {
                    loginModes.map(({ icon, url }) => {
                        return (
                            <a key={icon} href={url}>
                                <IconFont type={icon} className='login-icon' />
                            </a>
                        )
                    })
                }
            </main>
        </Modal>
    )
}
