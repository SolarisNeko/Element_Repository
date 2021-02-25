import Vue from 'vue'
import ElementUI from 'element-ui' // 导入 element-ui.js
import 'element-ui/lib/theme-chalk/index.css' // 导入 theme-chalk
import App from './App.vue'
// 国际化
import locale from 'element-ui/lib/locale/lang/en'
// vue-router
import router from './router/index'

// ElementUI 使用 locale（国际化）
Vue.use(ElementUI, { locale })

new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
})

