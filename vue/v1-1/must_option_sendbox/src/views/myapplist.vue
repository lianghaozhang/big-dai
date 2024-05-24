<script setup lang="ts">
import HeadComponent from '../components/headComponent.vue'
import { ref, useAttrs, defineCompoent, reactive, toRef } from 'vue'
const handleDelete = (index: number, row: object) => {
  tableData.value.splice(index, 1)
  const tableData_New = JSON.stringify(tableData)
  window.localStorage.setItem('tableData', tableData_New)
  ElMessage({
    message: '删除成功',
    type: 'success',
  })
}
const isShowMaskEdit = ref(false)
const add_index=ref(0)
const handleEdit = (index: number, row: object) => {
  add_index.value=index
  FormData.date = row.date
  FormData.name = row.name
  FormData.skill = row.skill
  FormData.address = row.address
  isShowMaskEdit.value = true
}
var FormData = reactive({
  date: '',
  name: '',
  skill: '',
  address: '',
})
var loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 1000);
const tableData = ref([
  {
    date: '1',
    name: 'Keep',
    skill: ' 这算是老牌健身app 了里面的功能很全 可以跟练也可以记录📝',
  },
  {
    date: '2',
    name: '薄荷健康',
    skill: '控制热量的小伙伴必备 他可以计算食物摄入的热量 帮你在减脂期记录饮食 打造热量缺口',
  },
  {
    date: '3',
    name: '体重小本',
    skill: '可以记录体重变化',
  },
  {
    date: '4',
    name: '天天跳绳 ',
    skill: 'Ai 数据算法很准 还有跳绳的虚拟空间',
  },
  {
    date: '5',
    name: '悦跑圈',
    skill: '跑步路线规划 记录跑步数据消耗',
  },
  {
    date: '6',
    name: '每日瑜伽',
    skill: ' 选择瑜伽跟练 还有线上指导',
  },
 
])

const search= ref('')
const clickConfirmADD = () => {
  console.log(add_index.value)
  tableData.value.splice(add_index.value, 1, FormData)
  console.log(tableData)
  isShowMaskEdit.value = false
  ElMessage({
    message: '更新成功',
    type: 'success',
  })
  const tableData_New = JSON.stringify(tableData)
  window.localStorage.setItem('tableData', tableData_New)
}
</script>
<template>
  <div class="about">
    <HeadComponent ref="HeadRef" result="" message="hard" count="4">
      <template #header="{ submitData }">
        <img class="ss" src="../../public/ss.jpeg" alt="" srcset="" style="width: 20px;
  height: auto;">
      </template>
    </HeadComponent>
    <div class="outTable">
      <el-table  :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width:100%" v-loading="loading">
        <el-table-column prop="date" label="排名" width="180" sortable />
        <el-table-column prop="name" label="名称" width="180" />
        <el-table-column prop="skill" label="特点" width="180" />
        <el-table-column width="180">
          <template #header="scope">
								<el-input v-model="search" size="default" placeholder="输入类型搜索" />

							</template>
          <template #default="scope">
           
          </template>
        </el-table-column>
      </el-table>
      <div class="mask" v-if="isShowMaskEdit">
        <div class="mask_white">
          <h5>修改数据</h5>
          <el-input v-model="FormData.date" placeholder="请输入登记日期"></el-input>
          <el-input v-model="FormData.name" placeholder="请输入名字"></el-input>
          <el-input v-model="FormData.skill" placeholder="请输入爱好"></el-input>
          <el-input v-model="FormData.address" placeholder="请输入地址"></el-input>
          <div class="close" @click="isShowMaskEdit = false">X</div>
          <el-button type="primary" @click="clickConfirmADD">确定</el-button>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped>
.about {
  padding-left: 200px;
  box-sizing: border-box;
}

.outBox {
  padding: 40px;
}

.each_li {
  display: flex;
  border: 1px solid #a4deed;
  padding: 20px 20px;
  margin-bottom: 30px;
  border-radius: 10px;
}


.loginB {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 20px auto;

}

.loginbox {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  margin: 50px auto;
  align-items: center;
  padding: 0 30px;
}

.loginbox input {
  outline: none;
  width: 200px;
  height: 50px;
  line-height: 50px;
  border: 1px solid salmon;
  padding-left: 20px;
  border-radius: 50px;
}

.gotoAboutbutton {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 20px auto;
  display: block;
  background-color: #b7dbdd;
}

.mask {
  width: 100%;
  height: 100%;
  background-color: rgb(127, 127, 127, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 109;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mask_white {
  width: 600px;
  min-height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
}

.mask_white {
  width: 600px;
  min-height: 350px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 99;
  font-size: 20px;
  font-weight: 100;
}
.outTable{
  padding: 50px;
}
</style>
