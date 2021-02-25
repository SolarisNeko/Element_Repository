<template>
<div>
  <hr>
  <br>
  <h2>
    Radio 单选框 <br>
    {{description}} <br>
    radio = 单选
  </h2>

  <div>
    <router-link to="/radio/base">
      <el-button type="primary">基础用法</el-button>
    </router-link>
    <router-link to="/radio/disabled">
      <el-button type="primary">禁用状态</el-button>
    </router-link>
    <router-link to="/radio/group">
      <el-button type="primary">单选框组</el-button>
    </router-link>
    <router-link to="/radio/style">
      <el-button type="primary">按钮样式</el-button>
    </router-link>
    <router-link to="/radio/border">
      <el-button type="primary">带有边框</el-button>
    </router-link>

    <router-view></router-view>
  </div>

  <div id="Back">
    <el-button type="danger" @click="$router.replace('/radio')">Back</el-button>
  </div>
</div>
</template>

<script>
export default {
name: "radio-index",
  data: () => {
    return {
      description: `在【一组备选项】中进行【单选】`
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}

#Back {
  margin: 30px 0px 30px;
  height: 100px;
}
</style>
