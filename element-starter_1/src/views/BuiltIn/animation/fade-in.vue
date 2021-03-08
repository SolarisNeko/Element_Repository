<template>
  <div >
    <hr>
    <h2 style="color: #f74922">
      transition name="el-fade-in[-*]"
    </h2>
    <el-button @click="show = !show">Click Me - fade-in</el-button>

    <div style="display: flex; margin: 50px 0px 50px 35%; height: 100px;" >
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>

<!--    <el-button type="danger" @click="$router.back()">回退</el-button>-->

  </div>
</template>

<script>
export default {
  data: () => ({
    show: true
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
