<template>
	<div class="dataVisualize-box">
		<div class="card top-box">
			<div class="top-title"></div>
			<div class="top-content">
				<div class="item-left sle">
					<span class="left-title">用户人数</span>
					<div class="img-box">
						<img src="./images/renshu.png" alt="" />
					</div>
					<span class="left-number">81412</span>
				</div>
				<div class="item-center">
					<div class="gitee-traffic traffic-box">
						<div class="traffic-img">
							<img src="./images/cha.png" alt="" />
						</div>
						<span class="item-value">53321</span>
						<span class="traffic-name sle">查阅文章次数</span>
					</div>
					<div class="gitHub-traffic traffic-box">
						<div class="traffic-img">
							<img src="./images/xie.png" alt="" />
						</div>
						<span class="item-value">47212</span>
						<span class="traffic-name sle">编辑文章次数</span>
					</div>
					<div class="today-traffic traffic-box">
						<div class="traffic-img">
							<img src="./images/pinglun.png" alt="" />
						</div>
						<span class="item-value">38213</span>
						<span class="traffic-name sle">后台评论</span>
					</div>
					<div class="yesterday-traffic traffic-box">
						<div class="traffic-img">
							<img src="./images/dianzan.png" alt="" />
						</div>
						<span class="item-value">32221</span>
						<span class="traffic-name sle">点赞人数</span>
					</div>
				</div>


				<div class="item-right">
					<div class="echarts-title" style="margin-left: 175px;">数据展示</div>

					<div>
						<el-row :gutter="16">
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="48500">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每日活跃用户
												<el-tooltip effect="dark" content="一天内登录该系统的用户数" placement="top">
													<el-icon style="margin-left: 4px" :size="12">
														<Warning />
													</el-icon>
												</el-tooltip>
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比昨天</span>
											<span class="green">
												24%
												<el-icon>
													<CaretTop />
												</el-icon>
											</span>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="33700">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每月活跃用户
												<el-tooltip effect="dark" content="一个月内登录该系统的用户数" placement="top">
													<el-icon style="margin-left: 4px" :size="12">
														<Warning />
													</el-icon>
												</el-tooltip>
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比上个月</span>
											<span class="red">
												12%
												<el-icon>
													<CaretBottom />
												</el-icon>
											</span>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="3852">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每日新增人数
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比昨天</span>
											<span class="green">
												16%
												<el-icon>
													<CaretTop />
												</el-icon>
											</span>
										</div>
										<div class="footer-item">
											<el-icon :size="14">
												<ArrowRight />
											</el-icon>
										</div>
									</div>
								</div>
							</el-col>
						</el-row>
					</div>


					<div>
						<el-row :gutter="16">
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="34431">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每日在线>2h用户
												<el-tooltip effect="dark" content="一天中在线超过2h的用户人数" placement="top">
													<el-icon style="margin-left: 4px" :size="12">
														<Warning />
													</el-icon>
												</el-tooltip>
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比昨天</span>
											<span class="red">
												26%
												<el-icon>
													<CaretBottom />
												</el-icon>
											</span>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="26121">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												本月未登录的用户
												<el-tooltip effect="dark" content="一个月未登录过系统的用户数量" placement="top">
													<el-icon style="margin-left: 4px" :size="12">
														<Warning />
													</el-icon>
												</el-tooltip>
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比上个月</span>
											<span class="green">
												23%
												<el-icon>
													<CaretTop />
												</el-icon>
											</span>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="31829">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												本月注销账号的用户
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比上个月</span>
											<span class="green">
												20%
												<el-icon>
													<CaretTop />
												</el-icon>
											</span>
										</div>
										<div class="footer-item">
											<el-icon :size="14">
												<ArrowRight />
											</el-icon>
										</div>
									</div>
								</div>
							</el-col>
						</el-row>
					</div>





					<div>
						<el-row :gutter="16">
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="34431">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每日添加文章数量
												<el-tooltip effect="dark" content="一天内添加文章的数量" placement="top">
													<el-icon style="margin-left: 4px" :size="12">
														<Warning />
													</el-icon>
												</el-tooltip>
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比昨天</span>
											<span class="red">
												19%
												<el-icon>
													<CaretBottom />
												</el-icon>
											</span>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="26121">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每日修改文章次数
												<el-tooltip effect="dark" content="一天内文章被修改的次数" placement="top">
													<el-icon style="margin-left: 4px" :size="12">
														<Warning />
													</el-icon>
												</el-tooltip>
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比昨天</span>
											<span class="red">
												7%
												<el-icon>
													<CaretBottom />
												</el-icon>
											</span>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="statistic-card">
									<el-statistic :value="31829">
										<template #title>
											<div style="display: inline-flex; align-items: center">
												每日文章下载次数
											</div>
										</template>
									</el-statistic>
									<div class="statistic-footer">
										<div class="footer-item">
											<span>比昨天</span>
											<span class="green">
												13%
												<el-icon>
													<CaretTop />
												</el-icon>
											</span>
										</div>
										<div class="footer-item">
											<el-icon :size="14">
												<ArrowRight />
											</el-icon>
										</div>
									</div>
								</div>
							</el-col>
						</el-row>
					</div>


				</div>
			</div>
		</div>
	</div>
</template>


