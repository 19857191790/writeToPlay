<script setup lang="ts">
  // @ts-ignore
  import { uploadFile } from "../../../utils/uploader.ts";
  import {onMounted} from "vue";

  // 上传文件
  // const uploadImage = (files: Array<File>) => {
  //   if (files.length > 0) {
  //     uploadFile(files[0]).subscribe({
  //       next: (result) => {
  //         console.log(result)
  //       },
  //       error: (err) => {
  //         console.log(err)
  //
  //       },
  //       complete: (e) => {
  //         console.log(e)
  //       },
  //     });
  //   }
  // }

  onMounted(()=>{
    alert("警告：请在main.ts中注释MockJs相关代码再使用该功能！！！！")
  })
</script>

<template>
  <div class="mx-auto text-center">
    <div class="text-center text-gray-600">
      <label
          for="file-upload"
          class="relative cursor-pointer bg-white rounded-md text-gray-400 hover:text-indigo-500"
      >
        <svg
            class="mx-auto h-8 w-8"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
        >
          <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
<!--        <input-->
<!--            id="file-upload"-->
<!--            name="cover"-->
<!--            type="file"-->
<!--            class="sr-only"-->
<!--            accept="image/png,image/jpeg,image/jpg"-->
<!--            @change="uploadImage($event.target.files)"-->
<!--        />-->
      </label>
    </div>
    <p class="text-xs text-gray-500">png, jpeg, jpg</p>
    <p class="text-xs text-gray-500">up to 2MB</p>
  </div>
</template>

<style scoped>

</style>
