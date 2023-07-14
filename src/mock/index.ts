// @ts-ignore
import Mock from 'mockjs'
import getToken from '../utils/uploader.ts'
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

Mock.mock('/getToken', 'post', () => {
    return {
        // @ts-ignore
        data: getToken('h1iZ7ssAbVt35FzE5U8J5aysGtIQqFMWx-c1paMp','PbaelH10u98QMBxlgWa6o2bEsVcYk2u-XoCRi7Yn','19857191790'),
        status: 200
    }
})

export default {}
