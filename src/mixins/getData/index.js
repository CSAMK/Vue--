// 获取远程数据的公共配置
/**
 * 调用这个方法将把公共代码配置融入到自己的组件中，此外还需要自己配置一个 facthData 的方法来指定获取的数据接口
 * @param {*} defaultData 传入的容器类型，默认为一个空数组
 * @returns 返回一个组件对象
 */
export default function (defaultData = []) {
    return {
        data() {
            return {
                // 是否正在加载中
                isLoading: true,
                // 存放数据
                data: defaultData,
            }
        },

        async created() {
            this.data = await this.fatchData();
            this.isLoading = false;
            // console.log(this.data);
        },

    }
}