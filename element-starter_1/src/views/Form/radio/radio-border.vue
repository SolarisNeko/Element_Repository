<template>
<div>
  <hr>
  <h2>
    {{title}} <br>
    {{description}}
  </h2>

  <div>
    <div>
      <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
      <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
      <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio3" size="small">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border disabled>备选项2</el-radio>
      </el-radio-group>
    </div>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio4" size="mini" disabled>
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
      </el-radio-group>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "radio-border",
  data: () => {
    return {
      title: '带有边框',
      description: '- 设置border属性可以渲染为带有边框的单选框。',
      radio1: '1',
      radio2: '2',
      radio3: '2',
      radio4: '1',
    }
  }
}
</script>

<style scoped>

</style>
