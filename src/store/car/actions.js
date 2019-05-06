import * as types from '../car/mutations_types'
const actions = {
    check_db: ({ commit }, obj) => {
        commit(types.CHECK_DB, obj)
    },
    create_db: ({ commit }, { shop }) => {
        commit(types.CREATE_DB, shop);
        commit(types.UPDATE_LOCAL)
    },
    add_db: ({ commit }) => {
        commit(types.ADD_DB);
        commit(types.UPDATE_LOCAL)
    },
    reduce_db: ({ commit }) => {
        commit(types.REDUCE_DB)
        commit(types.UPDATE_LOCAL)
    },
    update_local: ({ commit }) => {
        commit(types.UPDATE_LOCAL)
    },

    update_curr_shop_status: ({ commit },obj) => {
        commit(types.UPDATE_CURR_SHOP_STATUS, obj)
    },

    delete_db:({commit})=>{
        commit(types.DELETE_DB)
        commit(types.UPDATE_LOCAL)
    },


    clear_local: ({ commit }) => {
        commit(types.CLEAR_LOCAL)
    }
}
export default actions;