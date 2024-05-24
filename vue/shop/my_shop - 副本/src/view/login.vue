<!-- 登录页 -->
<template>
    <div class="box">
        <div class="login-wrap" style="background-image: url('/loginBackground.jpg');">
            <el-form class="login-container">
                <h1 class="title">用户登录：</h1>
                <el-form-item>
                    <el-input type="text" placeholder="用户账号" v-model="username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" placeholder="用户密码" v-model="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login" style="width: 100%;">登录</el-button>
                </el-form-item>
                <el-row class="foot">
                    <router-link to="/register">没有账号？去注册</router-link>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            show: true
        }
    },
    methods: {
        async login() {
            await this.$axios({
                method: 'post',
                url: '/login',
                data: { username: this.username, password: this.password },
                responseType: 'json',
            })
                .then(response => {
                    if (response.data.code == 0) {
                        sessionStorage.setItem('token', this.username)
                        this.$bus.token = this.username
                        alert(response.data.message)
                        this.$router.push({ path: '/home', query: { UID: response.data.id } })
                    } else {
                        alert(response.data.message)
                    }
                });
        }
    },
    computed: {

    }
}

</script>
<style lang="less" scoped>
.box {
    height: 550px;
    width: 1100px;
    margin: auto;
}

.login-wrap {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    /* background-color: #112346; */
    background-repeat: no-repeat;
    background-size: 100%;
}

.login-container {
    border-radius: 10px;
    margin: auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    border: 1px solid #eaeaea;
    text-align: left;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.foot {
    text-align: center;
    margin-top: -10px;
}



.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
</style>