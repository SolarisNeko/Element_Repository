<template>
<div>
  <hr>
  <h2>
    图标 <br>
    带图标的文字链接可增强辨识度。<br>
    el-link href="..." target=".." > i class="el-icon-*"
  </h2>

  <div>
    <div>
      <el-link icon="el-icon-edit" style="font-size: 30px">
        编辑
      </el-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <el-link style="font-size: 30px">
        查看<i class="el-icon-view el-icon--right"></i>
      </el-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "icon-link"
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
