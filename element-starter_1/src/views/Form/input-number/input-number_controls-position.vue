<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
    </div>

    <div>
      <el-input-number v-model="num"
                       :max="10"
                       :min="1"
                       :step="1"
                       controls-position="right"
                       label="label"
                       @change="handleChange"
      ></el-input-number>
    </div>


  </div>

</template>

<script>
export default {
  name: "input-number_controls-position",
  data: () => {
    return {
      title: '按钮位置 - controls-position ',
      description: '设置 controls-position 属性可以控制按钮位置。',

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
