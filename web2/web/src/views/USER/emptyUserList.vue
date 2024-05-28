<template>
	<div style="margin-top: 70px;">
		<el-empty description="暂无数据显示">
			<div style="margin-top: 30px;">
				<el-button type="primary" @click="update()">更新数据</el-button>
			</div>
		</el-empty>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			update() {
				this.$router.replace({
					path: '/userList'
				})
				this.$message({
					message: '数据更新成功',
					group: true,
					type: 'success'
				})
			}
		}
	}
</script>