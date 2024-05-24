import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment=()=> {
    count.value+=5
  }
  const API_URL='https://geek.itheima.net/v1_0/channels'
  const list =ref([])
  const getList = async()=>{
    const res = await axios.get(API_URL)
    list.value =res.data.data.channels
  } 
  return { count, doubleCount, increment,list,getList }
})
