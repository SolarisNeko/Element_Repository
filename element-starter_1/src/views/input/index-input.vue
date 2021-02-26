<template>
<div>
  <hr>
  <br>
  <h2>
    Input 输入框 <br>
    - 通过鼠标/键盘, 输入字符
  </h2>
  <p>
    Input 为受控组件，它总会显示 Vue 绑定值。<br>
    通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用 v-model ）。<br>
    否则，[输入框内, 显示的值] 将不会改变。<br>
    不支持 v-model 修饰符。<br>
  </p><br>

  <div>
    <div style="margin: 10px 10px 10px">
      <router-link to="/input/base">
        <el-button type="primary">基础用法</el-button>
      </router-link>
      <router-link to="/input/disabled">
        <el-button type="primary">禁用状态</el-button>
      </router-link>
      <router-link to="/input/clearable">
        <el-button type="primary">可清空</el-button>
      </router-link>
      <router-link to="/input/password">
        <el-button type="primary">密码框</el-button>
      </router-link>
      <router-link to="/input/base">
        <el-button type="primary">带 icon 的输入框</el-button>
      </router-link>

    </div>
    <div style="margin: 10px 10px 10px">
      <br>
      <router-link to="/input/text">
        <el-button type="primary">文本域</el-button>
      </router-link>
      <router-link to="/input/autosize">
        <el-button type="primary">可自适应文本亮度的文本域</el-button>
      </router-link>
      <router-link to="/input/slot">
        <el-button type="primary">复合型输入框</el-button>
      </router-link>
      <router-link to="/input/size">
        <el-button type="primary">尺寸</el-button>
      </router-link>
      <router-link to="/input/advise">
        <el-button type="primary">带输入建议</el-button>
      </router-link>
      <router-link to="/input/scope">
        <el-button type="primary">自定义模板</el-button>
      </router-link>
      <router-link to="/input/remote">
        <el-button type="primary">远程搜索</el-button>
      </router-link>
      <router-link to="/input/limit">
        <el-button type="primary">输入长度限制</el-button>
      </router-link>

      <router-view></router-view>
    </div>

  </div>

  <div id="Back">
    <el-button type="danger" @click="$router.go(-1)">Back</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "index-input"
}
</script>

<style scoped>
p {
  color: white;
}

#Back {
  margin: 30px 0px 30px;
  height: 100px;
}
</style>
