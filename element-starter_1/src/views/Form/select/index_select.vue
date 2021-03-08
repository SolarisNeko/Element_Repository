<template>
  <div>
    <hr>
    <h1>
      Select 选择器
    </h1>
    <h2>
      当选项过多时，使用下拉菜单展示并选择内容。
    </h2>

    <!-- route -->
    <div>
      <router-link style="margin: 10px 10px 10px" to="/select/base">
        <el-button type="primary">基础用法</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/option_disabled">
        <el-button type="primary">选项-禁用状态</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/select_disabled">
        <el-button type="primary">选择器-禁用状态</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/clearable">
        <el-button type="primary">可清空单选</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/multiple">
        <el-button type="primary">基础多选</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/slot">
        <el-button type="primary">自定义模板</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/option_group">
        <el-button type="primary">分组</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/filterable">
        <el-button type="primary">可搜索</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/remote_method">
        <el-button type="primary">远程搜索</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/select/allow_create">
        <el-button type="primary">创建条目</el-button>
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
  name: "index_select",
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
