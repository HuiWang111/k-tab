/*
 * @Autor: hui.wang
 * @Date: 2022-01-28 14:31:49
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-01-30 17:30:06
 * @emial: hui.wang@bizfocus.cn
 */
declare module '*.jpeg';

declare module '*.bmp';

declare module '*.gif';

declare module '*.jpg';

declare module '*.png';

declare module '*.webp';

declare module '*.svg';

declare module '*.less';

declare module '*.css';

declare module 'chinese-lunar' {
    export function solarToLunar(date: Date): Record<string, any>;
    export function format(lunar: Record<string, any>, formatString: string): string;
}