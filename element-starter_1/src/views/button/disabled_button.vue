<template>
<div>
  <hr>
  <h2>禁用状态的按钮</h2>

  <el-row style="margin: 30px 10px 30px;">
    <el-button disabled>默认按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
    <el-button type="success" disabled>成功按钮</el-button>
    <el-button type="info" disabled>信息按钮</el-button>
    <el-button type="warning" disabled>警告按钮</el-button>
    <el-button type="danger" disabled>危险按钮</el-button>
  </el-row>

  <el-row style="margin: 30px 10px 30px;">
    <el-button plain disabled>朴素按钮</el-button>
    <el-button type="primary" plain disabled>主要按钮</el-button>
    <el-button type="success" plain disabled>成功按钮</el-button>
    <el-button type="info" plain disabled>信息按钮</el-button>
    <el-button type="warning" plain disabled>警告按钮</el-button>
    <el-button type="danger" plain disabled>危险按钮</el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: "disabled_button"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
