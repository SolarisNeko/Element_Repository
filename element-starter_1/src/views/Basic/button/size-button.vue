<template>
<div>
  <hr>
  <h2>
    不同尺寸 <br>
    Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
  </h2>

  <div>
    <el-row style="margin: 30px 10px 30px;">
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row style="margin: 30px 10px 30px;">
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: "size-button"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
