export default {
  cartItems(state) {
    return state.cart
  },
  cartValue(state) {
    let res = 0
    state.cart.map((item) => {
      res += item.price * item.quantity
    })
    return res
  }
}
