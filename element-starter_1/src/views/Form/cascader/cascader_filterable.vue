<template>
  <div>
    <hr>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <p>
        将 filterable 赋值为 true 即可打开搜索功能，默认会匹配节点的 label 或 所有父节点的label(由show-all-levels决定)中包含输入值的选项。<br>
        你也可以用 filter-method 自定义 搜索逻辑，接受一个函数，<br>
        第1个参数是 节点node，<br>
        第2个参数是 搜索关键词keyword，通过[返回布尔值]表示[是否命中]。
      </p>
    </div>

    <div>
      <div class="block">
        <span class="demostration">单选,可搜索</span>
        <el-cascader
            v-model="choose"
            :options="options"
            filterable="true"
            placeholder="试试搜索: 指南"
            @change="handleChange"></el-cascader>
      </div>
      <div class="block">
        <span class="demostration">多选,可搜索</span>
        <el-cascader
            v-model="choose"
            :options="options"
            :props=" { multiple: true }"
            placeholder="试试搜索: 指南"
            @change="handleChange"></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascader_filterable",
  data: () => {
    return {
      title: '可搜索',
      description:
          `可以快捷地搜索选项, 并选择。`,

      props: {
        lazy: true,
        lazyLoad(node, resolve) { // resolve v. 解决
          const {level} = node;
          setTimeout(() => {
            // Array.from() - 从类数组对象或者可迭代对象中创建一个新的数组实例。
            const nodes = Array.from({length: level + 1})
                .map(item => ({
                  value: ++id,
                  label: `选项${id}`,
                  leaf: level >= 2, // 判断是否 >= 2, 显示
                }));

            // callback - 通过 调用 resolve 将【子节点数据】返回, 通知【组件数据】加载完成。
            resolve(nodes);
          }, 1000);
        }
      },

      choose: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        disabled: true,
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]

    };
  },
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
};
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

.demonstration {
  color: #fad6a1;
  margin: 10px 10px 0px;
}
</style>
