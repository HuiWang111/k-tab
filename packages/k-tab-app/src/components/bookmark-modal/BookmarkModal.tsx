/*
 * @Autor: hui.wang
 * @Date: 2022-02-02 16:21:21
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-02 19:45:57
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, useState } from 'react'
import { Input, ModalProps } from 'antd'
import { BaseModal } from '../base-modal/BaseModal'
import classNames from 'classnames'
import './styles.less'

interface IBookmarkModalProps extends Omit<ModalProps, 'title'> {
    bookmarks: Omit<chrome.bookmarks.BookmarkTreeNode, 'children'>[];
    folders: { title: string, id: number, }[];
    onFolderChange: (folderId: number) => void;
    isExtension: boolean;
}

export const BookmarkModal: FC<IBookmarkModalProps> = ({
    bookmarks,
    folders,
    isExtension,
    onFolderChange,
    ...restProps
}: IBookmarkModalProps) => {
    const [activeFolderId, setActiveFolderId] = useState<number>(folders.length ? folders[0].id : 0)

    return (
        <BaseModal
            visible={true}
            className='k-tab-bookmark-modal'
        >
            <header className='k-tab-bookmark-modal-header'>
                <div className='k-tab-bookmark-modal-title'>书签管理</div>
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
                                    <span className='bookmark-title'>华东理工继续教育学院</span>
                                </div>
                                <div className='bookmark-operation'>
                                    
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
