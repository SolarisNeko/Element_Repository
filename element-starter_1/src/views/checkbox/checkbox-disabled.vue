<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{description}}
  </h2>

  <div>
    <el-checkbox v-model="checkbox2" >备选项 1</el-checkbox>
    <el-checkbox v-model="checkbox2" >备选项 2</el-checkbox>
  </div>
</div>
</template>

<script>
export default {
  name: "checkbox-disabled",
  data: () => {
    return {
      title: '禁用状态',
      description: '多选框不可用状态。',
      checkbox1: true,
      checkbox2: false,
    }
  }
}
</script>

<style scoped>

</style>
