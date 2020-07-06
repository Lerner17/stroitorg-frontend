export default {
  updateCart({ commit }, item) {
    commit('UPDATE_CART', item)
  },
  updateCartWithPayload({ commit }, payload) {
    commit('UPDATE_CART_WITH_PAYLOAD', payload)
  },
  removeItemInCart({ commit }, item) {
    console.log(item)
    commit('REMOVE_CART_ITEM', { item })
  },
  removeAllItemInCart({ commit }) {
    commit('REMOVE_ALL')
  }
}
