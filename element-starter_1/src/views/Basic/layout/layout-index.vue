<template>
  <div>
    <hr>
    <div style="margin: 30px 0px 30px 0px">
      <router-link to="/layout/base">
        <el-button type="primary">基本样式 Layout</el-button>
      </router-link>
      <router-link to="/layout/gutter">
        <el-button type="primary">分栏间隔 Layout</el-button>
      </router-link>
      <router-link to="/layout/mix">
        <el-button type="primary">混合 Layout</el-button>
      </router-link>
      <router-link to="/layout/offset">
        <el-button type="primary">指定偏移的 Layout</el-button>
      </router-link>
      <router-link to="/layout/reactive">
        <el-button type="primary">响应式 Layout</el-button>
      </router-link>

      <router-view></router-view>
    </div>

    <div style="height: 100px">
      <el-button type="danger" @click="$router.replace('/layout')">Back</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'layout-index',
    components: {

    }
  }
</script>

<style>

</style>
