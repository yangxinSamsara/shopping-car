import * as types from './mutations_types'
const mutations = {
    [types.CHECK_DB](state, { id }) {
        // console.log(id);
        state.currIndex = -1;
        let carList = state.carList;
        if (carList.length) {
            for (let i = 0; i < carList.length; i++) {
                if (carList[i].id == id) {
                    state.currIndex = i;
                    break;
                }
            }
        }
    },

    [types.CREATE_DB](state, shop) {
        state.carList.push(shop)
    },

    [types.ADD_DB](state) {
        state.carList[state.currIndex].num = parseInt(state.carList[state.currIndex].num);
        state.carList[state.currIndex].num++
    },

    [types.REDUCE_DB](state) {
        state.carList[state.currIndex].num = parseInt(state.carList[state.currIndex].num);
        state.carList[state.currIndex].num--;
        if (state.carList[state.currIndex].num == 0) {
            state.carList.splice(state.currIndex, 1)
        }
    },

    [types.UPDATE_LOCAL](state) {
        localStorage.setItem('carList', JSON.stringify(state.carList))
    },

    [types.UPDATE_CURR_SHOP_STATUS](state,{index=-1}){
        state.currIndex=index
    },

    [types.DELETE_DB](state){
        if(state.currIndex>=0){
            state.carList[state.currIndex].num=0
            state.carList.splice(state.currIndex,1)
        }
    },

    [types.CLEAR_LOCAL](state) {
        state.carList.forEach(item => {
            item.num = 0
        });
        state.carList = [];
        localStorage.removeItem('carList')
    }
}
export default mutations;