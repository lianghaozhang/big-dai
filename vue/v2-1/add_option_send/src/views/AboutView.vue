<script setup lang="ts">
import HeadComponent from '../components/headComponent.vue'
import { provide, ref,toRef } from 'vue'
import { useCartStore } from '@/stores/pinaLogin'
import jsonData from '../jsonData/h_index.json';
const usrStoreState = useCartStore()
ElMessage({
    message: '查询成功',
    type: 'success',
  })
usrStoreState.setMid()
const dataCount = ref(0)
provide('data-key', dataCount)
var loading = ref(true)
const getMessage = () => {
  setTimeout(() => {
    loading.value=false
  }, 2000);
}
const new_jsonData=toRef(jsonData.subjects)
provide('setCount_key', dataCount)
</script>
<template>
  <div class="about">
    <HeadComponent ref="HeadRef" result=""  message="hard" count="2" @get-message="getMessage">
      <template #header="{submitData}">
        <img class="ss" src="../../public/ss.jpeg" alt="" srcset="" style="width: 20px;
  height: auto;">
      </template>
    </HeadComponent>
    <div class="outBox" v-loading="loading">
      <div class="each_li" v-for="(item, index) in new_jsonData" :key="index">
      {{ item.episodes_info}}</div>
    </div>

  </div>
</template>

<style scoped>
.about{
  padding-left: 200px;
  box-sizing: border-box;
}
.outBox{
  padding: 40px;
}
.each_li{
  display: flex;
  border: 1px solid #a4deed;
  padding: 20px 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 20px;
}
.each_li:hover{
  background-color: skyblue;
  color: #fff;
}
</style>
