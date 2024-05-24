<script setup lang="ts">
import { ref, useSlots } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
let sonMoney = ref(444)
const props = defineProps<{
  result?: String,
  message?: String,
  count?: Number
  foo?: String | Number
  bar?: Number
}>()
const goodList = ref([
  { title: '系统首页', value: '/about' },
  { title: '查看运动好友', value: '/tableTestView' },
  { title: '查看天气', value: '/piniaTest' },
  { title: '消耗热量对照表', value: '/pinaLogin' },
  { title: '健身必备app', value: '/myapplist' },
  { title: '退出登录', value: '/' },
  
])
const clickGo = (item: string) => {
  router.push(item)
}
const emit = defineEmits(['get-message'])
const sendMsg = () => {
  emit('get-message', 'this is son message')
}
sendMsg()
const name = ref('test name')
const setNmae = () => {
  name.value = 'test new name'
}
defineExpose({
  sonMoney,
  setNmae,
  name
})
const slots = useSlots()
const header = slots.header
const count = ref(props.count)
</script>

<template  v-slot:default="{submitData}">
  <div class="greetings">
    <li class="each_li" :class="count == index ? 'acitve' : ''" v-for="(item, index) in goodList" :key="index"
      @click="clickGo(item.value)">
      <span class="titleC">
        {{ item.title }}
      </span>
      <slot name="header"></slot>
    </li>
  </div>
</template>

<style scoped>
.buttonCl {
  width: 30px;
  height: 30px;
}

.greetings {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;
  background-color: rgb(164, 222, 237, 0.9);
  opacity: 0.7;
  color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}

.each_li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  border-bottom: 1px dotted #ccc;
  display: flex;
  align-items: center;
}

.each_li:hover,
.each_li.acitve {
  background-color: #82cfe8;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.titleC {
  margin-right: 5px;
}</style>
