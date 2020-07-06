<template>
  <div v-if="isShow" class="BaseModal">
    <div class="BaseModal__window">
      <span class="BaseModal__close mdi mdi-close" @click="close"></span>
      <h1 class="BaseModal__title">Форма заказа</h1>
      <hr />
      <form class="ordering-form">
        <input type="text" name="name" placeholder="Имя" />
        <input type="text" name="phone" placeholder="Телефон" />
        <base-button color="warn">Оформить</base-button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
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
      return this.price * this.count
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
    addCount() {
      ++this.count
      console.log(this.item)
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

.ordering-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.ordering-form input {
  height: 40px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 90%;
  margin-bottom: 10px;
}
</style>
