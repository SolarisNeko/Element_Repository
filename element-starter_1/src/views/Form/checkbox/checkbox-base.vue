<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{description}}
  </h2>

  <div>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </div>
</div>
</template>

<script>
export default {
  name: "checkbox-base",
  data: () => {
    return {
      title: '基础用法',
      description: '单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍.',
      checked: true, // 默认勾选

    }
  }
}
</script>

<style scoped>

</style>
