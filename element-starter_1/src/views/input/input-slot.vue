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
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style="width: 500px">
        <!--  tips: el-input>el-select 必须设置 width, 不然 placeholder 无法显示      -->
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 100px;">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
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

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}


</style>
