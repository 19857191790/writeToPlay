<template>
  <div class="container">
    <star-sky></star-sky>
    <div class="login">
      <div class="left">
        <img src="../../../public/vite.svg" alt="">
      </div>
      <div class="left"><span class="login-title">System Login</span>
        <el-form :model="loginForm" :rules="LoginRules" ref="loginFormRef" size="large" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" size="large" placeholder="username">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" size="large" placeholder="password">
              <template #prefix>
                <el-icon><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import starSky from '../components/sassStarSky.vue'
  import {reactive} from "vue";
  import type { FormInstance, FormRules } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'
  const loginForm:any=reactive({
    username:'',
    password:''
  })
  const loginRules:any=reactive({
    username:[{required:true,tigger:"blur",message:'Please Input Your Username'}],
    password:[{required:true,tigger:"blur",message:'Please Input Your Password'}]
  })
  const loginFormRef = ref<FormInstance>()

</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login{
      position: fixed;
      width: 800px;
      height: 400px;
      background: rgba(255,255,255,.3);
      display: flex;
      border-radius: 15px;
      .left:first-child{
        img{
          width: 100%;
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
          width: 96% !important;
        }
        .el-button{
          width: 100% !important;
        }
      }
    }
  }
</style>