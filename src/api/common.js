import request from '@/utils/request'

export function imageCode(num) {    
    return request({
        url: `/user-service/user/imageCode/${num}`,
    })
}