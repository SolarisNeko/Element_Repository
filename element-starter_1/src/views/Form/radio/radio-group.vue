<template>
<div>
  <hr>
  <h2>
    {{title}} <br>
    {{description}}
  </h2>

<!--
  此处 v-model="radio" 是 default radio label
 -->
  <div>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项 3</el-radio>
      <el-radio :label="6">备选项 6</el-radio>
      <el-radio :label="9">备选项 9</el-radio>
    </el-radio-group>
  </div>
</div>
</template>

<script>
export default {
  name: "radio-group",
  data: () => {
    return {
      title: '单选框组',
      description: '适用于在多个互斥的选项中选择的场景',
      radio: 6,
    }
  }
}
</script>

<style scoped>
h2  {
  color: aqua;
}
</style>
