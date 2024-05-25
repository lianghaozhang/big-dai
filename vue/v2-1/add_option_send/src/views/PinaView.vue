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
const changeSelect=(item:string)=>{
  if(item=='Option2'){
    carNum.value=[1820, 1932, 1901, 1934, 1290, 1330, 1320]
  }else{
    carNum.value=[820, 932, 901, 934, 1290, 1330, 1320]
  }
  new_jsonData.value.map((item:string,index:string|number)=>{
      carNum.value.map((ite:string,ind:string|number)=>{
      if(index==ind){
        item.num=ite
      }
      })
    })
  initTbiao(carType)
  ElMessage({
    message: '查询成功',
    type: 'success',
  })
}
const carType=['比亚迪', '奇瑞', '红旗', '奥迪', '道奇', '大众', '小雷']
const new_jsonData=ref([
  {text:'比亚迪',num:'820'},
  {text:'奇瑞',num:'932'},
  {text:'红旗',num:'934'},
  {text:'奥迪',num:'1290'},
  {text:'道奇',num:'1330'},
  {text:'大众',num:'1320'},
  {text:'小雷',num:'1320'},
])

const carNum=ref([820, 932, 901, 934, 1290, 1330, 1320]) 
const chartContainer = ref(null);
const initTbiao=(carType:[])=>{
  const chart = echarts.init(chartContainer.value);
  const option = {
    tooltip: {
      trigger: 'axis', // 触发类型：坐标轴触发
      formatter: function (params: []) {
        // params 是一个数组，数组中包含每个系列的数据信息
        // 通过 params 可以获取点的数据，系列名等信息
        // 返回的字符串将在 tooltip 中显示
        return '汽车品牌：' + params[0].axisValue + '<br/>' +
          '库存量：' + params[0].name + ' : ' + params[0].value;
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
    <div class="titled">查询目前英达公司各类品牌库存车辆数据</div>
    <div class="titled">
      <el-select v-model="valueCC" class="m-2" placeholder="Select" size="large" @change="changeSelect($event)">
        <el-option v-for="item in optionsCC" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div ref="chartContainer" style="width: 600px; height: 400px;"></div>
    <div class="outBox">
      <el-table :data="new_jsonData" style="width:100%">
        <el-table-column prop="text" label="类型" width="180" />
        <el-table-column prop="num" label="数量" width="180" sortable/>
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
}
</style>