<template>
  <div>
    <hr>
    <br>
    <h2>
      {{ title }} <br>
      {{ description }} <br>
      ps: type="textarea" 高度可通过 :rows=".." 属性控制
    </h2>

    <div>
      <el-input
          v-model="textarea"
          :rows="2"
          placeholder="请输入内容 1"
          type="textarea"
      ></el-input>
      <div style="margin: 20px 0px;"></div>
      <el-input
          type="textarea"
          v-model="textarea2"
          placeholder="请输入内容 2"
          :autosize="{ minRows: 2, maxRows: 4 }"
      >
      </el-input>
    </div>

  </div>
</template>

<script>
export default {
  name: "input_type-textarea",
  data: () => {
    return {
      title: 'type="textarea" 文本域',
      description: `-- 用于输入多行文本信息，通过将 type 属性的值指定为 textarea。`,

      // 自动收集 el-input 内容
      textarea1 : '',
      textarea2 : '',
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
