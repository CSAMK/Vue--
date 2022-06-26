// 弹出框
import getComponentRootDom from "../getComponentRootDom";

import Iconfont from "@/components/Iconfont/Iconfont.vue";

import styles from "./popover.module.less";

/**
 * 根据传入的对象信息来设置弹出框的内容
 * @param {Object} params 将参数作为一个对象传入
 * @param {String} params.content 需要输出的内容
 * @param {String} params.type 需要显示的图标是什么类型的
 * @param {Number} params.time 弹出框消失的时间
 * @param {DOM} params.elem 需要以那个 DOM 元素为参照物，显示在改 DOM 元素的中心
 * @param {Function} params.callback 回调函数
 */
function popover(params = {}) {
    // 配置默认信息
    const defaultObj = {
        content: "无内容",
        type: "info",
        time: 2000,
        elem: document.body
    };

    Object.assign(defaultObj, params);

    const div = document.createElement('div');
    div.className = `${styles.container}`
    const icon = getComponentRootDom(Iconfont, {
        className: defaultObj.type
    });

    div.innerHTML = `
        <span>
            ${icon.outerHTML}
        </span>
        <span>
            ${defaultObj.content}
        </span>
    `;

    // 判断一下要放入的元素是否有定位设置
    if (defaultObj.elem.style.position === '') {
        defaultObj.elem.style.position = 'relative';
    }
    // console.log(defaultObj.elem.style)
    const className = styles[`container-${defaultObj.type}`];
    div.classList.add(className);
    defaultObj.elem.appendChild(div);

    // 得让浏览器强行渲染一下，否则是不会出现动画效果
    div.clientHeight;

    div.style.opacity = '1';
    div.style.transform = 'translate(-50%, -50%)';

    setTimeout(() => {
        div.style.opacity = '0';
        div.style.transform = 'translate(-50%, 80px)';
        div.addEventListener('transitionend', function () {
            defaultObj.elem.removeChild(div);
            defaultObj.callBack && defaultObj.callBack();
        }, {
            once: true
        });
    }, defaultObj.time);
}

export default popover;