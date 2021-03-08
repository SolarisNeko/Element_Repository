<template>
  <div>
    <hr>
    <h1>
      {{ title }}
    </h1>
    <h2>
      {{ description }}
    </h2>

    <div>
      <el-input-number v-model="num" :max="10" :min="1" label="label" @change="handleChange"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-number_base",
  data: () => {
    return {
      title: '',
      description: '',

      num: 1,
    }
  },
  methods: {
    handleChange(value) {
      console.log(`axios for ${this.num} Page `)
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
