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

    <div class="demo-input-size">
      <el-input
          placeholder="请输入内容"
          suffix-icon="el-icon-date"
          v-model="input1">
      </el-input>
      <el-input
          size="medium"
          placeholder="请输入内容"
          suffix-icon="el-icon-date"
          v-model="input2">
      </el-input>
      <el-input
          size="small"
          placeholder="请输入内容"
          suffix-icon="el-icon-date"
          v-model="input3">
      </el-input>
      <el-input
          size="mini"
          placeholder="请输入内容"
          suffix-icon="el-icon-date"
          v-model="input4">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-size",
  data: () => {
    return {
      title: '尺寸 size',
      description: '-- 可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。',

      // 自动收集 el-input 内容
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
