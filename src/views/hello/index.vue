<script setup lang="ts">
  import starSky from '../components/sassStarSky.vue'
  import {onMounted, ref} from "vue";
  // @ts-ignore
  import { ElNotification } from 'element-plus'
  import { PictureFilled,ElementPlus,Iphone } from '@element-plus/icons-vue'
  import picsView from '../components/picsView.vue'
  import svgAnimation from '../components/svgAnimation.vue'
  import router from "../../router";

  onMounted(()=>{
    ElNotification({
      title: 'Success',
      message: 'Hello,let\'s take a look at the starry sky together',
      type: 'success',
      duration:5000,
      showClose:false
    })
  })
  const picsViewVisible=ref(false)
</script>

<template>
  <el-container class="container">
    <star-sky></star-sky>
    <svgAnimation class="svgAnimation"></svgAnimation>
    <div class="items">
      <div class="item">
        <el-tooltip content="particlesView" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large"
              @click="router.push('/particles')">
            particles
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="PicsView" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large"
              @click="picsViewVisible=true">
            <el-icon size="28px"><PictureFilled /></el-icon>
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
              <el-icon size="32px"><ElementPlus /></el-icon>
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
              <img src="../../assets/github.png" style="width: 32px;height: 32px;">
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="Gitee Address" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-link :underline="false" href="https://gitee.com/zhaojc-077399/write-to-play" target="_blank">
              <img src="../../assets/gitee.png" style="width: 32px;height: 32px;">
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="+86 19857191790" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-icon size="32px"><Iphone /></el-icon>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="WeChat 19857191790" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <img src="../../assets/wechat.png" style="width: 32px;height: 32px;">
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="csdn" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-link :underline="false" href="https://blog.csdn.net/weixin_59685936?type=blog" target="_blank">
              <img src="../../assets/csdn.png" style="width: 32px;height: 32px;">
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
      <div class="item">
        <el-tooltip content="Niuma Programmer" effect="dark" placement="right">
          <el-button
              class="fixed-buttons"
              color="#626aef"
              dark
              circle
              size="large">
            <el-link :underline="false" href="https://niuma.top/" target="_blank">
              <img src="../../assets/nm.png" style="width: 32px;height: 32px;">
            </el-link>
          </el-button>
        </el-tooltip>
      </div>
    </div>

    <el-dialog
        v-model="picsViewVisible"
        title="picsViewPage"
        width="90%"
    >
      <picsView></picsView>
    </el-dialog>
  </el-container>
</template>

<style scoped lang="scss">
  .container{
    width: 100%;
    height:100%;
    .svgAnimation{
      position: fixed;
      bottom: 0;
      right: 0;
    }
    .items{
      position: fixed;
      top: 2%;
      left: 1%;
      display: flex;
      flex-direction: column;
      .item{
        display: block;
        margin-bottom: 32%;
        .el-link {
          color:white;
        }
        .fixed-buttons{
          width: 64px;
          height: 64px;
        }
      }
    }
  }
</style>