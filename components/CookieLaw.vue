<template>
  <transition name="slideFromBottom">
    <div v-if="isOpen" class="Cookie">
      <div class="Cookie__content">
        <div>{{ message }}</div>
        <button class="Cookie__button" @click="acceptCookie">
          Принять cookie
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default:
        'Мы используем файлы cookie, чтобы улучшить взаимодействие сайта с пользователем. Посетите раздел «Политика использования файлов cookie» для получения дополнительной информации. Нажимая на кнопку «Принять cookie», вы подтверждаете свое согласие с нашей политикой использования файлов cookie.'
    },
    storageName: {
      type: String,
      default: 'cookie:accepted'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    if (!this.getVisited()) {
      this.isOpen = true
    }
  },
  methods: {
    getVisited() {
      let visited = false
      visited = this.$cookies.get('accept')
      if (typeof visited === 'string') {
        visited = JSON.parse(visited)
      }
      return !(visited === null || visited === undefined)
    },
    acceptCookie() {
      this.$cookies.set('accept', true, {
        maxAge: 60 * 60 * 24 * 7
      })
      this.isOpen = false
    }
  }
}
</script>

<style>
.Cookie {
  position: fixed;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 9999;
  width: 100%;
  bottom: 0;
  background-color: #313131;
  color: white;
  border-bottom: 2px solid #ffb426;
  padding: 20px 20px;
}

.Cookie__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  padding: 10px;
}

.Cookie__button {
  border: none;
  background-color: #b62e26;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  white-space: nowrap;
}

.slideFromBottom-enter,
.slideFromBottom-leave-to {
  transform: translate(0px, 12.5em);
}
.slideFromBottom-enter-to,
.slideFromBottom-leave {
  transform: translate(0px, 0px);
}
.slideFromBottom-enter-active,
.slideFromBottom-leave-active {
  transition: transform 0.4s ease-in;
}

@media screen and (max-width: 710px) {
  .Cookie__content {
    flex-direction: column;
  }
  .Cookie__button {
    margin: 10px;
  }
}
</style>
