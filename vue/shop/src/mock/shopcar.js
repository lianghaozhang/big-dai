import Mock from 'mockjs' //导入mockjs


const shopcar = Mock.mock(
    {
        shopcarList: []
    }
)
// const goodsList = Mock.mock(temp)
export default {
    'get|/shopcarList': shopcar
}
//获取购物车.
Mock.mock('/getshopcar', 'get', req => { //路径与请求方式
    const { token } = JSON.parse(req.body);
    let shopcarList = []
    for (let i = 0; i < shopcar.shopcarList.length; i++) {
        if (shopcar.shopcarList[i].token == token)
            shopcarList.push(shopcar.shopcarList[i])
    }
    return shopcarList
})
//移除购物车.
Mock.mock('/removeshopcar', 'post', req => { //路径与请求方式
    const { id, token } = JSON.parse(req.body); //将传递进来的数据保存
    for (let i = 0; i < shopcar.shopcarList.length; i++) {
        const temp = shopcar.shopcarList[i];
        if (temp.id == id && temp.token == token) {
            shopcar.shopcarList.splice(i, 1);
        }
    }
})
//加入购物车.
Mock.mock('/addshopcar', 'post', req => { //路径与请求方式
    const { obj, token } = JSON.parse(req.body); //将传递进来的数据保存
    for (var i in shopcar.shopcarList) {
        if (shopcar.shopcarList[i].id == obj.id && shopcar.shopcarList[i].token == token) {//在数组里找到这个id
            shopcar.shopcarList[i].number++
            return
        }
    }
    obj.number = 1
    obj.token = token
    shopcar.shopcarList.push(obj)
})
//更新购物车.
Mock.mock('/updatashopcar', 'post', req => { //路径与请求方式
    const { shopcarList, token } = JSON.parse(req.body); //将传递进来的数据保存
    for (var i in shopcarList) {
        for (var j in shopcar.shopcarList) {
            if (shopcar.shopcarList[j].id == shopcarList[i].id && shopcar.shopcarList[j].token == token) {
                shopcar.shopcarList.splice(j, 1);
            }
        }
    }
})