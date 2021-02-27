<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{use}} <br>
  </h2>
  <p>
    maxlength 和 minlength 是【textarea 原生属性】，用来限制输入框的字符长度. <br>
    其中【字符长度】是用 【Javascript 的字符串长度】统计的。<br>
    对于 type="text/textarea" 的输入框，在使用 maxlength 属性限制最大输入长度的同时，<br>
    可通过设置【 show-word-limit 属性】来展示【字数统计】。 <br>
  </p>


  <div>
    <h3>type="text" minlength maxlength + show-word-limit</h3>
    <el-input v-model="text"
              placeholder="请输入内容"
              maxlength="10"
              show-word-limit
    ></el-input>

    <div style="margin: 20px 0;"></div>
    <h3>type="textarea" maxlength + show-word-limit</h3>
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

p {
  color: whitesmoke;
}

h3 {
  color: pink;
}
</style>
