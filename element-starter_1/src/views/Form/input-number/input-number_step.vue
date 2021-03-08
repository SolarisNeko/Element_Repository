<template>
<div>
  <hr>
  <div>
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>
  </div>

  <div>
    <el-input-number v-model="num"
                     @change="handleChange"
                     :min="min"
                     :max="max"
                     step="2"
                     label="label">
    </el-input-number>
  </div>


</div>

</template>

<script>
export default {
  name: "input-number_step",
  data: () => {
    return {
      title: '步数',
      description: '允许定义递增递减的步数控制.',

      num: 5,
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
