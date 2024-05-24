//购物车相关方法
export default {
    namespaced: true,
    actions: {
        //移除购物车
        removeshopcar(context, id) {
            context.commit('REMOVE_SHOPCAR', id)
        },
        //添加购物车
        addshopcar(context, obj) {
            context.commit('ADD_SHOPCAR', obj)
        },
        //更新购物车
        updatashopcar(context, shopcarList) {
            context.commit('UPDATA_SHOPCAR', shopcarList)
        }
    },
    mutations: {
        //移除购物车
        REMOVE_SHOPCAR(state, id) {
            for (let i = 0; i < state.shopcarList.length; i++) {
                const temp = state.shopcarList[i];
                if (temp.id == id) {
                    state.shopcarList.splice(i, 1);
                }
            }
        },
        //添加购物车
        ADD_SHOPCAR(state, obj) {
            for (var i in state.shopcarList) {
                if (state.shopcarList[i].id == obj.id) {//在数组里找到这个id
                    state.shopcarList[i].number++
                    return
                }
            }
            obj.number++
            state.shopcarList.push(obj)
        },
        //更新购物车
        UPDATA_SHOPCAR(state) {
            state.shopcarList = []
        }
    },
    state: {
        shopcarList: []
    },
    getters: {

    },
}