<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{description}} <br>
  </h2>

  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</div>
</template>

<script>
export default {
  name: "checkbox-group",
  data() {
    return {
      checkList: [
          '选中且禁用',
          '复选框 A',
      ]
    }
  }
}
</script>

<style scoped>

</style>
