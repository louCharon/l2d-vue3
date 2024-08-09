<script setup="">
import {onMounted, ref, nextTick} from "vue";
import live2d from 'l2d-vue'
import json from '@/assets/model_list.json'
import {clientW, clientH} from "./utils/vueuse.js";
import {isMobile} from "./utils/userAgent.js";

const audio = ref()
const txtShow = ref(false)
const myCanvas = ref(null)
const isLoading = ref(false)
onMounted(() => {
  // console.log(process.env);
  // dev环境由于没有做映射需要加上models路径，pro环境有nginx配置了映射静态资源地址
  if(process.env.mode == 'development') {
    json.models.forEach(i => {
      i.path = 'models/' + i.path
    })
  }
  // console.log(json);
  let h = clientH.value - 100
  let w = clientW.value * 0.7
  let waifuSize = ''
  // console.log(isMobile());
  if(isMobile()) {
    waifuSize = w + 'x'+ h
  } else {
    waifuSize = '250x600'
  }
  live2d.l2dInitSetting({modelAPI: process.env.api, modelList: json.models, waifuSize: waifuSize})
  live2d.l2dInitModel('live2d', () => {
    nextTick(() => {

    })

  })
  /*live2d.l2dWaifuMouseTip((type, txt) => {
    console.log(type, txt);
  })*/
  live2d.l2dWaifuClick((a) => {
    // console.log(a);
    // 在bodytrue和headtrue触发语音的情况下，弹出气泡
    // audio.value.play()
  })

  console.log(live2d);
})

function switchModel() {
  isLoading.value = true
  live2d.l2dSwitchModel(() => {
    nextTick(() => {
      isLoading.value = false
    })
  })

}

</script>
<template>
<div class="main">
  <div class="popup">
    <div class="txt" v-show="txtShow">live2d</div>
  </div>
  <div class="container">
    <canvas ref="myCanvas" id="live2d"></canvas>
  </div>
<!--  <audio src="../public/test.mp3" ref="audio"></audio>-->

  <ul class="op-ul">
<!--    <li>-->
<!--      听歌-->
<!--    </li>-->
    <button @click="switchModel()" :disabled="isLoading">
      换人
    </button>
  </ul>
  <div class="mask" v-show="isLoading">
    <div>正在加载。。。</div>
  </div>
</div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
ul li {
  list-style: none;
}
.main {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #eee;
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0,0,0,0.25);
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
}
.container {
  flex: 1;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
}
#live2d {
  /*border: 1px solid black;*/
}
.popup {
  flex: 0 0 100px;
  display: flex;
  justify-content: center;
}
.popup .txt {
  flex: 0 0 50%;
  padding: 15px 0;
  border-radius: 12px;
  box-shadow: 1px 1px 1px rgb(16, 157, 251, 0.25);
  background-color: #fff;
  text-align: center;
}
.op-ul {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  /*border: 1px solid red;*/
  text-align: center;
}
.op-ul li {
  height: 40px;
  line-height: 40px;
  width: 60px;
  background-color: #ffffff;
}
</style>