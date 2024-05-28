<template>
	<div style="width: 100%; height: 90px; background: skyblue;">
		<div style="font-size: 50px;padding: 15px;color:white; text-align: center;">
			用户详情
		</div>
	</div>

	<div style="margin-top: 0px;font-size: 20px;">
		<div style="width: 300px; margin-left: 1000px; margin-top: 20px;">
			<el-input v-model="data.keyword" placeholder="请输入用户id" clearable />
			<span>
				<el-button type="primary" style="margin-left: 240px;" @click="selectClick">搜索</el-button>
			</span>
		</div>
	</div>
	<div style="margin-top: 10px;">
		<el-descriptions title="用户信息展示" direction="vertical" :column="4" :size="size" border>
			<el-descriptions-item label="用户id">{{data.id}}</el-descriptions-item>
			<el-descriptions-item label="用户名">{{data.username}}</el-descriptions-item>
			<el-descriptions-item label="密码">{{data.password}}</el-descriptions-item>
			<el-descriptions-item label="姓名">{{data.realName}}</el-descriptions-item>
			<el-descriptions-item label="性别 (0:男 1:女)">{{data.gender}}</el-descriptions-item>
			<el-descriptions-item label="电子邮箱">
				{{data.email}}
			</el-descriptions-item>
			<el-descriptions-item label="手机号">{{data.mobile}}
			</el-descriptions-item>
			<el-descriptions-item label="状态 (0:停用 1:正常 2:保密)">{{data.status}}
			</el-descriptions-item>
			<el-descriptions-item label="用户创建时间">
				<el-tag size="default">{{data.createDate}}</el-tag>
			</el-descriptions-item>
			<el-descriptions-item label="用户更新时间"><el-tag size="default">{{data.updateDate}}</el-tag>
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref, reactive } from 'vue'
	import axios from 'axios'
	import { ElMessage } from 'element-plus'

	const data = reactive({
		id: 'null',
		username: 'null',
		password: 'null',
		realName: 'null',
		gender: 'null',
		email: 'null',
		mobile: 'null',
		status: 'null',
		createDate: 'null',
		updateDate: 'null',
		keyword:'',
	})
	
	const size = ref('')
	const blockMargin = computed(() => {
		const marginMap = {
			large: '32px',
			default: '28px',
			small: '24px',
		}
		return {
			marginTop: marginMap[size.value] || marginMap.default,
		}
	})

	function selectClick() {
		axios.post("/api/sysUser/info", {
			id:data.keyword,
		},
			{
				headers: { token: localStorage.getItem('token') },
			}).then(res => {
				console.log(res);
				if(data.keyword === null){
					ElMessage({
						message: '查询条件不能为空',
						type: 'error',
					})
				}
				if(res.data.data === null){
					ElMessage({
						message: '用户信息为空',
						type: 'error',
					})
				}
				data.id = res.data.data.id;
				data.username = res.data.data.username;
				data.realName = res.data.data.realName;
				data.gender = res.data.data.gender;
				data.email = res.data.data.email;
				data.mobile = res.data.data.mobile;
				data.status = res.data.data.status;
				data.createDate = res.data.data.createDate;
				data.updateDate = res.data.data.updateDate;
				
				ElMessage({
					message: '用户信息查询成功',
					type: 'success',
				})
			}).catch()
		}
		
</script>

<style scoped>
	.el-descriptions {
		margin-top: 20px;
	}
</style>