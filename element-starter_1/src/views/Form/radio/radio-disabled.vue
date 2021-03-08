<template>
  <div>
    <hr>
    <h2>
      {{ title }} <br>
      {{ description }}
    </h2>

    <!--
      el-radio disabled
     -->
    <div>
      <el-radio v-model="radio" disabled label="禁用">备选项</el-radio>
      <el-radio v-model="radio" disabled label="选中且禁用">备选项</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "disabled_radio",
  data: () => {
    return {
      title: '禁用状态',
      description: '- 单选框不可用的状态。',
      radio: '选中且禁用'
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
