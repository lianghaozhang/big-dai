<!-- 首页-->
<template>
    <div class="myMain">
        <nav class="nav">
            <div class="dropdown">
                <div class="dt">商品分类</div>
                <!-- 遍历生成类目录 -->
                <div class="dd">
                    <ul>
                        <li v-for="item in shoptype" :key="item.id"
                            @click="$router.push({ path: '/goods', query: { type: item.type } })">
                            <a class="title">
                                {{ item.name }}--------------------👈
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navitems">
                <ul>
                    <li><a href="#">潮流服装</a></li>
                    <li><a href="#">京西秒杀</a></li>
                    <li><a href="#">进口好物</a></li>
                    <li><a href="#">京西超市</a></li>
                    <li><a href="#">京西生鲜</a></li>
                    <li><a href="#">便宜包邮</a></li>
                    <li><a href="#">智能家电</a></li>
                </ul>
            </div>
        </nav>
        <!-- 轮播图 -->
        <div class="lunbotu">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img :src="require('@/assets/shopimg/' + item + '.jpg')" alt="#" style="width: 100%;height: 100%;">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 食品展示区 -->
        <div class="showShop">
            <h1>==============食品推荐==============</h1>
            <shop-list :list="foodlist"></shop-list>
        </div>
        <!-- 家电展示区 -->
        <div class="showShop">
            <h1>==============家电推荐==============</h1>
            <shop-list :list="electricallist"></shop-list>
        </div>
        <!-- 家电展示区 -->
        <div class="showShop">
            <h1>==============手机推荐==============</h1>
            <shop-list :list="phonelist"></shop-list>
        </div>
    </div>
</template>
<script>
import ShopList from '@/components/shopList.vue'
export default {
    data() {
        return {
            goodslist: [],//商品列表
            foodlist: [],//食品列表
            electricallist: [],//家电列表
            phonelist: [],//手机列表
            shoptype: [],//商品种类列表
        }
    },
    methods: {
        //初始化各种类型商品列表数据
        async getGoodsList() {
            await this.$axios({
                method: 'get',
                url: '/getgoodsinfo',
                responseType: 'json'
            }).then(response => {
                this.goodslist = response.data.goodsInfo;
                this.goodslist.forEach(i => {
                    if (i.type === 'food') {
                        this.foodlist.push(i)
                    }
                    //初始化家电列表
                    else if (i.type === 'electrical') {
                        this.electricallist.push(i)
                    } else if (i.type === 'phone') {
                        this.phonelist.push(i)
                    }
                })
            });
        },
        //获取商品种类列表
        async getShopType() {
            await this.$axios({
                method: 'get',
                url: '/getshoptype',
                responseType: 'json'
            }).then(res => {
                this.shoptype = res.data.shoptype
            })
        },
    },
    beforeDestroy() {
        // 清空list
        this.foodlist = [],//食品列表
            this.electricallist = [],//家电列表
            this.phonelist = []//手机列表
    },
    created() {
        this.getGoodsList();
        this.getShopType();
    },
    components: {
        ShopList
    },
}
</script>
<style lang="less" scoped>
.myMain {
    width: 1100px;
    margin: auto;
}

.nav {
    height: 47px;
    border-bottom: 2px solid #b1191a;
}

.showShop {
    height: 690px;
    overflow: hidden;
}

.showShop h1 {
    color: #b1191a;
}

.nav .dropdown {
    float: left;
    width: 210px;
    height: 45px;
    background-color: #b1191a;
}

.dropdown .dt {
    color: #fff;
    text-align: center;
    line-height: 45px;
    font-size: 16px;
}

.dropdown .dd {
    background-color: #c81623;
    margin-top: 2px;
}

.dropdown .dd ul li {
    height: 31px;
    line-height: 31px;
    margin-left: 2px;
    padding-left: 10px;
    cursor: pointer;
}

.dropdown .dd ul li:hover {
    background-color: #fff;
}

.dropdown .dd ul li a {
    font-size: 14px;
    color: #fff;
}

.dropdown .dd ul li:hover a {
    color: #c81623;
}

.navitems ul li {
    float: left;
}

.navitems ul li a {
    display: block;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    padding: 0 25px;
}

.lunbotu {
    margin-left: 230px;
    width: 798px;
}

.el-carousel__item:nth-child(2n) {
    width: 798px;
}

.el-carousel__item:nth-child(2n+1) {
    width: 798px;
}

#goodbody {
    box-sizing: border-box;
    width: 200px;
    height: 250px;
    float: left;
    text-align: center;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid red;
    font-size: 10px;
}


.price {
    color: orange;
}

img {
    margin-top: 30px;
    width: 100px;
}

#label {
    color: gray;
    margin: 20px auto;
    width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

h1 {
    text-align: center;
}
</style>