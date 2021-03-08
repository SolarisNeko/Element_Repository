<template>
  <div>
    <hr>
    <h2>&lt;el-collapse-transition&gt; 包含【div v-show 显示的内容】</h2>
    <el-button @click="show3 = !show3">Click Me</el-button>

    <div style="margin: 30px 0px 30px 40%; height: 200px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">el-collapse-transition [1]</div>
          <div class="transition-box">el-collapse-transition [2]</div>
        </div>
      </el-collapse-transition>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    show3: true
  })
}
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
