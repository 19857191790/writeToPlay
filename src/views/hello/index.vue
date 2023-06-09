<script setup lang="ts">
import starSky from '../components/sassStarSky.vue'
import {onMounted} from "vue";
// @ts-ignore
import { ElNotification } from 'element-plus'
import { PictureFilled,ElementPlus } from '@element-plus/icons-vue'

onMounted(()=>{
  ElNotification({
    title: 'Success',
    message: 'Hello,let\'s take a look at the starry sky together',
    type: 'success',
    duration:5000,
    showClose:false
  })
})
</script>

<template>
  <el-container class="container">
    <star-sky></star-sky>
    <div class="items">
      <div class="item">
        <el-tooltip content="Pictrue WebSite is unregistered！" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-icon size="24px"><PictureFilled /></el-icon>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="ElementPlus Index" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-link :underline="false" href="https://element-plus.gitee.io/zh-CN/" target="_blank">
              <el-icon size="24px"><ElementPlus /></el-icon>
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="Github Address" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-link :underline="false" href="https://github.com/19857191790/writeToPlay" target="_blank">
              <img src="../../assets/github.png" style="width: 24px;height: 24px;">
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="Github Address" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-link :underline="false" href="https://gitee.com/zhaojc-077399/write-to-play" target="_blank">
              <img src="../../assets/gitee.png" style="width: 24px;height: 24px;">
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
    </div>
  </el-container>
</template>

<style scoped lang="scss">
  .container{
    width: 100%;
    height:100%;
    .items{
      position: fixed;
      top: 2%;
      left: 1%;
      display: flex;
      flex-direction: column;
      .item{
        display: block;
        margin-bottom: 16%;
        .el-link {
          color:white;
        }
        .fixed-buttons{
          width: 48px;
          height: 48px;
        }
      }
    }
  }
</style>