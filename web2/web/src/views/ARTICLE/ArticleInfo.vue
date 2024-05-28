<template>
	<div style="width: 100%; height: 90px; background: lightpink;">
		<div style="font-size: 50px;padding: 15px;color:white; text-align: center;">
			文章详情
		</div>
	</div>

	<div style="margin-top: 0px;font-size: 20px;">
		<div style="width: 300px; margin-left: 1000px; margin-top: 20px;">
			<el-input v-model="data.keyword" placeholder="请输入文章id" clearable />
			<span>
				<el-button type="primary" style="margin-left: 240px;" @click="selectClick">搜索</el-button>
			</span>
		</div>
	</div>
	<div style="margin-top: 10px;">
		<el-descriptions title="文章信息展示" direction="vertical" :column="4" :size="size" border>
			<el-descriptions-item label="文章ID">{{data.xwArticleId}}</el-descriptions-item>
			<el-descriptions-item label="文章标题">{{data.articleTitle}}</el-descriptions-item>
			<el-descriptions-item label="文章作者">{{data.articleAuthor}}</el-descriptions-item>
			<el-descriptions-item label="文章介绍">{{data.introduction}}</el-descriptions-item>
			<el-descriptions-item label="文章内容">{{data.articleContent}}</el-descriptions-item>
			<el-descriptions-item label="文章标签">{{data.articleLabel}}</el-descriptions-item>
			<el-descriptions-item label="文章类型 (0-原创[默认] 1-转载)">{{data.articleType}}</el-descriptions-item>
			<el-descriptions-item label="文章发布形式 (0-全部可见[默认] 1-仅我可见)">{{data.postFormats}}</el-descriptions-item>
			<el-descriptions-item label="文章文章封面">{{data.articleCover}}</el-descriptions-item>
			<el-descriptions-item label="文章喜欢人数">{{data.likeNum}}</el-descriptions-item>
			<el-descriptions-item label="文章收藏人数">{{data.collectNum}}</el-descriptions-item>
			<el-descriptions-item label="文章看过的人数">{{data.lookNum}}</el-descriptions-item>
			<el-descriptions-item label="文章创建时间">
				<el-tag size="default">{{data.createDate}}</el-tag>
			</el-descriptions-item>
			<el-descriptions-item label="文章更新时间"><el-tag size="default">{{data.updateDate}}</el-tag>
			</el-descriptions-item>
		</el-descriptions>
	</div>
</template>

<script setup lang="ts">
	import { computed, ref, reactive } from 'vue'
	import axios from 'axios'
	import { ElMessage } from 'element-plus'

	const data = reactive({
		xwArticleId: 'null',
		articleTitle: 'null',
		articleAuthor: 'null',
		introduction: 'null',
		articleContent: 'null',
		articleLabel: 'null',
		articleType: 'null',
		postFormats: 'null',
		articleCover: 'null',
		likeNum: 'null',
		collectNum: 'null',
		lookNum: 'null',
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
		axios.post("/api/xwArticle/info", {
			xwArticleId:data.keyword,
		},
			{
				headers: { token: localStorage.getItem('token') },
			}).then(res => {
				console.log(res);
				if(data.keyword === ''){
					ElMessage({
						message: '查询条件不能为空',
						type: 'error',
					})
				}else if(res.data.data === null){
					ElMessage({
						message: '文章信息为空',
						type: 'error',
					})
				}
			
				//显示文章的信息
				data.xwArticleId = res.data.data.xwArticleId;
				data.articleTitle = res.data.data.articleTitle;
				data.articleAuthor = res.data.data.articleAuthor;
				data.introduction = res.data.data.introduction;
				data.articleContent = res.data.data.articleContent;
				data.articleLabel = res.data.data.articleLabel;
				data.articleType = res.data.data.articleType;
				data.postFormats = res.data.data.postFormats;
				data.articleCover = res.data.data.articleCover;
				data.likeNum = res.data.data.likeNum;
				data.collectNum = res.data.data.collectNum;
				data.lookNum = res.data.data.lookNum;
				data.createDate = res.data.data.createDate;
				data.updateDate = res.data.data.updateDate;
				
				ElMessage({
					message: '文章信息查询成功',
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