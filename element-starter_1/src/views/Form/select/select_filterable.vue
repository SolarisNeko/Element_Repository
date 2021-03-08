<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <el-select v-model="choose" filterable placeholder="请选择">
        <el-option
            v-for="item in optionsList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "select_search",
  data() {
    return {
      title: '可搜索',
      description: `为 el-select 添加 filterable属性 即可启用【搜索功能】。
      默认情况下，Select 会找出[所有label属性]包含【输入值的选项】。
      如果希望使用【自定义 搜索逻辑】，可以通过设置property【filter-method】来实现。
      【filter-method】为一个 Function，它会在【输入值发生变化时】调用，参数为【当前输入值】`,

      choose: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],

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
