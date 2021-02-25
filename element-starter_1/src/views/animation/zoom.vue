<template>
  <div>
    <hr>
    <h2>transition name='el-zoom-in-center/top/bottom/'</h2>
    <el-button @click="show2 = !show2">Click Me</el-button>

    <div style="display: flex; margin: 20px 0px 20px 25%; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
      </transition>
    </div>
<!--    <div>-->
<!--      <el-button type="danger" @click="$router.back()">返回</el-button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    show2: true
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
