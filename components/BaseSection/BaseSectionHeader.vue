<template>
  <div class="BaseSectionHeader" :class="classList">
    <span class="BaseSectionHeader__row"></span>
    <h5><slot></slot></h5>
  </div>
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
      return getClassListFromProps('BaseSectionHeader', obj)
    }
  }
}
</script>

<style>
.BaseSectionHeader {
  position: relative;
  margin-right: auto;
  margin-left: auto;
  letter-spacing: 0.2em;
}

.BaseSectionHeader__row {
  position: absolute;
  top: 50%;
  right: calc(100% + 35px);
  width: 400%;
  font-size: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.137);
}
.BaseSectionHeader--dark .BaseSectionHeader__row {
  border-top: 1px solid rgba(255, 255, 255, 0.137);
}
.BaseSectionHeader--dark {
  color: white;
}
</style>
