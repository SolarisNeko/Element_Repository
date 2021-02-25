<template>
<div>
  <hr>
  <h2>
    Link 文字链接 <br>
    文字超链接
  </h2>

  <div>
    <router-link to="/link/base" style="margin: 30px 10px 30px">
      <el-button type="primary">基础用法</el-button>
    </router-link>
    <router-link to="/link/disabled" style="margin: 30px 10px 30px">
      <el-button type="primary">禁用状态</el-button>
    </router-link>
    <router-link to="/link/underline" style="margin: 30px 10px 30px">
      <el-button type="primary">下划线</el-button>
    </router-link>
    <router-link to="/link/icon" style="margin: 30px 10px 30px">
      <el-button type="primary">图标</el-button>
    </router-link>

    <router-view></router-view>
  </div>

  <div id="back">
    <el-button type="danger" @click="$router.replace('/link')">Back</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "link-index"
}
</script>

<style scoped>
h2 {
  color: aqua;
}

#back {
  margin: 30px 0px 30px;
  height: 50px;
}
</style>
