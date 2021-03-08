<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <el-select v-model="value" placeholder="请选择">
        <!-- 通过 data.disabled 控制 disabled -->
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
      title: '有禁用选项',
      description: '在el-option中，设定disabled值为 true，即可禁用该选项',
      ps: 'label是【option显示的文字】, value是【option选择的值】',

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
