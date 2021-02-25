<template>
  <div>
    <hr>
    <br>
    <h2>
      {{title}} <br>
      {{description}} <br>
    </h2>

    <div>
      <div class="demo-input-suffix">
        属性方式:
        <el-input placeholder="请选择日期"
                  suffix-icon="el-icon-date"
                  v-model="input1"></el-input>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "input-icon",
  data: () => {
    return {
      title: '带 icon 的输入框',
      description: '- 带有【图标】标记【输入类型】',

      // 自动收集 el-input 内容
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
