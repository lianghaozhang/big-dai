<template>
	<div class="common-layout">
		<el-container>
			<el-header class="headerStyle" style="background:palegoldenrod;color:white;font-size: 80px; margin:0">
				<div style="margin-left: 500px;">
					用户列表
				</div>
			</el-header>
			<el-main style="background: lightyellow;">
				<template>
					<el-table :data="tableData" border style="width: 100%; height: 300px;">
						<el-table-column prop="用户id" label="id" width="180" />
						<el-table-column prop="用户" label="username" width="180" />
						<el-table-column prop="姓名" label="realName" />
						<el-table-column prop="状态" label="status" />
						<el-table-column prop="创建时间" label="createDate" />
						<el-table-column prop="更新时间" label="updateDate" />
					</el-table>
				</template>
			</el-main>
		</el-container>
	</div>


</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				id: 123,
				username: '',
				realName: '',
				status: 0,
				createDate: '',
				updateDate: '',
				tableData: [{
					用户id: 123,
					用户: '',
					姓名: '',
					状态: 0,
					创建时间: '',
					更新时间: '',
				}, ]
			}
		}
	}
	/* const tableData = [
	  {
	    date: '2016-05-03',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	  {
	    date: '2016-05-02',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	  {
	    date: '2016-05-04',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	  {
	    date: '2016-05-01',
	    name: 'Tom',
	    address: 'No. 189, Grove St, Los Angeles',
	  },
	] */
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
</style>