<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <el-input-number v-model="num"
                       :max="max"
                       :min="min"
                       label="label"
                       step="2"
                       step-strictly
                       @change="handleChange">
      </el-input-number>
    </div>


  </div>

</template>

<script>
export default {
  name: "input-number_step",
  data: () => {
    return {
      title: '严格步数 属性:step-strictly',
      description: 'step-strictly属性接受一个Boolean。如果这个属性被设置为true，则[只能输入]步数的倍数。',

      num: 5,
      min: 1,
      max: 10,
    }
  },
  methods: {
    handleChange() {
      console.log(`axios for ${this.num} Page`)
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
