<template>
	<el-dialog v-model="centerDialogVisible" title="修改用户信息" width="30%" center>
		<div style="margin-top: 20px;">
			<el-form ref="ruleFormRef" :model="userInfo" label-width="120px" class="demo-ruleForm" :size="formSize"
				status-icon>
				<el-form-item label="用户ID" prop="id" style="width: 350px;">
					<el-input disabled v-model="userInfo.id" />
				</el-form-item>
				<el-form-item label="用户名" prop="username" style="width: 350px;">
					<el-input v-model="userInfo.username" placeholder="请输入用户ID" />
				</el-form-item>
				<el-form-item label="姓名" prop="realName" style="width: 350px;">
					<el-input v-model="userInfo.realName" placeholder="请输入姓名" />
				</el-form-item>
				<el-form-item label="状态" prop="status" style="width: 350px;">
					<el-input v-model="userInfo.status" placeholder="请输入状态 (0:停用 1:正常)" />
				</el-form-item>
				<el-form-item label="创建时间" prop="createDate" style="width: 350px;">
					<el-input v-model="userInfo.createDate" placeholder="请输入电子邮箱" />
				</el-form-item>
				<el-form-item label="更新时间" prop="updateDate" style="width: 350px;">
					<el-input v-model="userInfo.updateDate" placeholder="请输入手机号" />
				</el-form-item>
			</el-form>
		</div>
		<template #footer>
			<div style="margin-bottom: 20px;">
				<span class="dialog-footer">
					<el-button type="primary" @click="alterUser">
						保存
					</el-button>
					<el-button @click="centerDialogVisible = false">取消</el-button>
				</span>
			</div>
		</template>
	</el-dialog>

	<div style="width: 100%; height: 90px; background: skyblue;">
		<div style="font-size: 50px;padding: 15px;color:white; text-align: center;">
			用户列表
		</div>
	</div>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column prop="id" label="用户ID" width="180" />
		<el-table-column prop="username" label="用户" width="180" />
		<el-table-column prop="realName" label="姓名" />
		<el-table-column prop="status" label="状态 (0:停用 1:正常)" />
		<el-table-column prop="createDate" label="创建时间" />
		<el-table-column prop="updateDate" label="更新时间" />
		<el-table-column label="操作选项">
			<template #default="scope">
				<el-button size="small" type="primary" round @click="handleEdit(scope)">修改用户</el-button>
				<el-button size="small" type="danger" round
					@click="handleDelete(scope.row)">删除用户</el-button>
			</template>
		</el-table-column>
	</el-table>

	<!-- 分页 -->
	<div class="demo-pagination-block">
		<el-pagination :page-size="params.limit" :page-sizes="pageSize" background
			layout="total, sizes, prev, pager, next, jumper" :total="totalCount" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				userInfo: {
					id: '',
					username: '',
					realName: '',
					status: '',
					createDate: '',
					updateDate: '',
				},
				centerDialogVisible: false,
				tableData: [],
				pageSize: [10, 20, 30, 40, 50],
				params: {
					page: 1,
					limit: 10,
				},
				//数据总数
				totalCount: ''
			}
		},
		created() {
			this.showUserList()
		},
		methods: {
			showUserList() {
				axios.post("/api/sysUser/list", {
						page: this.params.page,
						limit: this.params.limit,
					}, {
						headers: {
							token: localStorage.getItem('token')
						},
					})
					.then(res => {
						console.log(res)
						this.totalCount = res.data.data.totalCount,
						this.tableData = res.data.data.list
					})
			},

			//每页条数变化时触发
			handleSizeChange(val) {
				this.params.limit = val;
				this.showUserList();
			},
			//当前页改变时触发，就是页码改变时触发
			handleCurrentChange(val) {
				this.params.page = val;
				this.showUserList();
			},
			
			//删除用户
			handleDelete(row) {
				console.log(row.id);
				axios.post("/api/sysUser/delete", {
					id:row.id
				}, {
					headers: {
						token: localStorage.getItem('token')
					}
				}).then(res => {
					console.log(res)
					if (res.data.msg === "success") {
						this.showUserList()
						this.$message({
							message: '用户删除成功',
							group: true,
							type: 'success'
						})
					} else {
						this.showUserList()
						this.$message({
							message: '用户删除异常',
							group: true,
							type: 'error'
						})
					}
				}).catch()
			},
			//修改用户
			handleEdit(scope) {
				console.log(scope.row);
				this.userInfo = scope.row;
				this.centerDialogVisible = true;
			},
			//修改用户确定按钮的点击事件
			alterUser() {
				axios.post("/api/sysUser/update", this.userInfo, {
						headers: {
							token: localStorage.getItem('token')
						},
					})
					.then(res => {
						this.showUserList();
						console.log(res)
						if (res.data.msg === "success") {
							this.$message({
									message: '用户修改成功',
									group: true,
									type: 'success'
								}),

								this.id = '',
								this.password = '',
								this.realName = '',
								this.gender = '',
								this.email = '',
								this.mobile = '',
								this.status = ''
						} else {
							this.showUserList();
							this.$message({
								message: '用户修改失败',
								group: true,
								type: 'error',
							})
						}
					}).catch()
				this.centerDialogVisible = false;
			}
		}
	}
</script>

<style scoped>
	.dialog-footer button:first-child {
		margin-right: 10px;
	}

	.demo-pagination-block+.demo-pagination-block {
		margin-top: 10px;
	}

	.demo-pagination-block .demonstration {
		margin-bottom: 16px;
	}
</style>