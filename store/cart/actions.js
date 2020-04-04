export default {
  updateCart({ commit }, { item, quantity, isAdd }) {
    commit('UPDATE_CART', { item, quantity, isAdd })
  },
  removeItemInCart({ commit }, { item }) {
    commit('REMOVE_CART_ITEM', { item })
  },
  removeAllItemInCart({ commit }) {
    commit('REMOVE_ALL')
  }
}