<script lang="ts" setup>
	import {
		ArrowRight,
		CaretBottom,
		CaretTop,
		Warning,
	} from '@element-plus/icons-vue'
	import { ChatLineRound, Male } from '@element-plus/icons-vue'
</script>


<style scoped lang="less">
	:global(h2#card-usage ~ .example .example-showcase) {
		background-color: var(--el-fill-color) !important;
	}

	.el-statistic {
		--el-statistic-content-font-size: 28px;
	}

	.statistic-card {
		height: 100%;
		padding: 20px;
		border-radius: 4px;
		background-color: var(--el-bg-color-overlay);
	}

	.statistic-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		font-size: 12px;
		color: var(--el-text-color-regular);
		margin-top: 16px;
	}

	.statistic-footer .footer-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.statistic-footer .footer-item span:last-child {
		display: inline-flex;
		align-items: center;
		margin-left: 4px;
	}

	.green {
		color: var(--el-color-success);
	}

	.red {
		color: var(--el-color-error);
	}
















	.dataVisualize-box .top-box {
		box-sizing: border-box;
		padding: 25px 40px 35px;
		margin-bottom: 10px;
	}

	.dataVisualize-box .top-box .top-title {
		margin-bottom: 10px;
		font-family: DIN;
		font-size: 18px;
		font-weight: 600;
	}

	.dataVisualize-box .top-box .top-content {
		display: flex;
		flex: 1;
		justify-content: space-between;
		margin-top: 10px;
	}

	.dataVisualize-box .top-box .top-content .item-left {
		box-sizing: border-box;
		width: 22%;
		padding: 40px 0 120px 30px;
		overflow: hidden;
		color: #ffffff;
		background: url("./images/bg.png");
		background-size: 100% 100%;
		border-radius: 20px;
	}

	.dataVisualize-box .top-box .top-content .item-left .left-title {
		font-family: DIN;
		font-size: 20px;
		font-weight: 500;
		color: #1a1a37;
	}

	.dataVisualize-box .top-box .top-content .item-left .img-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90px;
		height: 90px;
		margin: 40px 0 20px;
		background: #ffffff;
		background-color: #ffffff;
		border-radius: 20px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.14);
	}

	.dataVisualize-box .top-box .top-content .item-left .img-box img {
		width: 60px;
		height: 65px;
	}

	.dataVisualize-box .top-box .top-content .item-left .left-number {
		overflow: hidden;
		font-family: DIN;
		font-size: 62px;
		font-weight: 500;
		color: #1a1a37;
	}

	.dataVisualize-box .top-box .top-content .item-center {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-content: space-between;
		justify-content: space-between;
		min-width: 250px;
		padding: 0 50px;
	}

	.dataVisualize-box .top-box .top-content .item-center .traffic-box {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 47%;
		height: 48%;
		padding: 25px;
		border-radius: 30px;
	}

	.dataVisualize-box .top-box .top-content .item-center .traffic-box .traffic-img {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 70px;
		margin-bottom: 10px;
		background-color: #ffffff;
		border-radius: 19px;
	}

	.dataVisualize-box .top-box .top-content .item-center img {
		width: 33px;
		height: 33px;
	}

	.dataVisualize-box .top-box .top-content .item-center .item-value {
		margin-bottom: 4px;
		font-family: DIN;
		font-size: 28px;
		font-weight: bold;
		color: #1a1a37;
	}

	.dataVisualize-box .top-box .top-content .item-center .traffic-name {
		overflow: hidden;
		font-family: DIN;
		font-size: 15px;
		color: #1a1a37;
		white-space: nowrap;
	}

	.dataVisualize-box .top-box .top-content .item-center .gitee-traffic {
		background: url("./images/1-bg.png");
		background-color: #e8faea;
		background-size: 100% 100%;
	}

	.dataVisualize-box .top-box .top-content .item-center .gitHub-traffic {
		background: url("./images/2-bg.png");
		background-color: #e7e1fb;
		background-size: 100% 100%;
	}

	.dataVisualize-box .top-box .top-content .item-center .today-traffic {
		background: url("./images/3-bg.png");
		background-color: #fdf3e9;
		background-size: 100% 100%;
	}

	.dataVisualize-box .top-box .top-content .item-center .yesterday-traffic {
		background: url("./images/4-bg.png");
		background-color: #f0f5fb;
		background-size: 100% 100%;
	}

	.dataVisualize-box .top-box .top-content .item-right {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 40%;
		height: 430px;
		border: 1px solid #e5e7eb;
		border-radius: 25px;
	}

	.dataVisualize-box .top-box .top-content .item-right .echarts-title {
		padding: 15px 20px;
		font-family: DIN;
		font-size: 18px;
		font-weight: 600;
		border-bottom: 1px solid #e5e7eb;
	}

	.dataVisualize-box .top-box .top-content .item-right .book-echarts {
		flex: 1;
		width: 100%;
	}

	.dataVisualize-box .bottom-box {
		position: relative;
		padding: 20px 0 0;
	}

	.dataVisualize-box .bottom-box .bottom-title {
		position: absolute;
		top: 16%;
		left: 3%;
		font-family: DIN;
		font-size: 18px;
		font-weight: 600;
	}

	.dataVisualize-box .bottom-box .bottom-tabs {
		padding: 0 50px;
	}

	.dataVisualize-box .bottom-box .curve-echarts {
		width: 100%;
		height: 400px;
		padding-left: 10px;
	}
</style>