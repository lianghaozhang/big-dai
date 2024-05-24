<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { ref,toRef } from 'vue'
import jsonData from '../jsonData/h_weather.json';
const useCounterStore_ce = useCounterStore()
var loading = ref(true)
const getMessage = () => {
  setTimeout(() => {
    loading.value = false
  }, 1000);
}
getMessage()
useCounterStore_ce.getList()
const new_jsonData=toRef(jsonData.subjects)
const handleDelete = (index: number, row: object) => {
  ElMessage({
    message: '点赞成功',
    type: 'success',
  })
}
</script>

<template>
  <div class="about">
    <HeadComponent ref="HeadRef" result="" message="hard" count="2">
      <template #header="{ submitData }">
        <img class="ss" src="../../public/ss.jpeg" alt="" srcset="" style="width: 20px;
height: auto;">
      </template>
    </HeadComponent>
    <div class="outBox">
        <el-table :data="new_jsonData" style="width:100%" v-loading="loading">
        <el-table-column prop="time" label="日期" width="180" sortable />
        <el-table-column prop="text" label="天气" width="180" />
        <el-table-column prop="num" label="最高气温/最低气温" width="180" />
        <el-table-column width="180">
          <template #default="scope">
            <el-button size="small" type="warning" @click="handleDelete(scope.$index, scope.row)">点赞</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>


<style scoped>
.about{
  padding-left: 200px;
  box-sizing: border-box;
}
.outBox{
  padding: 50px;
}
.each_li{
  display: flex;
  border: 1px solid #a4deed;
  padding: 20px 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 20px;
}
</style>