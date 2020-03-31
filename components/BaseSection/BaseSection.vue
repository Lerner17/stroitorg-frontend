<template>
  <section class="BaseSection" :class="classList"><slot></slot></section>
</template>

<script>
import getClassListFromProps from '~/core/getClassListFromProps'
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      const obj = {
        dark: this.dark
      }
      return getClassListFromProps('BaseSection', obj)
    }
  }
}
</script>

<style>
.BaseSection {
  /* padding: 70px 75px 30px 75px; */
  background-color: #fff;
  min-height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.BaseSection--dark {
  background-color: #313131;
  color: white;
}
</style>
