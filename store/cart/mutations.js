export default {
  UPDATE_CART(state, good) {
    const indexCartInState = state.cart.findIndex((item) => good.id === item.id)
    // console.log(good, indexCartInState)
    if (indexCartInState === -1) {
      state.cart.push({ ...good, quantity: 1 })
      return
    }
    ++state.cart[indexCartInState].quantity
  },
  UPDATE_CART_WITH_PAYLOAD(state, payload) {
    console.log(payload)
    return state
    // const indexCartInState = state.cart.findIndex((item) => good.id === item.id)
    // // console.log(good, indexCartInState)
    // if (indexCartInState === -1) {
    //   state.cart.push({ ...good, quantity: 1 })
    //   return
    // }
    // ++state.cart[indexCartInState].quantity
  },
  REMOVE_CART_ITEM(state, { item }) {
    const record = state.cart.find((element) => element.id === item.id)
    state.cartItems.splice(state.cartItems.indexOf(record), 1)
  },
  REMOVE_ALL(state) {
    state.cartItems = []
  }
}
