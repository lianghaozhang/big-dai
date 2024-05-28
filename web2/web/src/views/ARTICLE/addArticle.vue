<template>
	<div style="width: 100%; height: 100px; background: lightpink;">
		<div style="font-size: 50px;padding: 15px;color:white; text-align: center;">
			添加文章
		</div>
	</div>
	<div style="margin-top: 25px;">
		<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
			:size="formSize" status-icon>
			<el-form-item label="文章标题" prop="articleTitle">
				<el-input v-model="ruleForm.articleTitle" placeholder="请输入文章标题" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="文章作者" prop="articleAuthor">
				<el-input v-model="ruleForm.articleAuthor" placeholder="请输入文章作者" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="文章介绍" prop="introduction">
				<el-input v-model="ruleForm.introduction" placeholder="请输入文章介绍" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="文章内容" prop="articleContent">
				<el-input v-model="ruleForm.articleContent" placeholder="请输入文章内容" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="文章标签" prop="articleLabel">
				<el-input v-model="ruleForm.articleLabel" placeholder="请输入文章标签" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="文章类型" prop="articleType">
				<el-input v-model="ruleForm.articleType" placeholder="请输入文章类型 (0-原创[默认] 1-转载)" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="发布形式" prop="postFormats">
				<el-input v-model="ruleForm.postFormats" placeholder="请输入文章的发布形式 (0-全部可见[默认] 1-仅我可见)" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item label="文章封面" prop="articleCover">
				<el-input v-model="ruleForm.articleCover" placeholder="请输入文章封面" style="width: 1000px;"/>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="addClick">
					添加
				</el-button>
				<el-button @click="resetForm(ruleFormRef)">重置</el-button>
			</el-form-item>
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
		articleTitle: '',
		articleAuthor: '',
		introduction: '',
		articleContent: '',
		articleLabel: '',
		articleType: '',
		postFormats: '',
		articleCover: '',
	})

	function addClick() {
		axios.post("/xwArticle/save",
			{
				articleTitle: ruleForm.articleTitle,
				articleAuthor: ruleForm.articleAuthor,
				introduction: ruleForm.introduction,
				articleContent: ruleForm.articleContent,
				articleLabel: ruleForm.articleLabel,
				articleType: ruleForm.articleType,
				postFormats: ruleForm.postFormats,
				articleCover: ruleForm.articleCover,
			},
			{
				headers: { token: localStorage.getItem('token') },
			})
			.then(res => {
				console.log(res)
				if (res.data.msg === "success") {
					ElMessage({
						message: '文章添加成功',
						type: 'success',
					}),

						ruleForm.articleTitle = '',
						ruleForm.articleAuthor = '',
						ruleForm.introduction = '',
						ruleForm.articleContent = '',
						ruleForm.articleLabel = '',
						ruleForm.articleType = '',
						ruleForm.postFormats = '',
						ruleForm.articleCover = ''
					
				} 
				else{
					ElMessage({
						message: '文章添加失败',
						type: 'error',
					})
				}
			}).catch()
	}

	const rules = reactive<FormRules>({
		articleTitle: [
			{ required: true, message: '请输入文章标题', trigger: 'blur' },
		],
		articleAuthor: [
			{ required: true, message: '请输入文章作者', trigger: 'blur' },
		],
		introduction: [
			{ required: true, message: '请输入文章介绍', trigger: 'blur' },
		],
		articleContent: [
			{ required: true, message: '请输入文章内容', trigger: 'blur' },
		],
		articleLabel: [
			{ required: true, message: '请输入文章标签', trigger: 'blur' },
		],
		articleType: [
			{ required: true, message: '请输入文章类型', trigger: 'blur' },
		],
		postFormats: [
			{ required: true, message: '请输入文章发布形式', trigger: 'blur' },
		],
		articleCover: [
			{ required: true, message: '请输入文章封面', trigger: 'blur' },
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