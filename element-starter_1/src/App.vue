<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start element-ui !</el-button>
      <el-button type="success" @click="hack">My Test</el-button>
    </div>
    <br><br>
    <hr>
    <br>
    <h1>查看 element-ui 类型组件</h1>


    <!--  跳转查看 element-ui Demo  -->
    <h2>
      {{ Component_1 }}
    </h2>
    <div style="margin: 30px 0px 30px 30px">
      <router-link to="/animation">
        <el-button type="primary">动画</el-button>
      </router-link>
    </div>
    <div style="margin: 30px 0px 30px 30px">
      <router-link to="/layout">
        <el-button type="primary">Layout 布局</el-button>
      </router-link>
    </div>
    <div style="margin: 30px 0px 30px 30px">
      <router-link to="/container">
        <el-button type="primary">Container 布局容器</el-button>
      </router-link>
    </div>
    <div style="margin: 30px 0px 30px 30px">
      <router-link to="/icon">
        <el-button type="primary">Icon 图标</el-button>
      </router-link>
    </div>
    <div style="margin: 30px 0px 30px 30px">
      <router-link to="/button">
        <el-button type="primary">Button 按钮</el-button>
      </router-link>
    </div>
    <div style="margin: 30px 0px 30px 30px; height: 100px">
      <router-link to="/link">
        <el-button type="primary">Link 文字链接</el-button>
      </router-link>
    </div>


    <!--  Form 表单の组件  -->
    <h2>
      {{ Component_2 }}
    </h2>
    <div style="margin: 0px 0px 10px 30px; height: 50px">
      <router-link to="/radio">
        <el-button type="primary">Radio 单选框</el-button>
      </router-link>
    </div>
    <div style="margin: 0px 0px 10px 30px; height: 50px">
      <router-link to="/checkbox">
        <el-button type="primary">Checkbox 多选框</el-button>
      </router-link>
    </div>
    <div style="margin: 0px 0px 10px 30px; height: 50px">
      <router-link to="/input">
        <el-button type="primary">Input 输入框</el-button>
      </router-link>
    </div>

    <!--    <hr>-->
    <!--  vue-router 显示的地方    -->
    <div>
      <router-view></router-view>
    </div>
    <div id="MenuButton">
      <el-button icon="el-icon-menu"
                 type="success"
                 @click="$router.replace('/')"
                 round
      >Menu
      </el-button>
    </div>
  </div>
</template>

<script>
import transition from "./views/animation/fade-in";
import zoom from './views/animation/zoom'


export default {
  components: {
    transition,
    zoom,
  },
  data: () => {
    return {
      Component_1: `Basic 基本组件`,
      Component_2: `Form 表单相关组件`,
    }
  },
  methods: {
    startHacking() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    hack() {
      this.$notify({
        title: 'element-ui $notify',
        type: 'warning',
        message: 'This is [ this.$notify({...}) ] Test',
        duration: 3000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  background-image: url('assets/Autumn_Lake.jpg');
  background-color: transparent;
}

h1 {
  color: #be6442;
}

h2 {
  color: antiquewhite;
}

#MenuButton {
  margin: 30px 0px 30px;
  height: 80px;
}
</style>
