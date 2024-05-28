import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/login",
			component: () => import("../views/Login.vue"),
		},
		{
			path: "/",
			component: () => import("../views/Menu.vue"),
			children:
			[
				{
					path: "/",
					component: () => import("../views/index.vue"),
				},
				{
					path: "/addUser",
					component: () => import("../views/USER/addUser.vue"),
				},
				{
					path: "/userList",
					component: () => import("../views/USER/userList.vue"),
				},
				{
					path: "/userInfo",
					component: () => import("../views/USER/userInfo.vue"),
				},
				{
					path: "/addArticle",
					component: () => import("../views/ARTICLE/addArticle.vue"),
				},
				{
					path: "/ArticleInfo",
					component: () => import("../views/ARTICLE/ArticleInfo.vue"),
				},
				{
					path: "/articleList",
					component: () => import("../views/ARTICLE/articleList.vue"),
				}
			]
		},
	],
})