<template>
  <div>
    <hr>
    <h1 style="color: aqua">动画 animation</h1>
    <div>
      <router-link to="/animation/fade" style="margin: 30px 0px 0px 30px">
        <el-button type="primary">渐进动画 el-fade-in</el-button>
      </router-link>

      <router-link to="/animation/zoom" style="margin: 30px 0px 0px 30px">
        <el-button type="primary">缩放 el-zoom-in-*</el-button>
      </router-link>

      <router-link to="/animation/collapse" style="margin: 30px 0px 0px 30px">
        <el-button type="primary">展开折叠 &lt;el-collapse-transition&gt;</el-button>
      </router-link>
    </div>

    <!--  vue-router 显示的地方    -->
    <div style="margin-top: 30px">
      <router-view></router-view>
    </div>

    <div style="margin: 30px 0px 30px; height: 100px">
      <el-button type="danger" @click="$router.replace('/animation')">Back</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "animation-index"
}
</script>

<style scoped>

</style>
