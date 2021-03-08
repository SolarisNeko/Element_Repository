<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <!--  在 select 中 + clearable    -->
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :disabled="item.disabled"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "select_disabled",
  data: () => {
    return {
      title: '可清空单选',
      description: '包含清空按钮，可将选择器清空为初始状态',
      ps: '为 el-select 设置 clearable属性，则【select】多一个清空button。需要注意的是，clearable属性, 仅适用于【单选】.',

      // select 默认值
      value: '',
      // 选项数据
      options: [{
        value: '选项1',
        label: '黄金糕' // option 显示的文本
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
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
