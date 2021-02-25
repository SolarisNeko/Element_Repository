<template>
  <div>
    <hr>
    <h2> Container 布局容器 - header/aside/footer</h2>

    <div>
      <router-link to="/container/base">
        <el-button type="primary">基本容器</el-button>
      </router-link>
      <router-link to="/container/demo">
        <el-button type="primary">Demo</el-button>
      </router-link>

      <router-view></router-view>
    </div>
    <div id="back">
      <el-button type="danger" @click="$router.replace('/container')">Back</el-button>
    </div>
  </div>
</template>

<script>
export default {
name: "container-index"
}
</script>

<style scoped>
  h2 {
    color: bisque;
  }

  #back {
    margin: 30px 0px 30px;
    height: 50px;
  }
</style>
