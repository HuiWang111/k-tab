/*
 * @Autor: hui.wang
 * @Date: 2022-02-02 16:21:21
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-05 21:18:43
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, useState } from 'react'
import { Input, ModalProps, Button, Popconfirm } from 'antd'
import classNames from 'classnames'
import { PlusOutlined, EditOutlined, DeleteOutlined, CheckOutlined, QuestionCircleFilled } from '@ant-design/icons'
import { BaseModal } from '../base-modal/BaseModal'
import { useDraggableModalRender } from 'hooks'
import './styles.less'

interface IBookmarkModalProps extends Omit<ModalProps, 'title'> {
    bookmarks: Omit<chrome.bookmarks.BookmarkTreeNode, 'children'>[];
    folders: { title: string, id: number, }[];
    isExtension: boolean;
    onFolderChange: (folderId: number) => void;
    onSubmit?: () => void;
    onDelete?: (bookmarkId: number) => void;
}

export const BookmarkModal: FC<IBookmarkModalProps> = ({
    bookmarks,
    folders,
    isExtension,
    onFolderChange,
    onSubmit,
    onDelete,
    ...restProps
}: IBookmarkModalProps) => {
    const [activeFolderId, setActiveFolderId] = useState<number>(folders.length ? folders[0].id : 0)
    const [isEdit, setIsEdit] = useState(false)
    
    const [modalRender, draggableElement, resetBounds] = useDraggableModalRender(
        <div className='k-tab-bookmark-modal-title'>
            书签管理
        </div>
    )

    return (
        <BaseModal
            className='k-tab-bookmark-modal'
            {...restProps}
            {...modalRender}
            beforeMaximize={() => {
                resetBounds()
            }}
        >
            <header className='k-tab-bookmark-modal-header'>
                { draggableElement }
                <Input placeholder='搜索' />
            </header>
            <main className='k-tab-bookmark-modal-body'>
                <ul className='k-tab-bookmark-modal-folders'>
                    {
                        folders.map(({ title, id }) => {
                            return (
                                <li
                                    key={id}
                                    className={classNames({
                                        'k-tab-bookmark-modal-folder': true,
                                        'active': activeFolderId === id
                                    })}
                                    onClick={() => {
                                        setActiveFolderId(id)
                                        onFolderChange(id)
                                    }}
                                >
                                    {title}
                                </li>
                            )
                        })
                    }                    
                </ul>
                {
                    isExtension ? (
                        <ul className='k-tab-bookmark-modal-bookmarks'>
                            <li className='k-tab-bookmark-modal-bookmark'>
                                <div className='bookmark-info'>
                                    <span className='bookmark-icon'></span>
                                    <div className='bookmark-title'>
                                        {
                                            isEdit
                                                ? <Input />
                                                : <span>华东理工继续教育学院</span>
                                        }
                                    </div>
                                    {
                                        isEdit && (
                                            <div className='bookmark-address'>
                                                <Input />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='bookmark-operation'>
                                    <Button
                                        icon={<PlusOutlined />}
                                        type='primary'
                                        className='plus-button'
                                    />
                                    <Button
                                        icon={
                                            isEdit
                                                ? <CheckOutlined />
                                                : <EditOutlined />
                                        }
                                        type='primary'
                                        className='edit-button'
                                        onClick={() => {
                                            if (isEdit) {
                                                onSubmit?.()
                                                setIsEdit(false)
                                            } else {
                                                setIsEdit(true)
                                            }
                                        }}
                                    />
                                    <Popconfirm
                                        title='确认删除？'
                                        onConfirm={() => onDelete?.(1)}
                                        icon={<QuestionCircleFilled />}
                                    >
                                        <Button
                                            icon={<DeleteOutlined />}
                                            type='primary'
                                            danger
                                            className='delete-button'
                                        />
                                    </Popconfirm>
                                </div>
                            </li>
                        </ul>
                    ) : (
                        <div className='k-tab-bookmark-modal-not-extension'>
                            <span>书签管理只能在扩展模式下使用</span>
                        </div>
                    )
                }
            </main>
        </BaseModal>
    )
}
