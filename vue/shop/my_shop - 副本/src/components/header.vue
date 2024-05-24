<!-- 头部搜索区域 -->
<template>
    <div class="headers">
        <router-link to="/home"><img src="@/assets/img/logo.png" alt="logo" style="width: 200px;"></router-link>
        <div class="box">
            <div class="search">
                <input type="search" placeholder="语言开发" v-model="content">
                <button @click="search">搜索</button>
            </div>
            <!-- hotwords模块制作 -->
            <div class="hotwords">
                <a href="#" class="style_red">优惠购首发</a>
                <a href="#">亿元优惠</a>
                <a href="#">9.9元团购</a>
                <a href="#">美满99减30</a>
                <a href="#">办公用品</a>
                <a href="#">电脑</a>
                <a href="#">通信</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: ''
        }
    },
    methods: {
        //通过商品类型搜索商品
        search() {
            //防止重复跳转
            if (this.$route.query.content != this.content && this.content != '') {
                this.$router.push({ path: '/goods', query: { content: this.content } })
                this.content = ''
            }
        }
    }
}
</script>
<style lang="less" scoped>
.headers {
    width: 1100px;
    margin: auto;
    position: relative;
}

.box {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 300px;
}

.search {
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;
}

.search input {
    float: left;
    width: 454px;
    height: 33px;
    padding-left: 5px;
    margin: auto;
    border: none;
}

.search button {
    float: right;
    width: 80px;
    height: 33px;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
    border: none;
}

.hotwords a {
    margin: 0 10px;
}
</style>