<template>
  <div class="BaseToolbar">
    <div class="burger"><span class="mdi mdi-menu"></span></div>
    <span class="logo">STROITORG</span>
    <nav>
      <ul class="menu">
        <nuxt-link tag="li" to="/" class="menu__item">Главная</nuxt-link>
        <nuxt-link tag="li" to="/news" class="menu__item">Новости</nuxt-link>
        <nuxt-link tag="li" to="/catalog" class="menu__item">Каталог</nuxt-link>
        <nuxt-link tag="li" to="/about" class="menu__item">
          О компании
        </nuxt-link>
      </ul>
    </nav>
    <div class="BaseToolBar__info">
      <div class="info__contacts">
        <a href="tel:" class="phone">+7 999 111 22 32</a>
        <a href="mailto:">example@mail.ru</a>
      </div>
      <BaseButton
        class="ml-4"
        color="primary"
        style="width: 150px; font-size: 25px"
      >
        <span class="mdi mdi-cart"></span>
        <span>0</span>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton }
}
</script>

<style>
@media screen and (max-width: 998px) {
  .BaseToolbar > nav {
    display: none;
  }
  .burger {
    display: flex;
  }
}

.burger {
  display: none;
  font-size: 48px;
  color: white;
  cursor: pointer;
}

.BaseToolbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  background-color: #313131;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
  border-bottom: 6px solid #ffb426;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 20;
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
.nuxt-link-exact-active {
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
</style>
