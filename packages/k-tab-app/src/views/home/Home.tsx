/*
 * @Autor: hui.wang
 * @Date: 2022-01-29 21:52:17
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-12 20:34:56
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import {
    SearchBox, DateTime, Sidebar, LoginModal, BookmarkModal, SettingDrawer
} from 'components'
import { observer } from 'mobx-react-lite'
import { useServices, useMount, useVisible, useCssVariables } from 'hooks'
import { A11y, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { URLMergeQuery, parseCurrentQuery } from 'utils'
import { ConfigContext, ThemeContext } from 'app'
import 'swiper/css'
import './styles.less'

export const Home: FC = observer(() => {
    const { searchService, authService, chromeService } = useServices()
    const [loginModalVisible, showLoginModal, hideLoginModal] = useVisible(false)
    const [settingDarwerVisible, showSettingDrawer, hideSettingDrawer] = useVisible()
    const {
        iconSize,
        setIconSize
    } = useCssVariables()

    useMount(() => {
        searchService.fetchEngines()
        getGithubUserInfo()
        chromeService.getBookmarks()

        async function getGithubUserInfo() {
            const { code } = parseCurrentQuery()

            if (code) {
                authService.fetchGithubUser({ code })
            }
        }
    })

    return (
        <div className='k-tab-root'>
            <div className='k-tab-bg'></div>
            <Sidebar
                onLogin={showLoginModal}
                onSetting={() => {
                    showSettingDrawer()
                }}
            />
            <DateTime />
            <SearchBox engines={searchService.getEngines()} />
            <Swiper
                modules={[A11y, Mousewheel]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                direction='vertical'
                loop
                mousewheel
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            {/* <footer className='k-tab-quotations'>经典语录</footer> */}
            {
                loginModalVisible && (
                    <LoginModal
                        title='欢迎使用k-tab'
                        visible={loginModalVisible}
                        onCancel={hideLoginModal}
                        description='k-tab仅支持第三方登录，请选择登录方式'
                        loginModes={[
                            {
                                icon: 'icon-GitHub',
                                url: URLMergeQuery('https://github.com/login/oauth/authorize', {
                                    'client_id': '045a87fab775b2c2df39'
                                })
                            }
                        ]}
                    />
                )
            }
            <BookmarkModal
                folders={[
                    { title: '个人', id: 1 },
                    { title: '比孚', id: 2 },
                    { title: '书签栏', id: 3 }
                ]}
                bookmarks={[]}
                onFolderChange={() => { /**/ }}
                // isExtension={chromeService.getIsExtension()}
                isExtension={true}
            />
            <SettingDrawer
                iconSize={iconSize}
                onIconSizeChange={setIconSize}
                visible={settingDarwerVisible}
                maskClosable
                onClose={hideSettingDrawer}
                closable={false}
                width={420}
            />
        </div>
    )
})