import Mock from 'mockjs' //导入mockjs

const Orders = Mock.mock(
    {
        ordersList: []
    }
)
// const goodsList = Mock.mock(temp)
export default {
    'get|/ordersList': Orders
}
//获取订单
Mock.mock('/getorderslist', 'get', req => { //路径与请求方式
    const { token } = JSON.parse(req.body);
    let ordersList = []
    for (let i = 0; i < Orders.ordersList.length; i++) {
        if (Orders.ordersList[i].token == token) {
            ordersList.push(Orders.ordersList[i])
        }
    }
    return ordersList
})
//更新订单
Mock.mock('/updataorders', 'post', req => { //路径与请求方式
    const obj = JSON.parse(req.body); //将传递进来的数据保存
    for (let i = 0; i < obj.shopcarList.length; i++) {
        obj.shopcarList[i].status = '已支付'
    }
    Orders.ordersList.push(obj)
})
//退款
Mock.mock('/setrefund', 'get', req => { //路径与请求方式
    const { order_number, id } = JSON.parse(req.body); //将传递进来的数据保存
    for (let i = 0; i < Orders.ordersList.length; i++) {
        if (Orders.ordersList[i].order_number == order_number) {
            for (let j = 0; j < Orders.ordersList[i].shopcarList.length; j++) {
                if (Orders.ordersList[i].shopcarList[j].id == id) {
                    Orders.ordersList[i].shopcarList[j].status = '已退款'
                }
            }
        }
    }
})
