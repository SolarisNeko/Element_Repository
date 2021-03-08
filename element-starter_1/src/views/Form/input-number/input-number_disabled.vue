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
                     :min="1"
                     :max="10"
                     step="2"
                     :disabled="true"
                     label="label">
    </el-input-number>
  </div>


</div>

</template>

<script>
export default {
  name: "input-number_disabled",
  data: () => {
    return {
      title: '禁用按钮',
      description: '要使用它，只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。',

      num: 5,

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
