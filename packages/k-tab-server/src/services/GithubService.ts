/*
 * @Autor: hui.wang
 * @Date: 2022-02-04 21:08:11
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-10 16:15:28
 * @emial: hui.wang@bizfocus.cn
 * 
 * TODO: 通过axios请求github成功率很低
 */
import { AxiosInstance } from 'axios'
import { JSDOM } from 'jsdom'
import { GITHUB_BASE_URL } from '../ResourcePaths'
import { Repositorie } from './types'

export class GithubService<HttpClient extends AxiosInstance> {
    constructor(private httpClient: HttpClient) {}

    getRepositoriesByUserName = async (username: string) => {
        return this.getRepositoriesByUrl(`${GITHUB_BASE_URL}/${username}?tab=repositories`)
    }

    private getRepositoriesByUrl = async (url: string, repositories: Repositorie[] = []) => {
        try {
            const res = await this.httpClient.get(url)
            const { document } = (new JSDOM(res.data)).window

            document.querySelectorAll('#user-repositories-list li').forEach(li => {
                const link = li.querySelector('h3 a') as HTMLAnchorElement
                const name = link.textContent.replace(/\n/g, '').trim()
                const url = GITHUB_BASE_URL + link.getAttribute('href')

                repositories.push({
                    name,
                    url
                })
            })

            const nextButton = document.querySelector('.paginate-container a.btn.btn-outline.BtnGroup-item')
            const nextPageUrl = nextButton && nextButton.getAttribute('href')

            if (nextPageUrl) {
                return await this.getRepositoriesByUrl(nextPageUrl, repositories)
            }

            return repositories
        } catch(e) {
            return Promise.reject(e)
        }
    }

    getStarsByUserName = async (username: string) => {
        return this.getStarsByUrl(`${GITHUB_BASE_URL}/${username}?tab=stars`)
    }

    private getStarsByUrl = async (url: string, stars: Repositorie[] = []): Promise<Repositorie[]> => {
        try {
            const res = await this.httpClient.get(url)
            const { document } = (new JSDOM(res.data)).window

            document.querySelectorAll('.col-12.d-block.width-full.py-4.border-bottom.color-border-muted').forEach(el => {
                const link = el.querySelector('h3 a') as HTMLAnchorElement
                const fullname = link.textContent.replace(/\n/g, '').trim()
                const [organization, name] = fullname.split(' / ')
                const url = GITHUB_BASE_URL + link.getAttribute('href')

                stars.push({
                    name,
                    url,
                    organization
                })
            })

            const nextButton = document.querySelector('.paginate-container a.btn.btn-outline.BtnGroup-item')
            const nextPageUrl = nextButton && nextButton.getAttribute('href')

            if (nextPageUrl) {
                return await this.getStarsByUrl(nextPageUrl, stars)
            }

            return stars
        } catch (e) {
            return Promise.reject(e)
        }
    }
}
