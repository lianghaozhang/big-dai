<template>
	<div style="margin-left: 600px; padding-top: 120px;">
	<img alt="Vue logo" src="../assets/logo.png" />
	<br>
	<br>
	用户名：<el-input v-model="username" placeholder="请输入用户名" clearable style="width: 200px;" /><br><br>
	密码：<el-input type="password" v-model="password" placeholder="请输入密码" clearable style="width: 200px;" /><br><br>
	<div style="margin-left: 100px;">
		<el-button type="primary" plain @click="btnclick()">登录</el-button>
	</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			btnclick() {
				axios.post("/api/sysUser/login", {
						username: this.username,
						password: this.password
					})
					.then(res => {
						console.log(res)
						if (res.data.msg === 'success') {
							console.log(res.data.data.token)
							localStorage.setItem('token', res.data.data.token)
							this.$message({
									message: '登录成功',
									group: true,
									type: 'success'
								}),

								this.$router.replace({
									path: '/'
								})
						} else if (res.data.msg === '用户不存在') {
							this.$message({
								message: '用户不存在 登录失败',
								group: true,
								type: 'error'
							})
						}
					})
					.catch();
			}
		}
	}
</script>


<style>
	/* #app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		height:auto;
	} */

	:root {
		background: white;
	}

	.input {
		display: table-cell;
		width: 400px;
		height: 60px;
		border-radius: 20px;
		border: none;
		font-size: 2rem;
		text-align: center;
	}
</style>