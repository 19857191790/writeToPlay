import axios from 'axios'
// @ts-ignore
import { ElMessage } from 'element-plus'

const instance = axios.create({
    baseURL: '',
    timeout: 5000
})

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status !== 200) {
            ElMessage({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            ElMessage({
                message: res.message || '',
                type: 'success',
                duration: 5 * 1000
            })
            return res.data
        }
    },
    error => {
        console.log('err' + error) // for debug
        ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default instance