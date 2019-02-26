import axios from 'axios'
import {notification} from 'antd'

const codeMessage = {
    202:'一个异步请求进入队列',
    401:'用户没有权限',
    404:'请求不存在',
    500:'服务器发生错误，请检查'
}
export function setAxios(){
    axios.interceptors.response.use(
        response=>{
            if(response.status == 200){
                const data = response.data
                if(data.code !== 0){
                    // 业务错误
                    notification.error({
                        message:`请求报错${response.config.url}`,
                        description:data.msg
                    })
                }

                return data;
            }
            else if(codeMessage[response.status]){
                // http错误
                notification.error({
                    message:`请求报错${response.status},${response.config.url}`,
                    description:data.msg
                })
            }
        }
    )

    return response
}