// @ts-ignore
import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
})

Mock.mock('/user/login', 'post', (params: any) => {
    const { username,password }=JSON.parse(params.body)
    if(username!=='admin' || password!=='123456'){
        return {
            data: {},
            status: 400,
            message: 'Error,wrong username or password!'
        }
    }else{
        return {
            data: { token: '123' },
            status: 200,
            message: 'Login Success'
        }
    }
})

export default {}