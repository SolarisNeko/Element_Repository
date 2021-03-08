<template>
<div>
  <hr>
  <h2>
    Icon Button <br>
    el-button icon="el-icon-*"
  </h2>

  <div>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
  </div>
</div>
</template>

<script>
export default {
name: "icon-button"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
