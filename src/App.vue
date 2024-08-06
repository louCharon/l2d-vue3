<script setup="">
import {onMounted} from "vue";
import live2d from 'l2d-vue'
import json from '@/assets/model_list.json'
onMounted(() => {

  live2d.l2dInitSetting({modelAPI: process.env.api, modelList: json.models, waifuSize: '250x360'})
  live2d.l2dInitModel('live2d')
  live2d.l2dWaifuMouseTip((type, txt) => {
    console.log(type, txt);
  })
})

function change() {
  live2d.l2dSwitchModel()
}

</script>
<template>
<div>
  <canvas id="live2d" @click="change"></canvas>
</div>
</template>
<style scoped>
</style>