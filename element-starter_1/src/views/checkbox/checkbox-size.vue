<template>
  <div>
    <hr>
    <h2>
      {{ title }} <br>
      {{ description }}
    </h2>

    <div>
      <!-- checkbox-group 绑定 勾选部分   -->
      <el-checkbox-group
          v-model="checkedCities"
          :min="1"
          :max="2"
          >

        <!--  checkbox + v-for 渲染 全部data    -->
        <el-checkbox v-for="city in cities" :label="city" :key="city">
          {{ city }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳']

  export default {
    name: "checkbox-size",
    data: () => {
      return {
        title: '可选项目数量的限制',
        description: '使用 min 和 max 属性能够限制可以被勾选的项目的数量。',

        // 勾选部分
        // checkedCities: ['上海'], // 坑: 错误示范 - 不可以初始化！
        checkedCities: [],
        // 整体data
        cities: cityOptions,
      }
    }
  };
</script>

<style scoped>

</style>
