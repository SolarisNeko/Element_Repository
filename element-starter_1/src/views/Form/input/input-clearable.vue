<template>
  <div>
    <hr>
    <br>
    <h2>
      {{title}} <br>
      {{description}} <br>
    </h2>

    <div>
      <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-clearable",
  data: () => {
    return {
      title: '可清空 clearable',
      description: '- 使用 clearable 属性, 即可得到一个【可清空的输入框】, 带 x 按钮',

      // 自动收集 el-input 内容
      input: '',
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
