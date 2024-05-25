import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment=()=> {
    count.value+=5
  }
  const list =ref([])
  const getList = ()=>{
    window.localStorage.setItem('table',doubleCount)
  } 
  return { count, doubleCount, increment,list,getList }
})
