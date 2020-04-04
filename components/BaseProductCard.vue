<template>
  <div class="products__item pt-5">
    <span v-if="isNew" class="label new">NEW</span>
    <span v-if="isSale" class="label sale">SALE</span>
    <img :src="image" class="products__item--image" />
    <!-- <img v-else src="/images/no_image.png" class="products__item--image" /> -->
    <div class="products__item_title">{{ title }}</div>
    <div class="products__item--price-wrap">
      <div v-if="isSale" class="products__item--price-old">
        {{ old_price }}р.
      </div>
      <div class="products__item--price">{{ price }}р.</div>
    </div>
    <div style="width: 100%;">
      <BaseButton style="font-size: 12px;" class="ml-5 mr-5 mb-2" color="danger"
        >Добавить в корзину</BaseButton
      >
      <nuxt-link :to="`/catalog/${id}`">
        <BaseButton style="font-size: 12px;" class="ml-5 mr-5 mb-5" color="warn"
          >Посмотреть товар</BaseButton
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  name: 'BaseProductCard',
  components: { BaseButton },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: '/images/no_image.png'
    },
    oldPrice: {
      type: Number,
      default: null
    },
    price: {
      type: Number,
      required: true
    },
    isNew: {
      type: Boolean,
      default: false
    },
    isSale: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.products__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 270px;
  width: 100%;
  min-height: 330px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  margin: 15px;
  overflow-x: hidden;
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
  align-self: flex-start;
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
.products__item_title {
  /* display: inline-block; */
  width: 206px;
  height: 24px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.025em;
  text-align: center;
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
