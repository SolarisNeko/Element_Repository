<template>
  <div>
    <hr>
    <h2>
      el-row :gutter="number" > el-col :span="x/24" :offset="x/24" <br>
      支持偏移指定的栏数。
    </h2>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :offset="6" :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="6" :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :offset="6" :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "offset_layout"
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  /*&:last-child {*/
  /*   margin-bottom: 0;*/
  /* }*/
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

h2 {
  color: blanchedalmond;
}
</style>
