<template>
  <div>
    <hr>
    <h2>
      {{ title }} <br>
      -- {{ description }}
    </h2>

    <!-- v-model="默认选项的 label 值"   -->
    <div>
      <el-radio v-model="radio" label="1">备选项1</el-radio>
      <el-radio v-model="radio" label="2">备选项2</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-radio",
  data: () => {
    return {
      title: `基础用法`,
      description: `由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。`,
      radio: '2', // 默认 radio label

    }
  }
}
</script>

<style scoped>
h2 {
  color: grey;
}
</style>
