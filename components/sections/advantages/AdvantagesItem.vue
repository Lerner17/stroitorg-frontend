<template>
  <div style="margin-bottom: 10px; width: 100%;">
    <div class="adv_item">
      <span
        v-if="!isShow"
        style="font-size: 20px; width: 40px; height 40px;"
        class="mdi mdi-plus"
        @click="show"
      ></span>
      <span
        v-else
        style="font-size: 20px; width: 40px; height 40px;"
        class="mdi mdi-minus"
        @click="show"
      ></span>
      {{ title }}
    </div>
    <transition name="adv_content">
      <div v-if="isShow" class="adv_content">
        <p>
          {{ description }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
.adv_item {
  padding: 17px 20px 15px 10px;
  width: 100%;
  font-weight: 500;
  letter-spacing: 0.1em;
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 20px;
}

.adv_content {
  border-top: 3px solid #ffb426;
  background-color: rgba(255, 255, 255, 0.04);
  padding: 20px 10px 10px;
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.3);
}

.adv_content-enter-active,
.adv_content-leave-active {
  transition: 0.2s;
}
</style>
