<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <p>
        el-cascader 相当于 Vue.component, 很多设置需要通过 :props="{...}" 进行设置 <br>
        常设置: disabled / multiple / checkStrictly / multiple + checkStrictly <br>
        / lazy / filterable / filter-method
      </p>
    </div>


    <!--  Router  -->
    <div>
      <router-link style="margin: 10px 10px 10px" to="/cascader/base">
        <el-button type="primary">基础用法</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/disabled">
        <el-button type="primary">禁用选项</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/clearable">
        <el-button type="primary">可清空</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/show_all_levels">
        <el-button type="primary">仅显示最后一级</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/multiple">
        <el-button type="primary">多选</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/props_checkStrictly">
        <el-button type="primary">选择任意一级选项</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/lazy">
        <el-button type="primary">动态加载</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/filterable">
        <el-button type="primary">可搜索</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/slot_scope">
        <el-button type="primary">自定义节点内容</el-button>
      </router-link>
      <router-link style="margin: 10px 10px 10px" to="/cascader/options">
        <el-button type="primary">级联面板</el-button>
      </router-link>

      <router-view></router-view>
    </div>

    <div id="Back">
      <el-button type="danger" @click="$router.replace('/cascader')">Back</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_cascader",
  data: () => {
    return {
      title: 'Cascader 级联选择器',
      description: '当一个【数据集合】有清晰的【层级结构】时，可通过【级联选择器】逐级【查看并选择】。',
    }
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
</style>
