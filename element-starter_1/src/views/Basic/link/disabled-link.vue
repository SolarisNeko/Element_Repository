<template>
<div>
  <hr>
  <h2>
    禁用状态 <br>
    文字链接不可用状态。
  </h2>

  <div>
    <div>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "disabled-link"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
