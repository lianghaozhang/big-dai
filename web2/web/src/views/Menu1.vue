<template>
	<el-container class="layout-container-demo" style="height: 100vh">
		<el-aside width="200px" style="background: cadetblue;">
			<el-menu style="background: cadetblue;">
				<el-menu-item @click="$router.replace({path:'/'})" style="text-align: center;">
					<div style="margin-left: 40px;">
						首页
					</div>
				</el-menu-item>
				<el-sub-menu index="1">
					<template #title>
						<el-icon>
							<Message />
						</el-icon>用户管理
					</template>
					<el-menu-item-group style="background: honeydew;">
						<el-menu-item index="1-1" @click="$router.replace({path:'/addUser'})">添加用户</el-menu-item>
						<el-menu-item index="1-2" @click="$router.replace({path:'/emptyUserList'})">用户列表</el-menu-item>
						<el-menu-item index="1-3" @click="$router.replace({path:'/userInfo'})">用户详情</el-menu-item>
						<el-menu-item index="1-6" @click="$router.replace({path:'/login'})">重新登录</el-menu-item>
					</el-menu-item-group>
				</el-sub-menu>
				<el-sub-menu index="2">
					<template #title>
						<el-icon>
							<Menu />
						</el-icon>文章管理
					</template>
					<el-menu-item-group style="background: honeydew;">
						<el-menu-item index="2-1" @click="$router.replace({path:'/addArticle'})">添加文章</el-menu-item>
						<el-menu-item index="2-4" @click="$router.replace({path:'/ArticleInfo'})">文章详情</el-menu-item>
						<el-menu-item index="2-5" @click="$router.replace({path:'/emptyWzList'})">文章列表</el-menu-item>
					</el-menu-item-group>
				</el-sub-menu>
				<el-sub-menu index="3">
					<template #title>
						<el-icon>
							<setting />
						</el-icon>本地测试
					</template>
					<el-sub-menu index="3-1" style="background: honeydew;">
						<template #title>用户管理</template>
						<el-menu-item index="3-1-1" style="background: lightyellow;"
							@click="$router.replace({path:'/addUser'})">添加用户</el-menu-item>
						<el-menu-item index="3-1-2" style="background: lightyellow;"
							@click="$router.replace({path:'/emptyUserList'})">用户列表</el-menu-item>
						<el-menu-item index="3-1-3" style="background: lightyellow;"
							@click="$router.replace({path:'/userInfo'})">用户详情</el-menu-item>
						<el-menu-item index="3-1-6" style="background: lightyellow;"
							@click="$router.replace({path:'/login'})">登录</el-menu-item>
					</el-sub-menu>
					<el-sub-menu index="3-2" style="background: honeydew;">
						<template #title>文章管理</template>
						<el-menu-item index="3-2-1" style="background: lightyellow;"
							@click="$router.replace({path:'/addArticle'})">添加文章</el-menu-item>
						<el-menu-item index="3-2-4" style="background: lightyellow;"
							@click="$router.replace({path:'/ArticleInfo'})">文章详情</el-menu-item>
						<el-menu-item index="3-2-5" style="background: lightyellow;"
							@click="$router.replace({path:'/emptyWzList'})">文章列表</el-menu-item>
					</el-sub-menu>
				</el-sub-menu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header style="text-align: right; font-size: 12px;height: 120px;">
				<div class="toolbar">
					<span style="font-size: 80px;margin-right: 150px;color: brown;">
						新闻后台管理系统
					</span>
					<span style="font-size: 20px;margin-right: 20px;color: cadetblue;">
						尊敬的admin用户您好!
					</span>
					<span>
						<el-button type="danger" @click="logout">退出登录</el-button>
					</span>
				</div>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import {
		Message,
		Setting,
		Menu
	} from '@element-plus/icons-vue'

	export default {
		data() {
			return {

			}
		},
		methods: {
			logout() {
				this.$message({
					message: '退出成功',
					group: true,
					type: 'success'
				})
				this.$router.replace('/login')
			}
		}
	}
</script>

<style>
	.el-menu-item-group__title {
		padding: 0 !important;
	}

	.layout-container-demo .el-header {
		position: relative;
		background-color: var(--el-color-primary-light-7);
		color: var(--el-text-color-primary);
	}

	.layout-container-demo .el-aside {
		color: var(--el-text-color-primary);
		background: var(--el-color-primary-light-8);
	}

	.layout-container-demo .el-menu {
		border-right: none;
	}

	.layout-container-demo .el-main {
		padding: 0;
	}

	.layout-container-demo .toolbar {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		right: 20px;
	}
</style>