<!-- 顶部组件 -->
<template>
  <div style="background-color: #68020f;font-size: 14px;">
    <div style="width: 1100px;margin:auto;">
      <div style="height: 40px;display: flex;">
        <div style="display: flex;flex: 1;">
          <div class="active" @click="$router.push('/home')">首页</div>
          <div class="active">客服</div>
          <div class="active">下载app</div>
          <div class="active">关于</div>
        </div>
        <div v-if="token === null || token === ''" class="logbox">
          <div class="active" @click="$router.push('/login')">登录</div>
          <div class="active" @click="$router.push('/register')">注册</div>
        </div>
        <div v-else class="logbox">
          <div class="active">欢迎用户{{ token }}</div>
          <div class="active" @click="loginback">登出</div>
        </div>
        <div class="shop-car" @click="$router.push('/ShopCar')">我的购物车</div>
        <div class="shop-orders" @click="$router.push('/orders')">我的订单</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //退出账号清空token
    loginback() {
      this.$bus.token = ''
      this.$router.push('/home')
    }
  },
  computed: {
    //监听$bus.token，使token得到值
    token() {
      return this.$bus.token
    }
  }
}
</script>
<style lang="less">
.active {
  line-height: 40px;
  color: #cfcfcf;
  margin-right: 20px;
  font-size: 12px;
}

.active:hover {
  cursor: pointer;
  color: #FFFFFF;
}

.shop-car,
.shop-orders {
  text-align: center;
  cursor: pointer;
  width: 70px;
  line-height: 40px;
  height: 40px;
  display: inline-block;
  color: #FFFFFF;
}

.shop-orders {
  margin-left: 10px;
}

.shop-car:hover,
.shop-orders:hover {
  background-color: #8f8f8f;
}

.logbox {
  text-align: right;
  display: flex;
  position: relative;
  right: 0;
}
</style>