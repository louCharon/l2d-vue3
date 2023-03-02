<script setup="">
import {ref, onMounted} from "vue";

const l2dRef = ref(null)
const className = []
function live2dItemClick(index) {
  alert('click')
  if(index == 0) {
    l2dRef.value.loadOtherModel()
  }
  if(index == 1) {
    l2dRef.value.loadRandModel()
  }
}
function live2dItemEnter(index) {
  alert('enter')
  l2dRef.value.showMessage(index)
}
onMounted(() => {
  // console.log(l2dRef.value);
})
</script>
<template>
  <live2d-v3 @live2dItemClick="live2dItemClick" @live2dItemEnter="live2dItemEnter" ref="l2dRef" :className="className"></live2d-v3>
</template>
<style scoped>
.test {
  border: 1px solid red;
}
</style>