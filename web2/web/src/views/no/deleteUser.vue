<template>
	<div style="width: 100%; height: 105px; background: palegoldenrod;">
		<div style="margin-left: 500px;font-size: 55px;color:white;">
			用户删除
		</div>
		<div style="height: 20px; width: 300px;">
			<el-input placeholder="请输入用户id" clearable />
			<span>
				<el-button type="primary" style="margin-left: 240px;" @click="selectClick">搜索</el-button>
			</span>
		</div>
	</div>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column prop="username" label="用户" width="180" />
		<el-table-column prop="realName" label="姓名" />
		<el-table-column prop="status" label="状态  (0:停用 1:正常)" />
		<el-table-column prop="createDate" label="创建时间" />
		<el-table-column prop="updateDate" label="更新时间" />
	</el-table>

	<!-- 分页 -->
	<div class="demo-pagination-block">
		<el-pagination :current-page="currentPage4" :page-size="params.limit" :page-sizes="pageSize" :small="small"
			:disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper"
			:total="totalCount" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
	</div>

	<!-- <div style="margin-top: 5px; margin-left: 1230px;">
		<el-button type="primary" @click="showUserList()">
			更新数据
		</el-button>
	</div> -->
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				tableData:[],
				pageSize: [10, 20, 30, 40, 50],
				params: {
					//
					page: 1,
					limit: 10,
				},
				//数据总数
				totalCount: '',
			}
		},
		created(){
			this.showUserList()
		},
		methods: {
			showUserList() {
				axios.post("/sysUser/list", {
						page:this.params.page,
						limit:this.params.limit,
					}, {
						headers: {
							token: localStorage.getItem('token')
						},
					})
					.then(res => {
						console.log(res)
						this.totalCount = res.data.data.totalCount
						this.tableData = res.data.data.list
					})
			},
			
			//每页条数变化时触发
			handleSizeChange(val) {
				this.params.limit = val;
				this.showUserList();
			},
			//当前页改变时触发，就是页码改变时触发
			handleCurrentChange(val){
				this.params.page = val;
				this.showUserList();
			}
		}
	}
</script>

<style scoped>
	.demo-pagination-block+.demo-pagination-block {
		margin-top: 10px;
	}

	.demo-pagination-block .demonstration {
		margin-bottom: 16px;
	}
</style>