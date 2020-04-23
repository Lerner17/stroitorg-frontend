<template>
  <div v-if="reactive" class="BaseButton" :class="classList" v-on="$listeners">
    <span class="BaseButton__content"><slot></slot></span>
    <span class="BaseButton__content--dubbed"><slot name="dubbed"></slot></span>
  </div>
  <div v-else class="BaseButton" :class="classList" v-on="$listeners">
    <span class="BaseButton__content"><slot></slot></span>
    <span class="BaseButton__content--dubbed"><slot></slot></span>
  </div>
</template>

<script>
import getClassListFromProps from '~/core/getClassListFromProps'
export default {
  props: {
    reactive: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'warn', 'danger'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['small', 'normal', 'large'].includes(value)
      }
    },
    dark: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList() {
      const obj = {
        color: this.color,
        size: this.size,
        dark: this.dark,
        disabled: this.disabled
      }
      return getClassListFromProps('BaseButton', obj)
    }
  }
}
</script>

<style>
.BaseButton {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  height: 50px;
  text-align: center;
  color: white;
  text-transform: uppercase;
  position: relative;
  transition: all 0.25s ease-in-out;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
  font-weight: 900;
}

.BaseButton--color--primary {
  background-color: transparent;
  border: 2px solid white;
}

.BaseButton--color--warn {
  background-color: #ffb426;
  border: 2px solid #ffb426;
}

.BaseButton--color--danger {
  background-color: #b62e26;
  border: 2px solid #b62e26;
}

.BaseButton__content--dubbed {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translate3d(0, 20%, 0);
  pointer-events: none;
}

.BaseButton:hover .BaseButton__content--dubbed {
  opacity: 1;
  transform: none;
}

.BaseButton:hover,
.BaseButton:active {
  background-color: #b62e26;
  border-color: #b62e26;
  color: white;
}

.BaseButton--color--danger:hover {
  background-color: #ffb426;
  border: 2px solid #ffb426;
}

.BaseButton__content {
  transition: transform 0.3s, opacity 0.3s;
  transition-property: transform, opacity;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-delay: 0s, 0s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.BaseButton:hover .BaseButton__content {
  opacity: 0;
  transform: translate3d(0, -50%, 0);
}
.BaseButton__content,
.BaseButton__content--dubbed {
  transition: transform 0.3s, opacity 0.3s;
  transition-property: transform, opacity;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-delay: 0s, 0s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.BaseButton--dark {
  color: black;
  border-color: black;
}

.BaseButton--size--normal {
  width: 230px;
  height: 50px;
}

.BaseButton--size--large {
  width: 228px;
  height: 75px;
}

.BaseButton--size--small {
  width: 150px;
  height: 50px;
}

.BaseButton--disabled {
  background-color: #ccc;
  border-color: #ccc;
  cursor: default;
}
</style>
