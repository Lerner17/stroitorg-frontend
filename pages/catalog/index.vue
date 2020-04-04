<template>
  <div class="products">
    <base-product-card
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :old-price="product.old_price"
      :price="product.price"
      :image="product.image"
      :is-new="product.is_new"
      :is-sale="product.is_sale"
    ></base-product-card>
  </div>
</template>

<script>
import BaseProductCard from '@/components/BaseProductCard'
export default {
  components: { BaseProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Title 1',
          price: 7200,
          image:
            'https://livedemo00.template-help.com/wt_prod-23021/images/product-3-195x141.png',
          is_new: true,
          is_sale: false
        }
      ]
    }
  }
}
</script>

<style>
.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 100px;
  width: 100%;
  box-sizing: border-box;
}
</style>
