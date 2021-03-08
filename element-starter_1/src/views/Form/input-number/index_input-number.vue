<template>
  <div>
    <hr>
    <h1>
      InputNumber 计数器
    </h1>
    <h2>
      仅允许输入标准的数字值，可定义范围
    </h2>

    <!-- route -->
    <div>
      <router-link style="margin: 10px 10px 10px" to="/input_number/base">
        <el-button type="primary">基础用法</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/input_number/disabled">
        <el-button type="primary">禁用状态</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/input_number/step">
        <el-button type="primary">步数</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/input_number/step_strictly">
        <el-button type="primary">严格步数</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/input_number/precision">
        <el-button type="primary">精度</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/input_number/size">
        <el-button type="primary">尺寸</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/input_number/controls_position">
        <el-button type="primary">按钮位置</el-button>
      </router-link>

      <router-view></router-view>
    </div>
    <!-- Back Menu -->
    <div id="Back">
      <el-button type="danger" @click="$router.replace('/')">Back</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "index_input-number",
  data: () => {
    return {}
  }

}
</script>

<style scoped>
h1 {
  color: #fad6a1;
}

h2 {
  color: aqua;
}

p {
  color: wheat;
}
#Back {
  margin: 30px 0px 30px;
  height: 80px;
}
</style>
