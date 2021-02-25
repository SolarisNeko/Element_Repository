<template>
  <div>
    <hr>
    <br>
    <h2>
      {{title}} <br>
      {{description}} <br>
    </h2>

    <div>
      <el-input v-model="input" placeholder="请输入内容" :disabled="disabled"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-disabled",
  data: () => {
    return {
      title: '禁用状态',
      description: '- 通过 disabled 属性指定是否禁用 input 组件',

      // 自动收集 el-input 内容
      input: '',
      disabled: true, // 是否禁用
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
