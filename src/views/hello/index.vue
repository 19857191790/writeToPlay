<script setup lang="ts">
import starSky from '../components/sassStarSky.vue'
import router from "../../router";
</script>

<template>
  <el-container class="container">
    <star-sky></star-sky>
    <div class="mainer">
      <span>Success Login</span>
      <span>Welcome to Index!</span>
      <span>
        <el-button type="primary" size="large" @click="router.push('/main')">Click To Index</el-button>
      </span>
    </div>
  </el-container>
</template>

<style scoped lang="scss">
  .container{
    width: 100%;
    height:100%;
    .mainer{
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span{
        font-size: 100px;
        color: white;
        .el-button{
          font-size: 50px !important;
          height: 120px !important;
          padding: 32px !important;
        }
      }
    }
  }
</style>