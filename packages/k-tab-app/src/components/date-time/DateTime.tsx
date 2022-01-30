/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 15:54:02
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 17:30:26
 * @emial: hui.wang@bizfocus.cn
 */
import { FC, useState, useRef } from 'react'
import { useMount } from 'hooks'
import dayjs from 'dayjs'
import chineseLunar from 'chinese-lunar'
import './styles.less'

export const DateTime: FC = () => {
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [week, setWeek] = useState('')
    const [lunar, setLunar] = useState('')
    const timer = useRef<NodeJS.Timeout | null>(null)
    
    const getDateTime = () => {
        const weeks: Record<number, string> = {
            1: '一',
            2: '二',
            3: '三',
            4: '四',
            5: '五',
            6: '六',
            0: '日',
        }

        const current = dayjs()
        setTime(current.format('HH:mm'))
        setDate(current.format('MM月DD日'))
        setWeek(`星期${weeks[current.day()]}`)
        const lunarObject = chineseLunar.solarToLunar(current.toDate())
        setLunar(chineseLunar.format(lunarObject, 'MD'))
    }

    useMount(() => {
        getDateTime()

        timer.current = setInterval(getDateTime, 30000)

        return () => {
            if (timer.current) {
                clearInterval()
                timer.current = null
            }
        }
    })

    return (
        <div className='k-tab-datetime-container'>
            <div className='k-tab-datetime'>
                <div className='k-tab-datetime-time'>{time}</div>
                <div className='k-tab-datetime-info'>
                    <span className='k-tab-datetime-date'>{date}</span>
                    <span className='k-tab-datetime-week'>{week}</span>
                    <span className='k-tab-datetime-lunar'>{lunar}</span>
                </div>
            </div>
        </div>
    )
}