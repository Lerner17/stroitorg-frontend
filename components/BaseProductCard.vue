<template>
  <div class="products__item">
    <span v-if="is_new" class="label new">NEW</span>
    <span v-if="is_sale" class="label sale">SALE</span>
    <img v-if="image" :src="image" class="products__item--image" />
    <img v-else src="/images/no_image.png" class="products__item--image" />
    <div class="products__item--title">{{ title }}</div>
    <div class="products__item--price-wrap">
      <div v-if="is_sale" class="products__item--price-old">
        {{ old_price }}р.
      </div>
      <div class="products__item--price">{{ price }}р.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseProductCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String,
    // eslint-disable-next-line vue/require-default-prop
    image: String,
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    old_price: Number,
    // eslint-disable-next-line vue/require-default-prop
    price: Number,
    // eslint-disable-next-line vue/prop-name-casing
    is_new: Boolean,
    // eslint-disable-next-line vue/prop-name-casing
    is_sale: Boolean
  }
}
</script>

<style>
.products__item {
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  max-width: 270px;
  width: 100%;
  height: 330px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 15px;
}
.label {
  width: 76px;
  height: 29px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 29px;
  transform: skew(-22deg);
  transform-origin: 50% 0;
}
.new {
  background: #b62e26;
}
.sale {
  background: #ffb426;
}
.products__item--image {
  display: inline-block;
  width: 195px;
  height: 141px;
  max-width: 100%;
  vertical-align: center;
  margin: auto;
}
.products__item--title {
  display: inline-block;
  width: 206px;
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin: 8px auto 0;
}
.products__item--price-wrap {
  width: 206px;
  height: 24px;
  margin: 6px auto 32px;
}
.products__item--price {
  display: inline-block;
  text-align: left;
  color: #b62e26;
}
.products__item--price-old {
  display: inline-block;
  color: rgba(21, 21, 21, 0.5);
  text-decoration: line-through;
}
</style>
