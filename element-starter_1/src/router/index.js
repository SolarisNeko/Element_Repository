import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)


// 动画
import animation from '../views/BuiltIn/animation/animation-index'
import fade from "../views/BuiltIn/animation/fade-in";
import zoom from '../views/BuiltIn/animation/zoom'
import collapse from '../views/BuiltIn/animation/collapse'
// 布局
import layout from '../views/Basic/layout/layout-index'
import base_layout from '../views/Basic/layout/base_layout'
import gutter_layout from '../views/Basic/layout/gutter_layout'
import mix_layout from '../views/Basic/layout/mix_layout'
import offset_layout from '../views/Basic/layout/offset_layout'
import reactive_layout from '../views/Basic/layout/reactive_layout'
// 布局容器
import container from '../views/Basic/container/container-index'
import base_container from '../views/Basic/container/base-container'
import container_demo from '../views/Basic/container/container-demo'
// 图标
import icon from '../views/Basic/icon/icon-index'
// Button
import button from '../views/Basic/button/button-index'
import base_button from '../views/Basic/button/base-button'
import disabled_button from "../views/Basic/button/disabled_button";
import text_button from "../views/Basic/button/text-button";
import icon_button from "../views/Basic/button/icon-button";
import button_group from "../views/Basic/button/button-group";
import loading_button from "../views/Basic/button/loading-button";
import size_button from "../views/Basic/button/size-button";
// Link 文字链接
import link from '../views/Basic/link/link-index'
import base_link from '../views/Basic/link/base-link'
import disabled_link from '../views/Basic/link/disabled-link'
import underline_link from '../views/Basic/link/underline-link'
import icon_link from '../views/Basic/link/icon-link'
// Radio 单选框
import radio from '../views/Form/radio/radio-index'
import radio_base from '../views/Form/radio/radio-base'
import radio_disabled from '../views/Form/radio/radio-disabled'
import radio_group from '../views/Form/radio/radio-group'
import radio_style from '../views/Form/radio/radio-style'
import radio_border from '../views/Form/radio/radio-border'
// Checkbox 多选框
import checkbox from '../views/Form/checkbox/index-checkbox'
import checkbox_base from '../views/Form/checkbox/checkbox-base'
import checkbox_disabled from '../views/Form/checkbox/checkbox-disabled'
import checkbox_group from '../views/Form/checkbox/checkbox-group'
import checkbox_indeterminate from '../views/Form/checkbox/checkbox-indeterminate'
import checkbox_size from '../views/Form/checkbox/checkbox-size'
import checkbox_button from '../views/Form/checkbox/checkbox-button'
import checkbox_border from '../views/Form/checkbox/checkbox-border'
// input 输入框
import input from '../views/Form/input/index-input'
import input_base from '../views/Form/input/input-base'
import input_disabled from '../views/Form/input/input-disabled'
import input_clearable from '../views/Form/input/input-clearable'
import input_password from '../views/Form/input/input-password'
import input_icon from '../views/Form/input/input-icon'
import input_textarea from '../views/Form/input/input_type-textarea'
import input_slot from '../views/Form/input/input-slot'
import input_size from '../views/Form/input/input-size'
import autocomplete_fetch_suggestions from '../views/Form/input/autocomplete_fetch-suggestions'
import template_slot_scope from '../views/Form/input/template_slot_scope'
import input_remote from '../views/Form/input/input-remote'
import input_maxlength from '../views/Form/input/input-maxlength'
// input-number 计数器
import input_number from '../views/Form/input-number/index_input-number'
import input_number_base from '../views/Form/input-number/input-number_base'
import input_number_disabled from '../views/Form/input-number/input-number_disabled'
import input_number_step from '../views/Form/input-number/input-number_step'
import input_number_step_strictly from '../views/Form/input-number/input-number_step-strictly'
import input_number_precision from '../views/Form/input-number/input-number_precision'
import input_number_size from '../views/Form/input-number/input-number_size'
import input_number_controls_position from '../views/Form/input-number/input-number_controls-position'
// Select
import index_select from '../views/Form/select/index_select'
import select_base from '../views/Form/select/select_base'
import select_option_disabled from '../views/Form/select/select_option_disabled'
import select_disabled from '../views/Form/select/select_disabled'
import select_clearable from '../views/Form/select/select_clearable'
import select_multiple from '../views/Form/select/select_multiple'
import select_slot from '../views/Form/select/select_slot'
import select_option_group from '../views/Form/select/select_option-group'
import select_filterable from '../views/Form/select/select_filterable'
import select_remote_method from '../views/Form/select/select_remote-method'
import select_allow_create from '../views/Form/select/select_allow-create'
// Cascader
import index_cascader from '../views/Form/cascader/index_cascader'
import cascader_base from '../views/Form/cascader/cascader_base'
import cascader_disabled from '../views/Form/cascader/cascader_disabled'
import cascader_show_all_levels from '../views/Form/cascader/cascader_show-all-levels'
import cascader_multiple from '../views/Form/cascader/cascader_multiple'
import cascader_checkStrictly from '../views/Form/cascader/cascader_checkStrictly'
import cascader_lazyload from '../views/Form/cascader/cascader_lazyload'


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
            children: []
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
                {
                    path: '/input/base',
                    component: input_base,
                },
                {
                    path: '/input/disabled',
                    component: input_disabled,
                },
                {
                    path: '/input/clearable',
                    component: input_clearable,
                },
                {
                    path: '/input/password',
                    component: input_password,
                },
                {
                    path: '/input/icon',
                    component: input_icon,
                },
                {
                    path: '/input/textarea',
                    component: input_textarea,
                },
                {
                    path: '/input/slot',
                    component: input_slot,
                },
                {
                    path: '/input/size',
                    component: input_size,
                },
                {
                    path: '/input/autocomplete_fetch_suggestions',
                    component: autocomplete_fetch_suggestions,
                },
                {
                    path: '/input/template_slot_scope',
                    component: template_slot_scope,
                },
                {
                    path: '/input/remote',
                    component: input_remote,
                },
                {
                    path: '/input/maxlength',
                    component: input_maxlength,
                },

            ]
        },
        {
            path: '/input_number',
            component: input_number,
            children: [
                {
                    path: '/input_number/base',
                    component: input_number_base
                },
                {
                    path: '/input_number/disabled',
                    component: input_number_disabled
                },
                {
                    path: '/input_number/step',
                    component: input_number_step
                },
                {
                    path: '/input_number/step_strictly',
                    component: input_number_step_strictly
                },
                {
                    path: '/input_number/precision',
                    component: input_number_precision
                },
                {
                    path: '/input_number/size',
                    component: input_number_size
                },
                {
                    path: '/input_number/controls_position',
                    component: input_number_controls_position
                },
            ]
        },
        // Select 下拉菜单
        {
            path: '/select',
            component: index_select,
            children: [
                {
                    path: '/select/base',
                    component: select_base
                },
                {
                    path: '/select/option_disabled',
                    component: select_option_disabled
                },
                {
                    path: '/select/select_disabled',
                    component: select_disabled
                },
                {
                    path: '/select/option_disabled',
                    component: select_option_disabled
                },
                {
                    path: '/select/clearable',
                    component: select_clearable
                },
                {
                    path: '/select/multiple',
                    component: select_multiple
                },
                {
                    path: '/select/slot',
                    component: select_slot
                },
                {
                    path: '/select/option_group',
                    component: select_option_group
                },
                {
                    path: '/select/filterable',
                    component: select_filterable
                },
                {
                    path: '/select/remote_method',
                    component: select_remote_method
                },
                {
                    path: '/select/allow_create',
                    component: select_allow_create
                },
            ]
        },
        // Cascader 级联选择器
        {
            path: '/cascader',
            component: index_cascader,
            children: [
                {
                    path: '/cascader/base',
                    component: cascader_base
                }
            ]
        }

    ]
})
