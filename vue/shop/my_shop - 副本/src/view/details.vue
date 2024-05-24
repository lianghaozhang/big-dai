<!-- 商品详情页 -->
<template>
  <div id="details">
    <!-- 头部 -->
    <div class="page-header">
      <div class="title">
        <h2>{{ productDetails.title }}</h2>
        <div class="list">
          <ul>
            <li>
              <router-link to>概述</router-link>
            </li>
            <li>
              <router-link to>参数</router-link>
            </li>
            <li>
              <router-link to>用户评价</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="imgShow" style="float: left;">
      <img :src="require('@/assets/' + productDetails.imgpath)" alt />
    </div>
    <!-- 商品信息展示区 -->
    <div class="productInfo">
      <div class="a2">
        <h2>{{ productDetails.title }}</h2>
        <div class="a21">
          <div class="a211">
            <span class="color">售价</span>
            <span class="prices">￥{{ productDetails.price }}</span>
            <span class="yis">已售6264件</span>
          </div>
          <div class="a22">
            <span class="color">备注</span>
            <span class="neir">品牌:悦轩饼家</span>
          </div>
          <div class="a23">
            <p></p>
            <span class="color">配送说明</span>
            <p>北京、上海、广州、深圳、天津、重庆、南京、长沙</p>
            <span class="color">配送至</span>
            <p>莆田</p>
            <span class="color">说明</span>
            <p>新疆暂不配送</p>
          </div>
          <div class="a25">
            <a href="#"><button class="a25color1" @click="addShopCar(productDetails)">加入购物车</button></a>
            <a href="#"><button class="a25color2">加入收藏</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      productID: "", // 商品id
      productDetails: {}, // 商品详细信息
    };
  },
  watch: {
    // 监听商品id的变化，请求后端获取商品数据
    productID: function (val) {
      this.getDetails(val);
    }
  },
  methods: {
    ...mapActions('shopcar', { addshopcar: 'addshopcar' }),
    //获取对应id商品信息
    async getDetails(val) {
      await this.$axios
        .get("/getgoodsinfo")
        .then(res => {
          for (let i in res.data.goodsInfo) {
            if (res.data.goodsInfo[i].id == val) {
              this.productDetails = res.data.goodsInfo[i];
            }
          }
        })
    },
    //加入购物车
    addShopCar(obj) {
      if (this.$bus.token) {
        this.addshopcar(obj)
        alert("添加成功")
      } else {
        alert("请先登录")
      }
    }
  },
  // 通过路由获取商品id
  created() {
    if (this.$route.query.productID != undefined) {
      this.productID = this.$route.query.productID;
    }
  },

}
</script>
<style lang="less" scoped>
#details {
  width: 1100px;
  margin: auto;
}

/* 头部CSS */
#details .page-header {
  height: 64px;
  z-index: 4;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  width: 1100px;
  margin: auto;
}

#details .page-header .title {
  width: 1100px;
  height: 64px;
  line-height: 64px;
  font-size: 18px;
  font-weight: 400;
  color: #212121;
  margin: 0 auto;
}

.title h2 {
  display: inline-block;
}

#details .page-header .title p {
  float: left;
}

#details .page-header .title .list {
  height: 64px;
  float: right;
}

#details .page-header .title .list li {
  float: left;
  margin-left: 20px;
}

#details .page-header .title .list li a {
  font-size: 14px;
  color: #616161;
}

#details .page-header .title .list li a:hover {
  font-size: 14px;
  color: #ff6700;
}

.imgShow {
  margin: 40px 0;
  display: inline-block;
}

.imgShow img {
  width: 330px;
  margin-left: 60px;
}

/* 头部CSS END */
.productInfo {
  display: inline-block;
  margin-top: 40px;
  margin-left: 140px;
}

.a2 {
  float: left;
}

.a21 .color {
  color: #758188;
}

.a21 .a211 {
  background-color: #F2F5F8;
  color: #758188;
}

.a21 .a211 .prices,
.shic {
  margin-left: 40px;
}

.a21 .a211 .prices {
  color: #FF4F0D;
  font-size: 35px;
  font-weight: bold;
}

.a21 .a211 .prices2 {
  text-decoration: line-through;
}

.a21 .a211 .yis {
  margin-left: 230px;
}

.a22 {
  background-color: #F6F9FB;
}

.a22 span,
p {
  margin-top: 10px;
}

.a22 .neir {
  margin-left: 50px;
}

.a23 {
  margin-top: 10px;
}

.a25 {
  margin-top: 30px;
}

.a25 button {
  display: inline-block;
  width: 200px;
  height: 60px;
  border-radius: 30px;
  margin-left: 30px;
}

.a25 .a25color1 {
  background-color: #FFEEE8;
  color: #FF4F0D;
  font-size: 20px;
  font-weight: bolder;
  border: 1px #FF4F0D solid;
}

.a25 .a25color2 {
  background-color: #FF4F0D;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  border: 1px #FF4F0D solid;
}
</style>