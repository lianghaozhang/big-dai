<!-- 商品展示小图组件 -->
<template>
    <div id="myList" class="myList">
        <div class="goodsbody" v-for="item in list" :key="item.id">
            <router-link :to="{ path: '/goods/details', query: { productID: item.id } }">
                <img :src="require('@/assets/' + item.imgpath)" alt />
                <h2>{{ item.title }}</h2>
                <h3>{{ item.label }}</h3>
                <p>
                    <span class="price">￥{{ item.price }}元</span>
                </p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ["list"],
}
</script>
<style lang="less" scoped> .myList {
     width: 1100px;
 }

 .price {

     font-size: 18px;
     color: orange;
 }

 .goodsbody {
     box-sizing: border-box;
     width: 200px;
     height: 310px;
     float: left;
     text-align: center;
     margin-right: 20px;
     font-size: 10px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
 }

 .goodsbody:hover {
     background-color: #f5f5f5;
 }

 .goodsbody {
     margin-bottom: 20px;
 }


 img {
     margin-top: 30px;
     width: 160px;
 }

 h3 {
     color: gray;
     margin: 20px auto;
     width: 170px;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
 }
</style>