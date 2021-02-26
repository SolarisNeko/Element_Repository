<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{use}} <br>
  </h2>
  <p>
    {{description}} <br>
  </p>


  <div>
    <h3>text 限制长度</h3>
    <el-input v-model="text"
              placeholder="请输入内容"
              maxlength="10"
              show-word-limit
    ></el-input>

    <div style="margin: 20px 0;"></div>
    <h3>textarea 限制长度</h3>
    <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        maxlength="30"
        show-word-limit
    >
    </el-input>
  </div>
</div>
</template>

<script>
export default {
  name: "input-limit",
  data: () => {
    return {
      title: '输入长度限制',
      use: `属性: maxlength + show-word-limit`,
      description: `
      maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的
      对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，
      可通过设置 show-word-limit 属性来展示字数统计。
      `,

      text: '',
      textarea: '',
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
