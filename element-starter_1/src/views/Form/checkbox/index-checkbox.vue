<template>
<div>
  <hr>
  <h2>
    Checkbox 多选框 <br>
    {{description}} <br>
  </h2>

  <div>
    <router-link to="/checkbox/base">
      <el-button type="primary">基础用法</el-button>
    </router-link>
    <router-link to="/checkbox/disabled">
      <el-button type="primary">禁用状态</el-button>
    </router-link>
    <router-link to="/checkbox/group">
      <el-button type="primary">多选框组</el-button>
    </router-link>
    <router-link to="/checkbox/indeterminate">
      <el-button type="primary">indeterminate 状态</el-button>
    </router-link>
    <router-link to="/checkbox/size">
      <el-button type="primary">可选项目数量的限制</el-button>
    </router-link>
    <router-link to="/checkbox/style">
      <el-button type="primary">按钮样式</el-button>
    </router-link>
    <router-link to="/checkbox/border">
      <el-button type="primary">带有边框</el-button>
    </router-link>

    <router-view></router-view>
  </div>
  <div id="Back">
    <el-button type="danger" @click="$router.replace('/checkbox')">Back</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "index-checkbox",
  data: () => {
    return {
      description: '【一组备选项】中, 进行【多选】'
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
