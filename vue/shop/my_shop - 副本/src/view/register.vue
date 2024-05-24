<!-- 注册页 -->
<template>
    <div class="box">
        <div class="login-wrap" style="background-image: url('/loginBackground.jpg');">
            <el-form class=" login-container">
                <h1 class="title">用户注册：</h1>
                <el-form-item>
                    <el-input type="text" placeholder="用户名" v-model="username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" placeholder="密码" v-model="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" placeholder="确认密码" v-model="checkPwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="register" style="width: 100%;">注册</el-button>
                </el-form-item>
                <el-row class="foot">
                    <router-link to="/login">返回登录</router-link>
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
            checkPwd: '',
        }
    },
    methods: {
        async register() {
            if (this.username != '' && this.password != '' && this.checkPwd != '') {
                if (this.password === this.checkPwd) {
                    await this.$axios({
                        method: 'post',
                        url: '/register',
                        responseType: 'json',
                        data: { username: this.username, password: this.password },
                    })
                        .then(response => {
                            if (response.data.code == 0) {
                                alert(response.data.message)
                                this.$router.push('/login')
                            } else {
                                alert(response.data.message)
                            }
                        });
                } else {
                    alert("密码不一致")
                }
            } else {
                alert("信息未填写完整")
            }

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
    width: 100%;
    height: 100%;
    display: flex;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 100%;
}

.foot {
    text-align: center;
    margin-top: -10px;
}

.login-container {
    border-radius: 10px;
    margin: 50px auto;
    width: 350px;
    padding: 30px 35px 15px 35px;
    border: 1px solid #eaeaea;
    text-align: left;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
</style>