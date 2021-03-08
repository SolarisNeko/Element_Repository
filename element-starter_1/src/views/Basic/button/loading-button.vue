<template>
<div>
  <hr>
  <h2>
    加载中 Button <br>
    点击按钮后进行数据加载操作，在按钮上显示加载状态。 <br>
    el-button type="..." :loading="true/false"
  </h2>

  <div>
    <el-button type="primary" :loading="true">加载中</el-button>
  </div>
</div>
</template>

<script>
export default {
name: "loading-button"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
