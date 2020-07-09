<template>
  <div class="Cart">
    <BaseModalCart :is-show="isShow" @close="closeModalCart" />
    <div class="links_tree">
      <nuxt-link to="/">Главная</nuxt-link
      ><span class="mdi mdi-arrow-right"></span
      ><nuxt-link to="/catalog">Каталог</nuxt-link
      ><span class="mdi mdi-arrow-right"></span><span>Имя товара</span>
    </div>
    <div class="Cart__container">
      <div class="table_responsive">
        <table v-if="cart.length > 0" class="table-custom table-cart">
          <thead>
            <tr>
              <th>Имя продукта</th>
              <th>Цена за поддон</th>
              <th>количество</th>
              <th>Итого</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>
                <img :src="item.image" alt="" width="146" height="132" />
                <nuxt-link to="" class="table-cart__title">
                  {{ item.title }}
                </nuxt-link>
              </td>
              <td>{{ item.price }} ₽</td>
              <td>
                <span class="countButton" @click="removeCount(item)">-</span
                >{{ item.quantity
                }}<span class="countButton" @click="addCount(item)">+</span>
              </td>
              <td>{{ item.price * item.quantity }} ₽</td>
              <td>
                <span class="mdi mdi-close" @click="deleteItem(item)"></span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else style="text-align: center;">Корзина пустая</div>
        <div class="Car__actions">
          <div class="total">Итого</div>
          <span class="total_sum ml-8">{{ total }} ₽</span>
          <base-button
            :disabled="!cart.length > 0"
            class="ml-5"
            color="danger"
            @click="isShow = true"
            >Оформить заказ</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@/components/BaseButton.vue'
import BaseModalCart from '@/components/BaseModalCart'
export default {
  components: { BaseButton, BaseModalCart },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/cartItems']
    },
    total() {
      return this.$store.getters['cart/cartValue']
    }
  },
  methods: {
    ...mapActions({
      removeItemInCart: 'cart/removeItemInCart',
      updateCart: 'cart/updateCart',
      removeOneItem: 'cart/removeOneItem'
    }),
    addCount(item) {
      console.log(1)
      this.updateCart(item)
    },
    removeCount(item) {
      this.removeOneItem(item)
    },
    closeModalCart() {
      this.isShow = false
    },
    deleteItem(item) {
      this.removeItemInCart(item)
    }
  }
}
</script>

<style>
.Cart__container {
  margin: 0 120px;
  margin-top: 50px;
}
.table_responsive {
  margin: 20px;
}

.table-cart {
  text-align: center;
  text-transform: uppercase;
}

.table-cart th {
  padding: 23px 24px 23px 30px;
  color: #777777;
  font-size: 18px;
}

.table-cart tr {
  text-align: center;
  display: table-row;
  vertical-align: inherit;
}

.table-cart td {
  display: table-cell;
  padding: 26px 12px 14px 30px;
  text-transform: uppercase;
  font-size: 24px;
  /* display: flex; */
}
.table-cart td:first-child > * {
  display: inline-block;
  vertical-align: middle;
}

.table-cart th:first-child,
.table-cart td:first-child {
  text-align: left;
}

.table-cart__title {
  font-weight: 500;
  letter-spacing: 0.1em;
  padding-left: 10px;
}

.Cart {
  max-width: 1920px;
  width: 100%;
  padding-bottom: 80px;
}

.links_tree {
  width: 100%;
  color: #777777;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #f3f3f3;
}

.links_tree > a {
  color: #777777;
}

.links_tree > span {
  font-size: 15px;
  line-height: 1.6;
  font-weight: 600;
  color: black;
}

.table-custom {
  width: 100%;
  max-width: 100%;
  text-align: left;
  background: #fff;
  border-collapse: collapse;
}
.table-cart {
  text-align: center;
  text-transform: uppercase;
  border: 1px solid #e1e1e1;
}

.Car__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1920px;
  margin-top: 50px;
  text-align: right;
}

.total {
  font-size: 18px;
  color: #9b9b9b;
}

.total_sum {
  font-size: 36px;
  font-weight: 500;
  color: black;
}

.countButton {
  width: 20px;
  height: 40px;
  background: #f3f3f3;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  margin: 10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

@media screen and (max-width: 1120px) {
  .Cart__container {
    margin: 0;
  }
}
</style>
