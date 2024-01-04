import { Constant } from "../constants/constant"

export class CommonUtil {

    public static translate(jobs: any[], value: any, lang: string) {
        const element = jobs.find((e: any) => e.value === value)
        if(!element) return ""
        if (Constant.SOUTH_KOREA === lang) {
            return element.labelKr
        } else if (Constant.ENGLISH === lang) {
            return element.label
        }
    }

    public static setMaxLengthContent(content: string, maxLength: number) {
        if (!content) return ""
        if (maxLength < 0) return ""
        return content.length >= maxLength ? content.substring(0, maxLength) + "..." : content
    }

}