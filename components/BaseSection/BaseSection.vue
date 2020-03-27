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
}
</style>
