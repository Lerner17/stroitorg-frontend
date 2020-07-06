<template>
  <div v-if="isShow" class="BaseModal">
    <div class="BaseModal__window">
      <span class="BaseModal__close mdi mdi-close" @click="close"></span>
      <div class="BaseModal__title">Добавить в корзину</div>
      <hr />
      <div class="BaseModal__content">
        <div class="BaseModal__item">
          <div class="BaseModal__item_title">{{ item.name }}</div>
          <div v-if="item.isDiscount" class="BaseModal__item_price">
            <s>{{ item.price }}</s
            ><span>{{ item.discount }}</span>
          </div>
          <div class="BaseModal__item_price">{{ item.price }} ₽</div>
        </div>
        <div class="actions_counter">
          <div class="counter_count">{{ count }}</div>
          <div class="counter_buttons">
            <button @click="addCount">+</button>
            <button @click="removeCount">-</button>
          </div>
          <span class="BaseModal_multi">{{ total }} ₽</span>
        </div>
        <div class="BaseModal__actions">
          <BaseButton color="warn" @click.prevent="close"
            >Продолжить покупки</BaseButton
          >
          <nuxt-link to="/cart">
            <BaseButton color="danger">Перейти в корзину</BaseButton></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseButton from '@/components/BaseButton'
export default {
  components: { BaseButton },
  props: ['item', 'isShow'],
  data() {
    return {
      count: 1
    }
  },
  computed: {
    total() {
      return this.item.price * this.count
    }
  },
  watch: {
    isShow: {
      handler(value) {
        if (typeof document === 'undefined') {
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      updateCart: 'cart/updateCart'
    }),
    addCount() {
      ++this.count
      this.updateCart(this.item)
    },
    removeCount() {
      if (this.count > 1) {
        --this.count
      }
    },
    close() {
      this.$emit('close')
      // this.$emit('update:isShow', false)
    }
  }
}
</script>

<style>
.BaseModal {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.BaseModal__window {
  width: 50%;
  min-width: 350px;
  background-color: #fff;
  position: relative;
}

.BaseModal__close {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  cursor: pointer;
}

.BaseModal__window hr {
  border-color: rgba(0, 0, 0, 0.09);
}

.BaseModal__title {
  width: 100%;
  font-size: 28px;
  padding: 20px;
}

.BaseModal__content {
  padding: 20px;
}

.BaseModal__item_title {
  font-size: 24px;
  margin-bottom: 10px;
}

.BaseModal__item_price {
  color: gray;
  font-size: 20px;
}

.BaseModal_multi {
  align-self: center;
  margin-left: 50px;
  font-size: 34px;
}

.BaseModal__actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap;
}

.actions_counter {
  display: flex;
  flex-direction: row;
}

.counter_count {
  background: #f3f3f3;
  font-weight: 400;
  font-size: 24px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.counter_buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 7px;
}

.counter_buttons button {
  width: 25px;
  height: 25px;
  font-size: 18px;
  line-height: 25px;
  background: #f3f3f3;
  border: none;
  outline: none;
}
</style>
