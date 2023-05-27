<script setup lang="ts">
import starSky from '../components/sassStarSky.vue'
</script>

<template>
  <el-container class="container">
    <star-sky></star-sky>
    <div class="mainer">
      <el-aside>
        <span style="color: white;font-size: 40px;">Index</span>
      </el-aside>
      <div class="inside">
        <el-header></el-header>
        <el-main></el-main>
      </div>
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
      .el-aside{
        width: 300px;
        height: 100%;
        background: rgba(255,255,255,.3);
        margin: 0;
        box-shadow: 0 1px 5px #fff;
      }
      .inside{
        width: calc(100% - 300px);
        height: 100%;
        box-shadow: 1px 0 5px #fff;
        display: flex;
        flex-direction: column;
        .el-header{
          width: 100%;
          height: 60px;
          background: rgba(255,255,255,.3);
          box-shadow: 1px 1px 5px #fff;
        }
        .el-main{
          width: 100%;
          height: calc(100% - 60px);
          background: rgba(255,255,255,.3);
          box-shadow: 1px 1px 5px #fff;
        }
      }
    }
  }
</style>