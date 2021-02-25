<template>
<div>
  <hr>
  <h2>
    Button 按钮
  </h2>

  <div>
    <router-link to="/button/base" style=" margin: 30px 5px 30px;">
      <el-button type="primary">基础用法</el-button>
    </router-link>
    <router-link to="/button/disabled" style=" margin: 30px 5px 30px;">
      <el-button type="primary">禁用按钮</el-button>
    </router-link>
    <router-link to="/button/text" style=" margin: 30px 5px 30px;">
      <el-button type="primary">文字按钮</el-button>
    </router-link>
    <router-link to="/button/icon" style=" margin: 30px 5px 30px;">
      <el-button type="primary">图标按钮</el-button>
    </router-link>
    <router-link to="/button/button_group" style=" margin: 30px 5px 30px;">
      <el-button type="primary">按钮组</el-button>
    </router-link>
    <router-link to="/button/loading" style=" margin: 30px 5px 30px;">
      <el-button type="primary">加载中のButton</el-button>
    </router-link>
    <router-link to="/button/size" style=" margin: 30px 5px 30px;">
      <el-button type="primary">不同尺寸のButton</el-button>
    </router-link>

    <router-view></router-view>
  </div>

  <div id="back">
    <el-button type="danger" @click="$router.replace('/button')">Back</el-button>
  </div>
</div>
</template>

<script>
export default {
name: "button-index"
}
</script>

<style scoped>
#back {
  margin: 30px 0px 30px;
  height: 50px;
}

h2  {
  color: aqua;
}

</style>
