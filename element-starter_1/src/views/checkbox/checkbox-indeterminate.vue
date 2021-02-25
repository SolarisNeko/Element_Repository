<template>
  <div>
    <hr>
    <br>
    <h2>
      {{ title }} <br>
      {{ description }}
    </h2>

    <div>
      <!--   @change 会传 v-model 过去   -->
      <el-checkbox v-model="checkAll"
                   :indeterminate="isIndeterminate"
                   @change="handleCheckAllChange"
      >全选
      </el-checkbox>

      <div style="margin: 15px 0;"></div>
      <!--  通过 @change 跟随 checkAll 状态  -->
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :key="city"
                     :label="city"
        >{{ city }}
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
  name: "vue-indeterminate",
  data() {
    return {
      title: 'indeterminate 状态',
      description: 'indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果',

      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true // 不确定状态
    }
  },
  methods: {
    // 【全选框】控制【已选择的data】
    // val 获取的是 el-checkbox v-model=“checkAll"
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []; // 跟随 checkAll 状态
      this.isIndeterminate = false;
    },
    // 处理城市勾选变化
    // 【选项】逆向驱动【全选框】の渲染 (判断逻辑)
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length; // 获取长度
      this.checkAll = (checkedCount === this.cities.length); // 判断是否全选（根据 length）
      // 不确定状态 = (0, cities.length)之间的显示
      this.isIndeterminate = (checkedCount > 0 && checkedCount < this.cities.length);
    }
  }
};
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
