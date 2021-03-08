<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <el-select v-model="choose" allow-create="true"
                 default-first-option="true" filterable
                 multiple placeholder="请选择文章标签"
      >
        <el-option
            v-for="item in options"
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
  name: "select_allow-create",
  data() {
    return {
      title: '创建条目',
      description: `使用 allow-create属性 即可通过在【输入框中】输入【文字】来创建【新的条目】。
      注意此时 filterable 必须为真。
      本例还使用了【default-first-option属性】，
      在该属性打开的情况下，【按下回车】就可以选中【当前选项列表中的第一个选项】，【无需使用鼠标/键盘方向键】进行定位。`,

      choose: [],
      options: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
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
