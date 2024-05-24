<script setup lang="ts">
import { ref, reactive, } from 'vue'
import { loginData } from '@/type/login'
import { useRouter } from "vue-router";
const router = useRouter()
const go = () => {
  router.replace('/about')
}
var dataTest = reactive(new loginData())
const ClickLoginButton = () => {
  if (!dataTest.ruleForm.ueserName) {
    ElMessage.error('请输入账号')
    return
  }
  if (!dataTest.ruleForm.password) {
    ElMessage.error('请输入密码')
    return
  }
  if (dataTest.ruleForm.ueserName === 'admin' && dataTest.ruleForm.password == 123456) {
    go()
  } else {
    ElMessage.error('请输入正确账号或者密码')
  }
}
</script>
<template>
  <div class="outbox">
    <div class="outloginbox">
      <h2>小米健康运动系统</h2>
      <div class="loginbox">
        <h5>账号:</h5> <input type="text" v-model="dataTest.ruleForm.ueserName">
      </div>
      <div class="loginbox">
        <h5>密码:</h5> <input type="password" v-model="dataTest.ruleForm.password">
      </div>
      <div class="loginB" @click="ClickLoginButton" ref="loginref">登录</div>
    </div>
    <nav>
    </nav>
  </div>
</template>
<style scoped>
.outbox {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(../../public/a.jpg) no-repeat;
  background-size: 100% 100%;
}

.outloginbox {
  background-color: #fff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 90px;
}

.loginB {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0 auto;
  background-color: #00de7c;
  color: #fff;
  border-radius: 10px;
  font-size: 18px;
}

.loginbox {
  display: flex;
  width: 100%;
  height: 100px;
  margin: 20px auto;
  align-items: center;
  justify-content: center;
}

.loginbox input {
  outline: none;
  width: 200px;
  height: 50px;
  line-height: 50px;
  border: 1px solid salmon;
  padding-left: 20px;
  border-radius: 50px;
  margin-left: 20px;
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
</style>
