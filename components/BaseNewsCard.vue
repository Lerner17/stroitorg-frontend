<template>
  <div class="content__item">
    <span class="content__item__date">{{ date | formatDate }}</span>
    <img v-if="image" :src="image" />
    <img v-else src="/images/no_image.png" />
    <n-link :to="`${slug}`" append class="content__item__title">{{
      title
    }}</n-link>
  </div>
</template>

<script>
export default {
  name: 'BaseNewsCard',
  props: {
    slug: {
      type: Number || String,
      default: null
    },
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
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 340px;
  max-width: 360px;
  width: 100%;
  /* height: 365px; */
  height: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 15px;
  overflow: hidden;
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
.content__item > img {
  width: 100%;
  height: 209px;
  position: relative;
  z-index: -1;
  transition: 0.25s;
  object-fit: cover;
  object-position: center center;
}
.content__item__title {
  padding: 37px 48px;
  /* background: #ffffff; */
  align-self: center;
  letter-spacing: 0.075em;
  font-size: 19px;
}
/*
.content__item:nth-child(2n) {
  overflow: hidden;
} */
.content__item:nth-child(2n):before {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(54, 102, 138, 0.15) 0%,
    rgba(49, 89, 120, 0.33) 28%,
    rgba(41, 66, 88, 0.7) 76%,
    rgba(37, 54, 72, 0.85) 100%
  );
}

.content__item:hover img {
  transform: scale(1.2);
}

.content__item:nth-child(2n) .content__item__title {
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  color: white;
}

/* background: linear-gradient(to bottom, rgba(54, 102, 138, 0.15) 0%, rgba(49, 89, 120, 0.33) 28%, rgba(41, 66, 88, 0.7) 76%, rgba(37, 54, 72, 0.85) 100%); */

.content__item:nth-child(2n) img {
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
