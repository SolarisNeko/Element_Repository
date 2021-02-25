<template>
  <div>
    <hr>
    <br>
    <h2>
      {{title}} <br>
      {{description}} <br>
    </h2>

    <div>
      <el-input v-model="input" placeholder="请输入密码" show-password></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-password",
  data: () => {
    return {
      title: '密码框',
      description: '- 使用 show-password 属性, 即可得到一个【可切换显示/隐藏的密码框】',

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
