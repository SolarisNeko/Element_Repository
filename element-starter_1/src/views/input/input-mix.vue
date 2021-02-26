<template>
  <div>
    <hr>
    <br>
    <h2>
      {{ title }} <br>
      {{ description }} <br>
      常用slot = "prepend / append" 前置/增补 <br>
    </h2>

    <div>
      <el-input v-model="input1" placeholder="请输入内容 1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px">
      <el-input v-model="input2" placeholder="请输入内容 2">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input v-model="input3"
                class="input-with-select"
                placeholder="请输入内容 3"
      >
        <el-select slot="prepend" v-model="select"  placeholder="请选择..">
          <el-option
              v-for="item in optionsList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search">el-icon-search</el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-mix",
  data: () => {
    return {
      title: '复合型输入框',
      description: '-- 可前置或后置元素，一般为标签或按钮',

      // 自动收集 el-input 内容
      input1: '',
      input2: '',
      input3: '',

      select: '',
      optionsList: [
        {
          label: '餐厅名',
          value: 1
        },
        {
          label: '订单号',
          value: 2
        },
        {
          label: '用户电话',
          value: 3
        },
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}

.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
