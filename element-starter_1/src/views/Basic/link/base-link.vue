<template>
<div>
  <hr>
  <h2>
    基础用法 <br>
    基础的文字链接用法。 <br>
    el-link href="..." target=".."
  </h2>

  <div>
    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "base-link"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
