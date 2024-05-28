<template>
	<div style="width: 100%; height: 100px; background: palegoldenrod;">
		<div style="margin-left: 500px;font-size: 50px;padding: 15px;color:white">
			修改用户
		</div>
	</div>
	<div style="margin-top: 25px;">
		<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
			:size="formSize" status-icon>
			<el-form-item label="用户id" prop="username">
				<el-input v-model="ruleForm.id" placeholder="" />
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="ruleForm.password" placeholder="" />
			</el-form-item>
			<el-form-item label="姓名" prop="realName">
				<el-input v-model="ruleForm.realName" placeholder="" />
			</el-form-item>
			<el-form-item label="性别" prop="gender">
				<el-input v-model="ruleForm.gender" placeholder="" />
			</el-form-item>
			<el-form-item label="电子邮箱" prop="email">
				<el-input v-model="ruleForm.email" placeholder="" />
			</el-form-item>
			<el-form-item label="手机号" prop="mobile">
				<el-input v-model="ruleForm.mobile" placeholder="" />
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-input v-model="ruleForm.status" placeholder="" />
			</el-form-item>
			<!-- <el-form-item>
				<el-button type="primary" @click="addClick">
					修改
				</el-button>
				<el-button @click="resetForm(ruleFormRef)">重置</el-button>
			</el-form-item> -->
		</el-form>
	</div>
</template>


<script lang="ts" setup>
	import axios from 'axios';
	import { reactive, ref } from 'vue'
	import type { FormInstance, FormRules } from 'element-plus'
	import { ElMessage } from 'element-plus'

	const formSize = ref('default')
	const ruleFormRef = ref<FormInstance>()
	const ruleForm = reactive({
		id: '',
		password: '',
		realName: '',
		gender: '',
		email: '',
		mobile: '',
		status: '',
	})

	function addClick() {
		axios.post("/sysUser/update",
			{
				id: ruleForm.id,
				password: ruleForm.password,
				realName: ruleForm.realName,
				gender: ruleForm.gender,
				email: ruleForm.email,
				mobile: ruleForm.mobile,
				status: ruleForm.status,
				
			},
			{
				headers: { token:localStorage.getItem('token')},
				})
			.then(res => {
				console.log(res)
				if (res.data.msg === "success") {
					ElMessage({
						message: '用户修改成功',
						type: 'success',
					})
					/////////////////////////////////////////////////////////////////////////////////
					/* this.$router.replace({
						path: '/menu'
					}) */
				} else if (res.data.code === 50003) {
					ElMessage({
						message: '用户修改失败',
						type: 'error',
					})
				}
			}).catch()
	}

	const rules = reactive<FormRules>({
		username: [
			{ required: true, message: '请输入用户id', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		],
		password: [
			{ required: true, message: '请输入密码', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		],
		realName: [
			{ required: true, message: '请输入姓名', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		],
		gender: [
			{ required: true, message: '请输入性别 (0:男 1:女 2:保密)', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		],
		email: [
			{ required: true, message: '请输入电子邮箱', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		],
		mobile: [
			{ required: true, message: '请输入手机号', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		],
		status: [
			{ required: true, message: '请输入状态 (0:停用 1:正常)', trigger: 'blur' },
			// { min: 5, max: 15, message: 'Length should be 5 to 15', trigger: 'blur' },
		]
	})

	const submitForm = async (formEl : FormInstance | undefined) => {
		if (!formEl) return
		await formEl.validate((valid, fields) => {
			if (valid) {
				console.log('submit!')
			} else {
				console.log('error submit!', fields)
			}
		})
	}

	const resetForm = (formEl : FormInstance | undefined) => {
		if (!formEl) return
		formEl.resetFields()
	}
</script>