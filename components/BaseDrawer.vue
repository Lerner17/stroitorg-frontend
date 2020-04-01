<template>
  <transition name="drawer">
    <div v-if="show" class="BaseDrawer pt-5">
      <nav>
        <ul class="BaseDrawer__menu">
          <nuxt-link tag="li" to="/" class="BaseDrawer__item"
            >Главная</nuxt-link
          >
          <nuxt-link tag="li" to="/news" class="BaseDrawer__item"
            >Новости</nuxt-link
          >
          <nuxt-link tag="li" to="/catalog" class="BaseDrawer__item"
            >Каталог</nuxt-link
          >
          <nuxt-link tag="li" to="/about" class="BaseDrawer__item">
            О компании
          </nuxt-link>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.BaseDrawer {
  position: fixed;
  left: 0;
  z-index: 12;
  background-color: #fff;
  width: 80%;
  max-width: 400px;
  height: 100%;
  box-sizing: border-box;
}
.BaseDrawer__menu {
  width: 100%;
  margin-top: 85px;
}

.BaseDrawer__item {
  width: 100%;
  height: 52px;
  line-height: 52px;
  color: black;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 16px;
}

.BaseDrawer__menu .nuxt-link-exact-active {
  background-color: #b62e26;
  color: white;
}

.drawer-enter-active {
  animation: show-drawer 0.25s;
}

.drawer-leave-active {
  animation: show-drawer 0.25s reverse;
}

@media screen and (min-width: 548px) {
  .BaseDrawer__menu {
    margin-top: 120px;
  }
}

@keyframes show-drawer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
