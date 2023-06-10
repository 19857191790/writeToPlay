<template>
  <div class="container">
    <star-sky></star-sky>
    <div class="currentTime">
      {{currentTime()}}
    </div>
    <div class="login">
      <div class="left">
        <img src="/vite.svg" alt="图片显示不正确">
      </div>
      <div class="left"><span class="login-title">System Login</span>
        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" size="large" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" size="large" placeholder="username">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" size="large" placeholder="password">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginSubmit(loginFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import starSky from '../components/sassStarSky.vue'
  import {onMounted, reactive, ref} from "vue";
  import type { FormInstance, FormRules } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'
  import { login } from '../../api/api.ts'
  import router from "../../router";
  import { formatTime } from '../../utils/format.ts'

  const loginForm=reactive({
    username:'admin',
    password:'123456'
  })
  const loginRules=reactive<FormRules>({
    username:[{required:true,trigger:"blur",message:'Please Input Your Username'}],
    password:[{required:true,trigger:"blur",message:'Please Input Your Password'}]
  })
  const loginFormRef = ref<FormInstance>()
  const loginSubmit= (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid:boolean) => {
      if (valid) {
        console.log('submit!')
        login(loginForm).then(res=>{
          console.log(res)
          clearInterval(a)
          router.push('/hello')
        })
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
  const currentTime=()=>{
    return formatTime(new Date())
  }
  let a:number=0;
  onMounted(()=>{
    a=setInterval(()=>{
      document.getElementsByClassName('currentTime')[0].innerHTML=currentTime()
    },1000)
  })
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .currentTime{
      position: fixed;
      left: 1%;
      top: 1%;
      font-size: 24px;
      color: white;
    }
    .login{
      position: fixed;
      width: 800px;
      height: 400px;
      background: rgba(255,255,255,.3);
      display: flex;
      border-radius: 15px;
      .left:first-child{
        img{
          width: 96%;
        }
      }
      .left{
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        .login-title{
          font-size: 40px;
          color: white;
          height: 100px;
        }
        .el-form,.el-form-item{
          width: 100% !important;
        }
        .el-button{
          width: 100% !important;
        }
      }
    }
  }
</style>