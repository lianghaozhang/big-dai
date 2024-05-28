// src/mock/index.js
import Mock from 'mock'  //导入mockjs
// let Mock = require('mockjs');
console.log(Mock, 'Mock')
// 

//使用Mock下面提供的mock方法进行需要模拟数据的封装
//参数1，是需要拦截的完整请求地址，参数2，是请求方式，参数3，是请求的模拟数据

// Mock.mock('/getData', 'get', {
//     status: 200, //请求成功状态码
//     dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //模拟的请
// })


// // // .js 文件
// let random = Mock.Random; // Mock.Random 是一个工具类，用于生成各种随机数据
// console.log(random,'random')
// let data = [];
// for (let i = 0; i < 8; i++) {
//     let obj = {
//         id: random.string(18, 20),
//         name: random.name(),
//         value: random.integer(60, 100),
//     }
//     data.push(obj)
// }
// Mock.mock('/api/mock/bar', data) // 后面讲这个api的使用细节