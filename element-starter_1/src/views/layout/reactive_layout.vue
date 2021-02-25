<template>
  <div>
    <hr>
    <h2>
      参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。 <br>
      el-row :gutter="px" > el-col :xs="x/24" :sm="x/24" :md="x/24" :lg="x/24" :xl="x/24"
    </h2>

    <el-row :gutter="10">
      <el-col :lg="3" :md="4" :sm="6" :xl="1" :xs="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :lg="9" :md="8" :sm="6" :xl="11" :xs="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :lg="9" :md="8" :sm="6" :xl="11" :xs="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :lg="3" :md="4" :sm="6" :xl="1" :xs="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Reactive_layout"
}
</script>

<style scoped>
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

h2 {
  color: bisque;
}
</style>
