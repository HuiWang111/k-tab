/*
 * @Autor: hui.wang
 * @Date: 2022-01-30 21:08:23
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-04 21:01:42
 * @emial: hui.wang@bizfocus.cn
 */
import { createConnection } from 'typeorm'
import { mysql, server, github } from './config'
import { Services } from './services'

const services = new Services()

const initialize = async (): Promise<void> => {
    const connection = await createConnection({
        type: 'mysql',
        host: mysql.host,
        port: mysql.port,
        username: mysql.user,
        password: mysql.password,
        database: mysql.db,
        synchronize: false,
        logging: false,
        // entities: [
        //     ...services.entities
        // ]
    })

    // services.initialize(connection)
}

const serverPort = server.port

export {
    serverPort,
    services,
    initialize
}

export const githubConfig = github
