<template>
  <div id="app">
    <div>
      <Top></Top>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Top from '@/components/top.vue'
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
export default {
  name: 'App',
  components: {
    Top,Footer,Header
  }
}
</script>

<style lang="less">

</style>
