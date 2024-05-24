import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useCartStore = defineStore({
  id: 'cart',
  testValue: 'cart',
  state: () => ({
    rawItems: ['home','table'],
  }),
  getters: {
    items: (state): Array<{ name: string; amount: number }> =>
      state.rawItems.reduce((items, item) => {
        const existingItem = items.find((it) => it.name === item)

        if (!existingItem) {
          items.push({ name: item, amount: 1 })
        } else {
          existingItem.amount++
        }

        return items
      }, [] as Array<{ name: string; amount: number }>),
  },
  actions: {
    setMid(){
      this.rawItems.push('/about')
    },
    addItem(name: string) {
      this.rawItems.push(name)
    },

    removeItem(name: string) {
      const i = this.rawItems.lastIndexOf(name)
      if (i > -1) this.rawItems.splice(i, 1)
    },

    async purchaseItems() {
      const user = useUserStore()
      if (!user.name) return

      console.log('Purchasing', this.items)
      const n = this.items.length
      this.rawItems = []

      return n
    },
  },
})


// export const useCounterStore = defineStore('counter', () => {

//   const count = ref(0)

//   // getter定义
//   const doubleCount = computed(() => count.value * 2)

//   const increment=()=> {
//     count.value+=5
//   }

//   // action异步
//   const API_URL='https://geek.itheima.net/v1_0/channels'
//   const list =ref([])
//   const getList = async()=>{
//     const res = await axios.get(API_URL)
//     // console.log(res.data.data.channels)
//     list.value =res.data.data.channels
//   } 

//   //storeToRefs  //解构赋值丢失响应式

//   return { count, doubleCount, increment,list,getList }
// })
