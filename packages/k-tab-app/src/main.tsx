/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:49
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 21:03:18
 * @emial: hui.wang@bizfocus.cn
 */
import ReactDOM from 'react-dom'
import App from 'app/App'
import { configure } from 'mobx'
import 'styles/index.less'

const init = () => {
    configure({
        enforceActions: "always"
    })

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
}

init()
