<template>
<div>
  <hr>
  <h2>
    下划线 <br>
    文字链接下划线。 <br>
    el-link href="..." :underline="true/false"
  </h2>

  <div>
    <div>
      <el-link :underline="false" style="font-size: 30px">无下划线</el-link>
      <br>
      <el-link style="font-size: 30px">有下划线</el-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "underline-link"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
