<template>
<div>
  <hr>
  <h2>
    按钮组 <br>
    el-button-group > el-button type="..." icon="..."
  </h2>

  <div>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
</div>
</template>

<script>
export default {
  name: "button-group"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
