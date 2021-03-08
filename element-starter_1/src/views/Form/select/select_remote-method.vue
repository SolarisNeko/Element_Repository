<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <p>{{ ps }}</p>
    </div>

    <div>
      <el-select v-model="value" :loading="loading"
                 :remote-method="remoteMethod" filterable
                 multiple="true" placeholder="请输入关键词"
                 remote remote="true">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "select_remote-method",

  data() {
    return {
      title: '远程搜索',
      description: '从服务器搜索数据，输入关键字进行查找',
      ps: `为了【启用远程搜索（参数调用后端）】，需要将 filterable 和 remote 设置为 true，
      同时传入一个 remote-method。
      remote-method 为 一个Function，它会在【输入值 发生变化时】调用，参数为【当前输入值】。
      需要注意的是，如果 el-option 是通过【v-for指令】渲染出来的，
      此时需要为 el-option 添加 key属性，
      且其值需具有【唯一性】，比如【此例中的 item.value】。`,

      options: [],
      value: [],
      list: [],
      loading: true, // 是否显示加载过程

      states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],
    }
  },

  mounted() { // 进行渲染的时候
    this.list = this.states.map(item => {
      return {value: `value:${item}`, label: `label:${item}`};
    });
  },

  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            // 匹配 indexOf 存在
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else { // 如果查询为空
        this.options = [];
      }
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
