<!-- 订单页 -->
<template>
    <div class="orders">
        <!-- 订单主体内容 -->
        <el-card class="box-card box" v-for="item in ordersList" :key="item.order_number">
            <div slot="header" class="clearfix">
                <span class="order_number">订单编号:{{ item.order_number }}</span>
                <span class="order_time">订单日期:{{ item.order_time }}</span>
            </div>
            <el-table :data="item.shopcarList" style="width: 100%">
                <el-table-column prop="title" label="商品名" width="150">
                </el-table-column>
                <el-table-column prop="label" label="描述" width="150">
                </el-table-column>
                <el-table-column prop="price" label="单价" width="150">
                </el-table-column>
                <el-table-column prop="number" label="数量" width="150">
                </el-table-column>
                <el-table-column label="小计" width="150">
                    <template slot-scope="scope">
                        {{ scope.row.price * scope.row.number }}
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-link @click="onrefund(item.order_number, scope.row.id, scope.row.status)">去退款</el-link>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" width="150">
                </el-table-column>
            </el-table>
            <h2>总计：￥{{ item.total_price }}元</h2>
        </el-card>
        <!-- 当订单不存在 -->
        <!-- 订单为空的时候显示的内容 -->
        <div v-if="ordersList.length == 0" class="order_empty">
            <div class="empty">
                <h1>您的订单还是空的！</h1>
                <h1>快去购物吧！</h1>
            </div>
        </div>
        <!-- 订单为空的时候显示的内容END -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            ordersList: []
        }
    },
    methods: {
        //获取订单
        async getOrderList() {
            await this.$axios({
                methods: 'get',
                url: '/getorderslist',
                responseType: 'json',
                data: { token: this.$bus.token }
            }).then(res => {
                this.ordersList = res.data
            })
        },
        //订单退款
        async refund(order_number, id) {
            await this.$axios({
                methods: 'get',
                url: '/setrefund',
                responseType: 'json',
                data: { order_number: order_number, id: id }
            }).then(res => {
                this.getOrderList()
            })
        },
        //订单退款确认
        onrefund(order_number, id, status) {
            if (status === '已支付') {
                if (confirm("确定要退款吗？")) {
                    // 用户点击了确认按钮
                    this.refund(order_number, id)
                    alert('退款成功')
                }
            }
        }
    },
    created() {
        //初始化订单
        this.getOrderList();
    }
}
</script>
<style lang="less" scoped>
.box {
    margin-top: 10px;
}

.orders {
    width: 1100px;
    margin: auto;
}

.order_time {
    float: right;
}

.order_empty {
    width: 1100px;
    margin: 200px 0;
}

.empty {
    margin: auto;
    width: 300px;
}
</style>