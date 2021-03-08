<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{description}} <br>
  </h2>

  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</div>
</template>

<script>
export default {
  name: "input-base",
  data: () => {
    return {
      // 自动收集 el-input 内容
      input: ''
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
