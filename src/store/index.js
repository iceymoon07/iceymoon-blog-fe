import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * @description 登录状态 store
 */

const user = {
    namespaced: true,
    state: {
        // 是否已登录
        isLogin: false
    },
    mutations: {
        setLoginStatus(state, status) {
            state.isLogin = status
        }
    }
}

export default new Vuex.Store({
    modules: {
        user
    }
})