<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <el-select v-model="value" placeholder="请选择你的城市">
        <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          <!--    自定义 slot（修改 default template）      -->
          <!-- option 左侧 -->
          <span style="float: left">{{ item.label }}</span>
          <!-- option 右侧 -->
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "select_slot",
  data: () => {
    return {
      title: '自定义模板',
      description: '可以自定义备选项',
      ps: '将自定义的 HTML 模板, 插入 el-option 的 slot 中即可。',

      // select 默认值
      value: '',
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
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
