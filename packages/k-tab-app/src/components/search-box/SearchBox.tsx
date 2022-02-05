/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 08:43:16
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-05 21:20:51
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, useState } from 'react'
import { IconFont } from '../iconfont/IconFont'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { IEngine } from 'types'
import { useEnter, useMount } from 'hooks'
import classnames from 'classnames'
import './styles.less'
import { EngineStorage } from 'storages'

export interface ISearchBoxProps {
    engines: IEngine[];
}

export const SearchBox: FC<ISearchBoxProps> = ({
    engines
}: ISearchBoxProps) => {
    const [keyword, setKeyword] = useState('')
    const [visible, setVisible] = useState(false)
    const [engine, setEngine] = useState({
        name: 'baidu',
        href: 'http://www.baidu.com/s?wd='
    })

    const handleSearch = () => {
        if (keyword) {
            window.open(engine.href + keyword)
        }
    }

    useEnter(handleSearch, [keyword])

    useMount(() => {
        const currentEngine = EngineStorage.get()
        if (currentEngine) {
            setEngine(currentEngine)
        }
    })

    const toggleEngineListVisible = () => setVisible(!visible)
    const toggleEngine = (name: string, href: string) => {
        setEngine({ name, href })
        setVisible(false)
        EngineStorage.save({ name, href })
    }

    return (
        <div className='k-tab-search-container'>
            <div className='k-tab-search-box'>
                <div className='k-tab-search-engine' onClick={toggleEngineListVisible}>
                    <IconFont type={`icon-${engine.name}`} />
                </div>
                <div className='k-tab-search-input-wrapper'>
                    <Input
                        className='k-tab-search-input'
                        placeholder='输入想搜索的内容'
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                    />
                </div>
                <div className='k-tab-search-icon'>
                    <SearchOutlined color='#fff' onClick={handleSearch} />
                </div>
                <div
                    className={classnames({
                        'k-tab-engine-list-container': true,
                        'show': visible
                    })}
                >
                    <ul className='k-tab-engine-list'>
                        {
                            engines.map(({ name, title, href }) => {
                                return (
                                    <li key={name} title={title} onClick={() => toggleEngine(name, href)}>
                                        <span>
                                            <IconFont type={`icon-${name}`} />
                                        </span>
                                    </li>
                                )
                            })
                        }
                        <li title='plus'>
                            <span>
                                <PlusOutlined style={{ fontSize: '16px' }} />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
