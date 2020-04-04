export default {
  UPDATE_CART(state, { item, quantity, isAdd }) {
    const record = state.cart.find((element) => element.id === item.id)
    if (record) {
      if (isAdd) {
        record.quantity += quantity
      } else {
        record.quantity = quantity
      }
    } else {
      state.cart.push({
        ...item,
        quantity
      })
    }
  },
  REMOVE_CART_ITEM(state, { item }) {
    const record = state.cart.find((element) => element.id === item.id)
    state.cartItems.splice(state.cartItems.indexOf(record), 1)
  },
  REMOVE_ALL(state) {
    state.cartItems = []
  }
}
