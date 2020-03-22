<template>
  <div class="content__item">
    <span class="content__item__date">{{ date }}</span>
    <img v-if="image" :src="image" />
    <img v-else src="/images/no_image.png" />
    <div class="content__item__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'BaseNewsCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    // eslint-disable-next-line vue/require-default-prop
    date: String,
    // eslint-disable-next-line vue/require-default-prop
    image: String
  }
}
</script>

<style>
.content__item {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  height: 365px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 15px;
}
.content__item__date {
  position: absolute;
  border-radius: 40px;
  background: orange;
  color: white;
  margin: 25px 25px;
  font-size: 14px;
  height: 26px;
  width: 120px;
  text-align: center;
  line-height: 25px;
}
img {
  width: 100%;
  height: auto;
}
.content__item__title {
  padding: 37px 48px;
  background: #ffffff;
  align-self: center;
}
</style>
