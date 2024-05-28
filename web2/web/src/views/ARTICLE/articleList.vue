<template>
	<el-dialog v-model="centerDialogVisible" title="修改文章信息" width="30%" center>
		<div style="margin-top: 20px;">
			<el-form ref="ruleFormRef" :model="wzInfo" label-width="120px" class="demo-ruleForm" :size="formSize"
				status-icon>
				<el-form-item label="文章ID" prop="xwArticleId" style="width: 350px;">
					<el-input disabled v-model="wzInfo.xwArticleId" placeholder="请输入文章ID" />
				</el-form-item>
				<el-form-item label="文章标题" prop="articleTitle" style="width: 350px;">
					<el-input v-model="wzInfo.articleTitle" placeholder="请输入文章标题" />
				</el-form-item>
				<el-form-item label="文章作者" prop="articleAuthor" style="width: 350px;">
					<el-input v-model="wzInfo.articleAuthor" placeholder="请输入文章作者" />
				</el-form-item>
				<el-form-item label="文章介绍" prop="introduction" style="width: 350px;">
					<el-input v-model="wzInfo.introduction" placeholder="请输入文章介绍" />
				</el-form-item>
				<el-form-item label="文章内容" prop="articleContent" style="width: 350px;">
					<el-input v-model="wzInfo.articleContent" placeholder="请输入文章内容" />
				</el-form-item>
				<el-form-item label="文章标题" prop="articleLabel" style="width: 350px;">
					<el-input v-model="wzInfo.articleLabel" placeholder="请输入文章标题" />
				</el-form-item>
				<el-form-item label="文章类型" prop="articleType" style="width: 350px;">
					<el-input v-model="wzInfo.articleType" placeholder="请输入文章类型 (0-原创[默认 1-转载])" />
				</el-form-item>
				<el-form-item label="发布形式" prop="postFormats" style="width: 350px;">
					<el-input v-model="wzInfo.postFormats" placeholder="请输入发布形式 (0-全部可见[默认] 1-仅我可见)" />
				</el-form-item>
				<el-form-item label="文章封面" prop="articleCover" style="width: 350px;">
					<el-input v-model="wzInfo.articleCover" placeholder="请输入文章封面" />
				</el-form-item>
			</el-form>
		</div>
		<template #footer>
			<div style="margin-bottom: 20px;">
				<span class="dialog-footer">
					<el-button type="primary" @click="alterWz()">
						保存
					</el-button>
					<el-button @click="centerDialogVisible = false">取消</el-button>
				</span>
			</div>

		</template>
	</el-dialog>

	<div style="width: 100%; height: 90px; background: lightpink;">
		<div style="font-size: 50px;padding: 15px;color:white; text-align: center;">
			文章列表
		</div>
	</div>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column prop="xwArticleId" label="文章ID" width="180" />
		<el-table-column prop="articleTitle" label="文章标题" width="180" />
		<el-table-column prop="articleAuthor" label="文章作者" />
		<el-table-column prop="introduction" label="文章介绍" />
		<el-table-column prop="articleLabel" label="文章标签" />
		<el-table-column prop="articleType" label="文章类型" />
		<el-table-column prop="postFormats" label="发布形式 (0-全部可见[默认] 1-仅我可见)" />
		<!-- <el-table-column prop="articleCover" label="文章封面" /> -->
		<el-table-column prop="createDate" label="创建时间" />
		<el-table-column prop="updateDate" label="更新时间" />
		<el-table-column label="操作选项">
			<template #default="scope">
				<el-button size="small" type="primary" round @click="handleEdit(scope)">修改文章</el-button>
				<el-button size="small" type="danger" round
					@click="handleDelete(scope.row)">删除文章</el-button>
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
				wzInfo: {
					xwArticleId: '',
					articleTitle: '',
					articleAuthor: '',
					introduction: '',
					articleContent: '',
					articleLabel: '',
					articleType: '',
					postFormats: '',
					articleCover: '',
				},
				centerDialogVisible: false,
				tableData: [],
				pageSize: [10, 20, 30, 40, 50],
				params: {
					page: 1,
					limit: 10,
				},
				//数据总数
				totalCount: '',
			}
		},
		created() {
			this.showWzList()
		},
		methods: {
			showWzList() {
				axios.post("/api/xwArticle/list", {
						page: this.params.page,
						limit: this.params.limit,
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
				this.showWzList();
			},

			//当前页改变时触发，就是页码改变时触发
			handleCurrentChange(val) {
				this.params.page = val;
				this.showWzList();
			},

			//删除文章
			handleDelete(row) {
				console.log(row.xwArticleId);
				axios.post("/api/xwArticle/delete", {
					xwArticleId: row.xwArticleId
				}, {
					headers: {
						token: localStorage.getItem('token')
					}
				}).then(res => {
					console.log(res)
					if (res.data.msg === "success") {
						this.showWzList()
						this.$message({
							message: '文章删除成功',
							group: true,
							type: 'success'
						})
					} else {
						this.showWzList()
						this.$message({
							message: '文章删除异常',
							group: true,
							type: 'error'
						})
					}
				}).catch()
			},
			//修改文章
			handleEdit(scope) {
				this.wzInfo = scope.row;
				this.centerDialogVisible = true;
			},

			//修改文章确定按钮的点击事件
			alterWz() {
				axios.post("/api/xwArticle/update", this.wzInfo, {
						headers: {
							token: localStorage.getItem('token')
						},
					})
					.then(res => {
						this.showWzList();
						console.log(res)
						if (res.data.msg === "success") {
							this.$message({
									message: '文章修改成功',
									group: true,
									type: 'success'
								}),

								this.xwArticleId = '',
								this.articleTitle = '',
								this.articleAuthor = '',
								this.introduction = '',
								this.articleContent = '',
								this.articleLabel = '',
								this.articleType = '',
								this.postFormats = '',
								this.articleCover = ''

						} else {
							this.showWzList();
							this.$message({
								message: '文章修改失败',
								group: true,
								type: 'error',
							})
						}
					}).catch()

				this.centerDialogVisible = false;
			},
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