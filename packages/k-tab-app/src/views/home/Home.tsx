/*
 * @Autor: hui.wang
 * @Date: 2022-01-29 21:52:17
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-31 16:11:46
 * @emial: hui.wang@bizfocus.cn
 */
import { FC } from 'react'
import { SearchBox, DateTime, Sidebar, LoginModal } from 'components'
import { observer } from 'mobx-react-lite'
import { useServices, useMount, useVisible } from 'hooks'
import { A11y, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './styles.less'

export const Home: FC = observer(() => {
    const { searchService } = useServices()
    const [loginModalVisible, showLoginModal, hideLoginModal] = useVisible(true)

    useMount(() => {
        searchService.fetchEngines()
    })

    return (
        <div className='k-tab-root'>
            <div className='k-tab-bg'></div>
            <Sidebar
                onLogin={showLoginModal}
                onSetting={() => {
                    // 
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
            <footer className='k-tab-quotations'>经典语录</footer>
            {
                loginModalVisible && (
                    <LoginModal
                        title='欢迎使用k-tab'
                        visible={loginModalVisible}
                        onCancel={hideLoginModal}
                        description='k-tab仅支持第三方登录，请选择登录方式'
                    />
                )
            }
        </div>
    )
})