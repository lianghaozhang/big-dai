<template>
	<div class="common-layout">
		<el-container>
			<el-header class="headerStyle" style="background:palegoldenrod;color:white;font-size: 80px; margin:0;">
				<div style="margin-left: 500px;">
					添加用户
				</div>
			</el-header>
			<el-main style="background: lightyellow;">
				<div class="wai">
					<div style="height: 450px; width: 350px;" class="nei">
						<div class="form-item-outter">
							<div style="width: 6rem;">用户名</div>
							<el-input v-model="username" placeholder="(必填) 请输入用户名" clearable box-sizing: border-box />
						</div>
						<div class="form-item-outter">
							<div style="width: 6rem;">密码</div>
							<el-input v-model="password" placeholder="(必填) 请输入密码" clearable />
						</div>
						<div class="form-item-outter">
							<div style="width: 6rem;">姓名</div>
							<el-input v-model="realName" placeholder="(必填) 请输入姓名" clearable />
						</div>
						<div class="form-item-outter">
							<div style="width: 6rem;">性别</div>
							<el-input v-model="gender" placeholder="(必填) 请输入性别 (0:男 1:女 2:保密)" clearable />
						</div>
						<div class="form-item-outter">
							<div style="width: 6rem;">电子邮箱</div>
							<el-input v-model="email" placeholder="(必填) 请输入电子邮箱" clearable />
						</div>
						<div class="form-item-outter">
							<div style="width: 6rem;">手机号码</div>
							<el-input v-model="mobile" placeholder="(必填) 请输入手机号码" clearable />
						</div>
						<div class="form-item-outter">
							<div style="width: 6rem;">状态</div>
							<el-input v-model="status" placeholder="(必填) 请输入状态 (0:停用 1:正常)" clearable />
						</div>
						<div class="form-item-submit">
							<el-button type="primary" @click="add">确认添加</el-button>
						</div>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				username: '',
				password: '',
				realName: '',
				gender: '',
				email: '',
				mobile: '',
				status: '',
			}
		},
		methods: {
			add() {
				axios.post("/save", {
						username: this.username,
						password: this.password,
						realName: this.realName,
						gender: this.gender,
						email: this.email,
						mobile: this.mobile,
						status: this.status,
					})
					.then(res => {
						console.log(res)
						if (res.data.msg === "success") {
							this.$message({
								message: '用户添加成功',
								group: true,
								type: 'success'
							})
							this.$router.replace({
								path: '/menu'
							})
						}else if(res.data.code === 50003){
							this.$message({
								message: '用户添加失败',
								group: true,
								type: 'error'
							})
						}
					})
			},
		}
	}
</script>

<style>
	.headerStyle {
		margin: 20px 0px;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.wai {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.nei {
		margin-top: 100px;
	}

	.form-item-outter {
		margin-top: 5px;
		display: flex;
	}

	.form-item-submit {
		display: flex;
		margin-top: 30px;
		justify-content: center;
		align-items: center;
	}
</style>