import Mock from 'mockjs' //导入mockjs

const shoptypeList = {  //定义用户数据
    shoptype: [{
        id: 1,
        type: 'total',
        name: '全部'
    },
    {
        id: 2,
        type: 'food',
        name: '食品'
    },
    {
        id: 3,
        type: 'electrical',
        name: '家电'
    },
    {
        id: 4,
        type: 'phone',
        name: '手机'
    },
    {
        id: 5,
        type: 'book',
        name: '书籍'
    }, {
        id: 6,
        type: 'clothes',
        name: '衣服'
    }, {
        id: 7,
        type: 'shope',
        name: '鞋子'
    },
    {
        id: 8,
        type: 'medicine',
        name: '医药'
    }, {
        id: 9,
        type: 'vehicle',
        name: '车品'
    },
    {
        id: 10,
        type: 'made-up',
        name: '美妆'
    }
    ]
};

//定义请求方法与路径
export default {
    'get|/shoptype': shoptypeList,
}
Mock.mock('/getshoptype', 'get', res => { //路径与请求方式
    return shoptypeList
})
