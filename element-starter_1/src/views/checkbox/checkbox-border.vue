<template>
<div>
  <hr>
  <br>
  <h2>
    {{title}} <br>
    {{description}} <br>
  </h2>

  <div>
    <div>
      <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox v-model="checked3" label="备选项1" border size="medium"></el-checkbox>
      <el-checkbox v-model="checked4" label="备选项2" border size="medium"></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup1" size="small">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "checkbox-border",
  data: () => {
    return {
      title: '带有边框',
      description: '设置 border 属性, 可以渲染为【带有边框的多选框】。',

      // 驱动勾选状态
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: ['备选项1'],
      checkboxGroup2: ['备选项2']
    }
  }
}
</script>

<style scoped>

</style>
