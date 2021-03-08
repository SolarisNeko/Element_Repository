<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <p>{{ ps }}</p>
    </div>

    <div>
      <el-input-number v-model="num1"></el-input-number>
      <el-input-number v-model="num2" size="medium"></el-input-number>
      <el-input-number v-model="num3" size="small"></el-input-number>
      <el-input-number v-model="num4" size="mini"></el-input-number>
    </div>


  </div>

</template>

<script>
export default {
  name: "input-number_size",
  data: () => {
    return {
      title: '精度 precision',
      description: '设置 precision 属性, 可以控制【数值精度】, 接收一个 Number 作为 小数位',
      ps: 'precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。',

      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      min: 1,
      max: 10,

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
