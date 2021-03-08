<template>
  <div>
    <hr>
    <h2>
      使用方法 <br>
      直接通过设置 class="el-icon-iconName" 来使用即可。
    </h2>

    <div id="icon">
      <!--  i : italic 斜体 / icon  -->
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button icon="el-icon-search" type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "icon-index"
}
</script>

<style scoped>
h2 {
  color: bisque;
}

icon {
  color: #B3C0D1;
}
</style>
