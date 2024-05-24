import Mock from 'mockjs' //导入mockjs


const goodsList = Mock.mock(
    {
        "goodsInfo|30": [{
            "id|+1": 1,
            "title|1": ["香蕉", "苹果", "辣条", "草莓", "白菜", "桃子", "榴莲", "果干", "红枣", "石榴", "葡萄", "橘子", "芒果"],
            "label": '@shuffle(["新鲜采摘", "低价特卖", "物美价廉", "季节水果", "皮薄肉厚"], 1,3)',
            "price|1-200": 50,
            "imgpath|1": ['food/1.jpg', 'food/2.jpg', 'food/3.jpg', 'food/4.jpg', 'food/5.jpg', 'food/6.jpg', 'food/7.jpg', 'food/8.jpg', 'food/9.jpg', 'food/10.jpg',],
            "type": 'food',
            "number": 0,
        },
        {
            "id|+1": 31,
            "title|1": ["冰箱", "微型投影仪", "电视机", "收音机", "录音机", "录像机", "摄像机", "组合音响", "剃须刀", "理发器", "电吹风", "跑步机", "血压计", "按摩器"],
            "label": '@shuffle(["智能家电", "超值选购", "超低特卖", "严选认证", "全新款式"], 1,3)',
            "price|1000-9999": 1500,
            "imgpath|1": ['electrical/1.jpg', 'electrical/2.jpg', 'electrical/3.jpg', 'electrical/4.jpg', 'electrical/5.jpg', 'electrical/6.jpg', 'electrical/7.jpg', 'electrical/8.jpg', 'electrical/9.jpg', 'electrical/10.jpg',],
            "type": 'electrical',
            "number": 0,
        },
        {
            "id|+1": 61,
            "title|1": ["华为", "魅族", "oppo", "vivo", "联想", "金立", "格力", "中兴", "8848", "步步高", "海尔", "tcl", "海信", "波导", "康佳", "酷派", "锤子", "神舟", "小米"],
            "label": '@shuffle(["全新骁龙8", "Redmi K50 pro", "iphone 15 promax", "Redmi K400", "全新华为"], 1,3)',
            "price|1000-9999": 1500,
            "imgpath|1": ['phone/1.jpg', 'phone/2.jpg', 'phone/3.jpg', 'phone/4.jpg', 'phone/5.jpg', 'phone/6.jpg', 'phone/7.jpg', 'phone/8.jpg', 'phone/9.jpg', 'phone/10.jpg',],
            "type": 'phone',
            "number": 0,
        },
        {
            "id|+1": 91,
            "title|1": ['《圣经》', '《古兰经》', '《自然哲学的数学原理》', '《物种起源》', '《梦的解析》', '《几何原本》', '《国富论》', '《人口原理》', '《寂静的春天》', '《共产党宣言》', '《论语》', '《孙子兵法》', '《化学原论》', '《电磁通论》', '《新教伦理与资本主义精神》', '《论自由》'],
            "label": '@shuffle(["A哲学","B宗教","C伦理","D逻辑","E美学","F心理","G语言","H文学","I艺术","J政治","K经济","L军事","M法律","N教育","体育","P传媒","Q资讯"], 1,3)',
            "price|10-400": 10,
            "imgpath|1": ['book/1.jpg', 'book/2.jpg', 'book/3.jpg', 'book/4.jpg', 'book/5.jpg', 'book/6.jpg', 'book/7.jpg', 'book/8.jpg', 'book/9.jpg', 'book/10.jpg',],
            "type": 'book',
            "number": 0,
        },
        ]
    }
)
// const goodsList = Mock.mock(temp)
export default {
    'get|/goodsinfo': goodsList
}
//获取商品
Mock.mock('/getgoodsinfo', 'get', req => { //路径与请求方式
    return goodsList
})
//根据商品类型获取商品
Mock.mock('/getgoodsbytype', 'get', req => { //路径与请求方式
    const { type } = JSON.parse(req.body); //将传递进来的数据保存
    let goods = []
    for (let i = 0; i < goodsList.goodsInfo.length; i++) {
        //搜索相关类型商品
        if (type === goodsList.goodsInfo[i].type) {
            goods.push(goodsList.goodsInfo[i])
        }
    }
    if (type === 'total' || type === '') {
        goods = goodsList.goodsInfo
    }
    return goods
})
//根据搜索内容返回商品
Mock.mock('/getgoodsbycontent', 'get', req => { //路径与请求方式
    const { content } = JSON.parse(req.body); //将传递进来的数据保存
    //全局匹配
    let goods = []
    const regex = new RegExp(content, "gi");
    const similarType = goodsList.goodsInfo.filter(item => regex.test(item.type));
    const similarTitle = goodsList.goodsInfo.filter(item => regex.test(item.title));
    const similarLabel = goodsList.goodsInfo.filter(item => regex.test(item.label));
    goods = similarType.concat(similarTitle, similarLabel);
    return goods
})