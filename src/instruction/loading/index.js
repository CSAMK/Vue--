// 提供使用加载动画效果的指令

// 导入 loading 图标
import loadingSvg from "@/assets/loading.svg";

import styles from "./loading.module.less";

// 获取父元素中的 loading 图标
function getLoading(el) {
    return el.querySelector('img[data-loading="loadingImg"]');
}

// 给父元素增加一个 loading 效果的图标
function createLoading(el) {
    const img = document.createElement("img");
    img.src = loadingSvg;
    img.className = styles.loadingImg;
    img.setAttribute('data-loading', 'loadingImg');
    el.appendChild(img);
    return img;
}

export default function (el,bingding) {
    const img = getLoading(el);
    // if(img) {
    //     // 如果有 Loading 图标，则判断一下当前是否是加载中
    //     console.log(bingding)
    //     if (!bingding.value) {
    //         el.removeChild(img);
    //     }

    // }if(bingding.value) {
    //     createLoading(el);
    // }
    // 根据 binding.value 的值来判断一下是否正在加载中
    if (bingding.value) {
        // 判断有没有 img 元素，没有则添加
        if (!img) {
            createLoading(el);
        }
    }else {
        // 如果不是正在加载中，判断有没有 img 元素，有的话就得销毁
        if (img) {
            el.removeChild(img);
        }
    }
}