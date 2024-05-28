<template>
  <div class="common-layout">
    <el-container>
		<el-header>
		  <el-menu
		    :default-active="activeIndex"
		    class="el-menu-demo"
		    mode="horizontal"
		    :ellipsis="false"
		    @select="handleSelect"
			style="background: gray; height: 120px;"
		  >
			<div style="width: 100%; text-align: center;">
			    <div style="width: 600px; font-size: 70px; display: inline-block;">
			        新闻后台管理系统
			    </div>
			</div>

		    <div class="flex-grow" />
		    <el-sub-menu index="1">
		      <template #title>操作目录</template>
		      <el-sub-menu index="2">
		        <template #title>用户管理</template>
		        <el-menu-item index="2-1" @click="$router.replace({path:'/addUser'})">添加用户</el-menu-item>
		        <el-menu-item index="2-2" @click="$router.replace({path:'/userList'})">用户列表</el-menu-item>
		        <el-menu-item index="2-3" @click="$router.replace({path:'/userInfo'})">用户详情</el-menu-item>
		      </el-sub-menu>
		      <el-sub-menu index="3">
		        <template #title>文章管理</template>
		        <el-menu-item index="3-1" @click="$router.replace({path:'/addArticle'})">添加文章</el-menu-item>
				<el-menu-item index="3-3" @click="$router.replace({path:'/articleList'})">文章列表</el-menu-item>
		        <el-menu-item index="3-3" @click="$router.replace({path:'/ArticleInfo'})">文章详情</el-menu-item>
		      </el-sub-menu>
			  <el-menu-item @click="$router.replace({path:'/login'})">退出登录</el-menu-item>
		    </el-sub-menu>
		  </el-menu>
		</el-header>
      <el-main style="height: 715px; margin-top: 50px;">
		  <router-view></router-view>
	  </el-main>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
