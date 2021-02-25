import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)


// 动画
import animation from '../views/animation/animation-index'
import fade from "../views/animation/fade-in";
import zoom from '../views/animation/zoom'
import collapse from '../views/animation/collapse'
// 布局
import layout from '../views/layout/layout-index'
import base_layout from '../views/layout/base_layout'
import gutter_layout from '../views/layout/gutter_layout'
import mix_layout from '../views/layout/mix_layout'
import offset_layout from '../views/layout/offset_layout'
import reactive_layout from '../views/layout/reactive_layout'
// 布局容器
import container from '../views/container/container-index'
import base_container from '../views/container/base-container'
import container_demo from '../views/container/container-demo'
// 图标
import icon from '../views/icon/icon-index'
// Button
import button from '../views/button/button-index'
import base_button from '../views/button/base-button'
import disabled_button from "../views/button/disabled_button";
import text_button from "../views/button/text-button";
import icon_button from "../views/button/icon-button";
import button_group from "../views/button/button-group";
import loading_button from "../views/button/loading-button";
import size_button from "../views/button/size-button";
// Link 文字链接
import link from '../views/link/link-index'
import base_link from '../views/link/base-link'
import disabled_link from '../views/link/disabled-link'
import underline_link from '../views/link/underline-link'
import icon_link from '../views/link/icon-link'
// Radio 单选框
import radio from '../views/radio/radio-index'
import radio_base from '../views/radio/radio-base'
import radio_disabled from '../views/radio/radio-disabled'
import radio_group from '../views/radio/radio-group'
import radio_style from '../views/radio/radio-style'
import radio_border from '../views/radio/radio-border'
// Checkbox 多选框
import checkbox from '../views/checkbox/index-checkbox'
import checkbox_base from '../views/checkbox/checkbox-base'
import checkbox_disabled from '../views/checkbox/checkbox-disabled'
import checkbox_group from '../views/checkbox/checkbox-group'
import checkbox_indeterminate from '../views/checkbox/checkbox-indeterminate'
import checkbox_size from '../views/checkbox/checkbox-size'
import checkbox_button from '../views/checkbox/checkbox-button'
import checkbox_border from '../views/checkbox/checkbox-border'
// input 输入框
import input from '../views/input/index-input'

export default new VueRouter({
    routes: [
        // 动画
        {
            path: '/animation',
            component: animation,
            children: [
                {
                    path: '/animation/fade',
                    component: fade,
                    // redirect: '/xxx'
                },
                {
                    path: '/animation/zoom',
                    component: zoom
                },
                {
                    path: '/animation/collapse',
                    component: collapse
                }
            ]
        },
        // 布局
        {
            path: '/layout',
            component: layout,
            children: [
                {
                    path: '/layout/base',
                    component: base_layout,
                },
                {
                    path: '/layout/gutter',
                    component: gutter_layout,
                },
                {
                    path: '/layout/mix',
                    component: mix_layout,
                },
                {
                    path: '/layout/offset',
                    component: offset_layout,
                },
                {
                    path: '/layout/reactive',
                    component: reactive_layout,
                },
            ]
        },
        // 布局容器
        {
            path: '/container',
            component: container,
            children: [
                {
                    path: '/container/base',
                    component: base_container
                },
                {
                    path: '/container/demo',
                    component: container_demo,
                }
            ]
        },
        // icon 图标
        {
            path: '/icon',
            component: icon,
            children: [

            ]
        },
        // Button
        {
            path: '/button',
            component: button,
            children: [
                {
                    path: '/button/base',
                    component: base_button
                },
                {
                    path: '/button/disabled',
                    component: disabled_button
                },
                {
                    path: '/button/text',
                    component: text_button
                },
                {
                    path: '/button/icon',
                    component: icon_button
                },
                {
                    path: '/button/button_group',
                    component: button_group
                },
                {
                    path: '/button/loading',
                    component: loading_button
                },
                {
                    path: '/button/size',
                    component: size_button
                },
            ]
        },
        // Link 文字链接
        {
            path: '/link',
            component: link,
            children: [
                {
                    path: '/link/base',
                    component: base_link,
                },
                {
                    path: '/link/disabled',
                    component: disabled_link,
                },
                {
                    path: '/link/underline',
                    component: underline_link,
                },
                {
                    path: '/link/icon',
                    component: icon_link,
                }
            ]
        },
        // Radio 单选框
        {
            path: '/radio',
            component: radio,
            children: [
                {
                    path: '/radio/base',
                    component: radio_base
                },
                {
                    path: '/radio/disabled',
                    component: radio_disabled
                },
                {
                    path: '/radio/group',
                    component: radio_group,
                },
                {
                    path: '/radio/style',
                    component: radio_style
                },
                {
                    path: '/radio/border',
                    component: radio_border
                },
            ]
        },
        // Checkbox 多选框
        {
            path: '/checkbox',
            component: checkbox,
            children: [
                {
                    path: '/checkbox/base',
                    component: checkbox_base
                },
                {
                    path: '/checkbox/disabled',
                    component: checkbox_disabled
                },
                {
                    path: '/checkbox/group',
                    component: checkbox_group
                },
                {
                    path: '/checkbox/indeterminate',
                    component: checkbox_indeterminate
                },
                {
                    path: '/checkbox/size',
                    component: checkbox_size
                },
                {
                    path: '/checkbox/style',
                    component: checkbox_button
                },
                {
                    path: '/checkbox/border',
                    component: checkbox_border
                }
            ]
        },
        // input 输入框
        {
            path: '/input',
            component: input,
            children: [

            ]
        }

    ]
})
