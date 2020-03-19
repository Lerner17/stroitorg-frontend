<template>
  <div class="BaseToolbar">
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
  </div>
</template>

<script>
export default {
  name: 'BaseToolbar'
}
</script>

<style>
.BaseToolbar {
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #313131;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;
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
.menu__item {
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  padding: 22px;
  font-weight: 700;
}
</style>
