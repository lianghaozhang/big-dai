<!-- 商品类目录页 -->
<template>
    <div class="goods" id="goods" name="goods">
        <!-- 分类标签 -->
        <div class="nav">
            <div class="product-nav">
                <div class="title title1">分类</div>
                <a class="title" v-for="item in shoptype" :key="item.id"
                    @click="$router.push({ path: '/goods', query: { type: item.type } })">
                    {{ item.name }}
                </a>
            </div>
        </div>
        <!-- 分类标签END -->
        <!-- 主要内容区 -->
        <div class="main">
            <div class="list">
                <shop-list :list="goodslist" v-if="goodslist.length > 0"></shop-list>
                <div v-else class="none-product">抱歉没有找到相关的商品，请看看其他的商品</div>
            </div>
            <!-- 分页 -->
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :page-size="pagesize" :total="total"
                    :current-page="currentpage" @current-change="handleCurrentChange"></el-pagination>
            </div>
        </div>
        <!-- 主要内容区END -->
    </div>
</template>
<script>
import ShopList from '@/components/shopList.vue'
export default {
    data() {
        return {
            shoptype: [],//商品种类列表
            goodslist: [],//对于商品类型商品列表
            type: '',//商品类型
            total: 0,//总数据条数
            currentpage: 1,
            pagesize: 10,
            totalList: []
        }
    },
    methods: {
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
        //根据商品种类获取商品列表
        async getGoodsListByType() {
            await this.$axios({
                method: 'get',
                url: '/getgoodsbytype',
                data: { type: this.$route.query.type },
                responseType: 'json'
            }).then(res => {
                // this.goodslist = res.data;
                this.totalList = res.data;
                this.getPageInfo()
            });
        },
        //根据相关内容获取商品列表
        async getGoodsListByContent() {
            await this.$axios({
                method: 'get',
                url: '/getgoodsbycontent',
                data: { content: this.$route.query.content },
                responseType: 'json'
            }).then(res => {
                // this.goodslist = res.data;
                this.totalList = res.data;
                this.getPageInfo()
            })
        },
        // 获取当前页的数据信息
        getPageInfo() {
            //获取返回记录的总数
            this.total = this.totalList.length
            // 获取当前页的数据
            this.goodslist = this.totalList.slice((this.currentpage - 1) * this.pagesize, this.currentpage * this.pagesize)
        },
        //当页码改变时重新加载对应数据
        handleCurrentChange(val) {
            this.currentpage = val
            if (this.$route.query.content) {
                this.getGoodsListByContent()
            } else {
                this.getGoodsListByType();
            }
        },
    },
    created() {
        this.getShopType();
        this.getGoodsListByType();
    },
    watch: {
        //监听路由,当路由改变根据搜索内容获取商品
        $route: function (val) {
            this.currentpage = 1
            if (this.$route.query.content) {
                this.getGoodsListByContent()
            } else {
                this.getGoodsListByType();
            }
        }
    },
    components: {
        ShopList
    }
}

</script>
<style lang="less" scoped>
.goods {
    width: 1100px;
    margin: auto;
}

/* 分类标签CSS */
.goods .nav {
    background-color: white;
}

.goods .nav .product-nav {
    width: 1100px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;

}

.nav .product-nav .title {
    width: 50px;
    font-size: 20px;
    font-weight: 700;
    float: left;
}

.title1 {
    margin-right: 10px;
    color: black;
}

a {
    cursor: pointer;
}

.product-nav a {
    margin-right: 20px;
}

/* 分类标签CSS END */

/* 主要内容区CSS */
.goods .main {
    margin: 0 auto;
    max-width: 1100px;
}

.goods .main .list {
    overflow: auto;
}

.goods .main .pagination {
    height: 50px;
    text-align: center;
}

.goods .main .none-product {
    color: #333;
    margin-left: 13.7px;
}
</style>