<!-- 购物车页面 -->
<template>
    <div class="shoppingcar">
        <table>
            <!-- 表头 -->
            <tr v-if="shopcarList.length !== 0">
                <td></td>
                <td style="width:180px;">商品名称</td>
                <td style="width:180px;">单价</td>
                <td style="width:180px;">数量</td>
                <td style="width:180px;">小计</td>
                <td style="width:180px;">操作</td>
            </tr>
            <!-- 购物车商品信息 -->
            <tr class="shopinfo" v-for="item in shopcarList" :key="item.id">
                <td>
                    <div class="imgbox">
                        <router-link :to="{ path: '/goods/details', query: { productID: item.id } }">
                            <img :src="require('@/assets/' + item.imgpath)" alt="#">
                        </router-link>
                    </div>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.price }}元</td>
                <td>
                    <el-button size="mini" round @click="shopNumberReduce(item.id)">-</el-button>
                    <span>{{ item.number }}</span>
                    <el-button size="mini" round @click="shopNumberAdd(item.id)">+</el-button>
                </td>
                <td>{{ item.price * item.number }}元</td>
                <td>
                    <el-button type="primary" @click="deletShopCar(item.id)">取消购买</el-button>
                </td>
            </tr>
        </table>
        <!-- 底端结算容器 -->
        <!-- 购物车底部导航条 -->
        <div class="CarFloot" v-if="shopcarList.length !== 0">
            <div class="totalprice">
                <h1>合计：{{ totalPrice }}元</h1>
            </div>
            <el-button class="pay" type="primary" @click="payTotalPrice">去支付</el-button>
        </div>
        <!-- 购物车为空 -->
        <div v-if="shopcarList.length == 0" class="enptyCar" style="background-image: url('/enptyshopcar.jpg');">
        </div>

    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            // shopcarList:[]
        }
    },
    methods: {
        ...mapActions('shopcar', { deletShopCar: 'removeshopcar', updataShopList: 'updatashopcar' }),
        //商品数量增加
        shopNumberAdd(id) {
            for (let i = 0; i < this.shopcarList.length; i++) {
                if (this.shopcarList[i].id == id) {
                    this.shopcarList[i].number++
                }
            }
        },
        //商品数量减少
        shopNumberReduce(id) {
            for (let i = 0; i < this.shopcarList.length; i++) {
                if (this.shopcarList[i].id == id && this.shopcarList[i].number > 1) {
                    this.shopcarList[i].number--
                }
            }
        },
        //更新订单
        async updataOrders() {
            const date = new Date();
            var min = 10000000;
            var max = 99999999;
            var orderId = Math.floor(Math.random() * (max - min) + min);
            await this.$axios({
                method: 'post',
                url: '/updataorders',
                data: {
                    order_number: orderId,
                    order_time: date,
                    total_price: this.totalPrice,
                    token: this.$bus.token,
                    shopcarList: this.shopcarList,
                },
                responseType: 'json'
            })
        },
        //支付费用
        payTotalPrice() {
            if (confirm("确定要支付吗？")) {
                // 用户点击了确认按钮
                this.updataOrders()
                this.updataShopList()
                alert('支付成功')
            } else {
                // 用户点击了取消按钮
                alert('取消支付成功')
            }

        }
    },
    computed: {
        ...mapState('shopcar', ['shopcarList']),
        //计算总价
        totalPrice() {
            let total = 0
            this.shopcarList.forEach(i => {
                total = total + i.price * i.number
            })
            return total
        }
    }
}
</script>
<style less="lang" scoped> .shoppingcar {
     width: 1100px;
     margin: auto;
 }

 .shopinfo {
     width: 1100px;
     height: 100px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
 }

 .enptyCar {
     width: 1100px;
     height: 500px;
     background-repeat: no-repeat;
     background-size: 1100px;
 }

 td {
     text-align: center;
     font-size: 16px;
 }

 td img {
     padding: 5px
 }

 .imgbox img {
     width: 200px;
     height: 150px;
     margin: 0;
 }

 .CarFloot {
     width: 1100px;
     height: 50px;
     background-color: #f5f5f5;
     margin-top: 10px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
 }

 .totalprice {
     display: inline-block;
     margin-top: 5px;
     margin-left: 50%;
 }

 .pay {
     margin-top: 5px;
     float: right;
     margin-right: 10px;
 }

 /* 购物车底部导航条CSS */
</style>