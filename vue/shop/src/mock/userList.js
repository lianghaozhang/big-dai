import Mock from 'mockjs' //导入mockjs

const userList = {  //定义用户数据
    userinfo: [{
        id: 1,
        username: '1',
        password: '1',
    }, {
        id: 2,
        username: 'editor',
        password: '123456',

    }, {
        id: 3,
        username: 'admin',
        password: '123456',
    },]
};

//定义请求方法与路径
export default {
    'get|/user': userList,
}
/*
// 模拟登录功能
*/
Mock.mock('/login', 'post', req => { //路径与请求方式
    const { username, password } = JSON.parse(req.body); //将传递进来的数据保存
    for (let i = 0; i < userList.userinfo.length; i++) {
        //判断userList中是否存在该用户并且用户密码是否正确
        if (username === userList.userinfo[i].username && password === userList.userinfo[i].password) {
            return {
                code: 0,
                message: '登录成功',
                id: userList.userinfo[i].id
            }
        }
    }
    return {
        code: -1,
        message: '登录失败'
    }
})
/*
// 模拟注册功能
*/
Mock.mock('/register', 'post', req => { //路径与请求方式
    const { username, password } = JSON.parse(req.body); //将传递进来的数据保存
    const userinfos = JSON.parse(req.body);
    for (var i in userList.userinfo) {
        if (userList.userinfo[i].username == username) {//在数组里找到这个id
            return {
                code: -1,
                message: '用户名已存在'
            }
        }
    }
    userList.userinfo.push(userinfos)
    return {
        code: 0,
        message: '注册成功'
    }
})
