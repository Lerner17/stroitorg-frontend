<template>
  <div class="BaseToolbar">
    <BaseDrawer :show="isDrawerShow" @onLinkEnter="isDrawerShow = false" />
    <div class="BaseToolbar__content">
      <div class="BaseToolbar__wrapper">
        <button class="burger" @click="isDrawerShow = !isDrawerShow">
          <span v-if="!isDrawerShow" class="mdi mdi-menu"></span>
          <span v-else class="mdi mdi-close"></span>
        </button>
        <span class="logo">СТРОЙТОРГ</span>
        <nav>
          <ul class="menu">
            <nuxt-link tag="li" to="/" class="menu__item">Главная</nuxt-link>
            <nuxt-link tag="li" to="/news" class="menu__item"
              >Новости</nuxt-link
            >
            <nuxt-link tag="li" to="/catalog" class="menu__item"
              >Каталог</nuxt-link
            >
            <nuxt-link tag="li" to="/about" class="menu__item">
              О компании
            </nuxt-link>
          </ul>
        </nav>
        <div class="BaseToolBar__info">
          <div class="info__contacts">
            <a href="tel:" class="phone">+7 999 111 22 32</a>
            <a href="mailto:" class="email">example@mail.ru</a>
          </div>
          <nuxt-link to="/cart">
            <BaseButton
              class="ml-4 xs-cart"
              color="primary"
              style="width: 150px; font-size: 25px"
              reactive
            >
              <span class="mdi mdi-cart"></span>
              <span>{{ cartCount }}</span>
              <template v-slot:dubbed>
                <span class="mdi mdi-cart"></span>
                <span>{{ cartCount }}</span>
              </template>
            </BaseButton>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import BaseDrawer from '@/components/BaseDrawer'
export default {
  components: { BaseButton, BaseDrawer },
  data() {
    return {
      isDrawerShow: false
    }
  },
  computed: {
    cartCount() {
      return this.$store.getters['cart/cartItems'].reduce((total, item) => {
        total += item.quantity
        return total
      }, 0)
    }
  }
}
</script>

<style>
.burger {
  display: none;
  font-size: 48px;
  color: white;
  cursor: pointer;
  background: none;
  border: none;
}
.BaseToolbar {
  height: 120px;
}
.BaseToolbar__content {
  width: 100%;
  height: 120px;
  background-color: #313131;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 20;
}

.BaseToolbar__wrapper {
  background-color: #313131;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
}

.logo {
  max-width: 230px;
  height: auto;
  /*vertical-align: middle;*/
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  /*justify-self: center;*/
}
.menu {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.menu > li:before {
  background: none;
}

.menu__item {
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 22px;
  font-weight: 700;
  cursor: pointer;
}
.menu__item:hover {
  color: #ffb426;
}

.menu .nuxt-link-exact-active {
  color: #ffb426;
}

.BaseToolBar__info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.info__contacts {
  display: flex;
  flex-direction: column;
}
.phone {
  font-weight: 500;
  color: white;
  font-size: 16px;
}
.cart {
  border: 2px solid white;
  width: 150px;
  height: 50px;
}

.cart:hover {
  border: 2px solid #b4312c;
  background-color: #b4312c;
}

.cart span {
  font-size: 25px;
  color: white;
}

@media screen and (max-width: 998px) {
  .BaseToolbar__wrapper > nav {
    display: none;
  }
  .burger {
    display: flex;
  }
}

@media screen and (max-width: 547px) {
  .BaseToolbar__content {
    height: 70px;
  }

  .BaseToolbar__wrapper {
    padding-left: 5px;
    padding-right: 5px;
  }

  .BaseToolbar {
    height: 70px;
  }
}

@media screen and (max-width: 625px) {
  .phone,
  .email {
    display: none;
  }

  .xs-cart {
    border: none;
    width: 50px;
  }
}
</style>
