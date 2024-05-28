<script setup lang="ts">
import {provide,ref} from 'vue'

const form:object=ref([{name:'xiao',age:'30'}])
const getName=form
const statuList= ref<any[]>([]);
statuList?.forEach((ele:any)=>console.log(ele))
let number:number[]=[1,2,3]
let string_a:Array<string>= ['1','2']  
let array_a:(string|number)[]=['1',1]   //联合类型
let number_c:string|number[]=[1,2,3]
// 类型别名
type CustomArray=(number|string)[]
let arr1:CustomArray = [12]
function add(name:number):number{
  return name
}
add(1)
// void没有返回值
function greet(name:number):void{
  console.log(99)
}
//可选参数
function muslice(num1?:number){}
// 对象写法
let persion:{name:string;age:number;sayhi():void} ={
  name:'aage',
  age:22,
  sayhi(){}
}

</script>
<template>
  <div>
    学习ts


    <h1>{{form[0].name}}</h1>
    <h1>{{form[0].age}}</h1>
  </div>
</template>