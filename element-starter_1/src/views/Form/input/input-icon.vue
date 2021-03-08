<template>
  <div>
    <hr>
    <br>
    <h2>
      {{ title }} <br>
      {{ description }} <br>
      语法: <br>
      属性方式: &lt;el-input suffix-icon="el-icon-*"&gt; <br>
      slot方式: &lt;el-input&gt; &lt;i slot="suffix" class="el-input__icon el-icon-*"&gt; <br>
      常用单词: prefix 前缀的; suffix 后缀(附加) <br>
    </h2>

    <div>
      <div class="demo-input-suffix">
        属性方式:
        <el-input v-model="input1"
                  placeholder="请选择日期 - 属性方式"
                  suffix-icon="el-icon-date">

        </el-input>
        <el-input
            v-model="input2"
            placeholder="请输入内容 - 属性方式"
            prefix-icon="el-icon-search">

        </el-input>
      </div>
      <div class="demo-input-suffix">
        slot 方式:
        <el-input v-model="input3"
                  placeholder="请选择日期 - slot方式"
        >
          <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input v-model="input4" placeholder="请输入内容 - slot方式">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
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
