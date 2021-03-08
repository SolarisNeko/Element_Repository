<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <p>
        为 el-select 设置【multiple属性】, 即可【启用多选】 <br>
        此时, v-model的值, 为【当前选中值】所组成的【array】。<br>
        默认情况下, 选中值会以 Tag 的形式展现，你也可以【额外设置 collapse-tags属性】, 将它们合并为一段文字。<br>
      </p>
    </div>
    <br>

    <p> 显示 select 所有选择的option </p>
    <div>
      <el-select v-model="value1" multiple placeholder="placeholder">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <br><br>

      <!--  因为 el-select 开启了 multiple(不显示所有option, 而是显示 +1), 所以 v-model 要放 array   -->
      <p> 不显示 select 选择的 所有option, 改成 +1 模式</p>
      <el-select v-model="value2"
                 collapse-tags
                 multiple
                 placeholder="placeholder"
                 style="margin-left: 20px">
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
  name: "select_disabled",
  data: () => {
    return {
      title: '基础多选',
      description: '适用性较广的基础多选，用 Tag 展示已选项',

      value1: [],
      value2: [],

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
