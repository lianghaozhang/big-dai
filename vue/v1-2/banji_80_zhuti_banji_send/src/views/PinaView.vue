<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { onMounted, ref, toRef } from 'vue'
import jsonData from '../jsonData/h_weather.json';
import * as echarts from 'echarts';
const useCounterStore_ce = useCounterStore()
var loading = ref(true)
const getMessage = () => {
  setTimeout(() => {
    loading.value = false
  }, 1000);
}
getMessage()
useCounterStore_ce.getList()
const handleDelete = (index: number, row: object) => {
  ElMessage({
    message: '成功',
    type: 'success',
  })
}
const valueCC = ref('2024-01')
const optionsCC = ref([
  {
    value: 'Option1',
    label: '2024-01',
  },
  {
    value: 'Option2',
    label: '2024-02',
  },

])

interface TyFace<T> {
  [params: string]: T
}
const changeSelect = (item: string) => {
  if (item == 'Option2') {
    carNum.value = [1820, 1932, 1901, 1934, 1290, 1330, 1320]
  } else {
    carNum.value = [820, 932, 901, 934, 1290, 1330, 1320]
  }
  new_jsonData.value.map((item: string, index: string | number) => {
    carNum.value.map((ite: string, ind: string | number) => {
      if (index == ind) {
        item.num = ite
      }
    })
  })
  initTbiao(carType)

}
const carType = ['A小组', 'B小组', 'C小组', 'D小组', 'E小组', 'F小组', 'G小组']
const new_jsonData = ref([
  { text: 'A小组', num: '820' },
  { text: 'B小组', num: '932' },
  { text: 'C小组', num: '934' },
  { text: 'D小组', num: '1290' },
  { text: 'E小组', num: '1330' },
  { text: 'F小组', num: '1320' },
  { text: 'G小组', num: '1320' },
])

const carNum = ref([820, 932, 901, 934, 1290, 1330, 1320])
const chartContainer = ref(null);
const initTbiao = (carType: []) => {
  const chart = echarts.init(chartContainer.value);
  const option = {
    tooltip: {
      trigger: 'axis', // 触发类型：坐标轴触发
      formatter: function (params: []) {
        return '标题：' + params[0].axisValue + '<br/>' +
          '分数：' + params[0].name + ' : ' + params[0].value;
      }
    },
    xAxis: {
      type: 'category',
      data: carType
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: carNum.value,
      type: 'line'
    }]
  };
  chart.setOption(option);
}
onMounted(() => {
  initTbiao(carType)
  ElMessage({
    message: '查询成功',
    type: 'success',
  })

});

</script>

<template>
  <div class="about">
    <HeadComponent ref="" result="" message="hard" count="0">
    </HeadComponent>
    <div class="titled addclass">
      查询班级小组评分数据
      <div class=" acclass">
        <el-select v-model="valueCC" class="m-2" placeholder="Select" size="large" @change="changeSelect($event)">
          <el-option v-for="item in optionsCC" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="out_content">
      <el-row class="delrow">
        <el-col :span="12" class="elcol">
          <div class="classzhnshi">数据展示</div>

          <div class="each_content grid-content ep-bg-purple-dark" :class="index==0?'first':index==1?'second':index==2?'third':''" v-for="(item, index) in new_jsonData" :key="index">
            <span>{{ item.text }}</span>
            <span>{{ item.num }}</span>
          </div>
        </el-col>
        <el-col :span="12" class="elcol_right">
          <div class="classzhnshi">查询数据</div>
          <div class="each_content_right grid-content ep-bg-purple-dark"  v-for="(item, index) in new_jsonData" :key="index">
            <span>{{ item.text }}</span>
            <span>{{ item.num }}</span>
          </div>
        </el-col>
      </el-row>

    </div>

    <div ref="chartContainer" style="width: 600px; height: 400px;"></div>
    <div class="outBox">
      <el-table :data="new_jsonData" style="width:100%">
        <el-table-column prop="text" label="类型" width="180" />
        <el-table-column prop="num" label="数量" width="180" sortable />
        <el-table-column width="180">
          <template #default="scope">
            <el-button size="small" type="warning" @click="handleDelete(scope.$index, scope.row)">deal</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>


<style scoped>
.about {
  padding-left: 200px;
  box-sizing: border-box;
}

.outBox {
  padding: 50px;
}

.each_li {
  display: flex;
  border: 1px solid #a4deed;
  padding: 20px 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-size: 20px;
}

.titled {
  padding: 50px;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  padding: 0;
  background-color: #c2e3fb;
  height: 80px;
  line-height: 80px;
  text-align: center;
}

.addclass {}

.acclass {
  width: 250px;
  box-sizing: border-box;
  margin-left: 20px;
}

.out_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  padding: 10px;
}

.each_content {
  width: 150px;
  min-height: 100px;
  background-color: #e5e1f8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  margin-bottom: 20px;
  font-size: 20px;
}
.each_content_right{
  width: 150px;
  min-height: 100px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  border: 1px solid skyblue;
}
.first{
  background-color: #e4fae9;
}
.second{
  background-color: #fcf2e7;
}
.third{
  background-color: #9052d2;

}

.classzhnshi {
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
}
.delrow{
  width: 100%;

}
.elcol{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.elcol_right{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}



</style>