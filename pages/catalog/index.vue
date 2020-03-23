<template>
  <div class="products">
    <base-product-card
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :old_price="product.old_price"
      :price="product.price"
      :image="product.image"
      :is_new="product.is_new"
      :is_sale="product.is_sale"
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
        },
        {
          id: 2,
          title: 'Title 2',
          old_price: 21110,
          price: 19990,
          image:
            'https://livedemo00.template-help.com/wt_prod-23021/images/product-2-195x141.png',
          is_new: false,
          is_sale: true
        },
        {
          id: 3,
          title: 'Title 3',
          price: 9966,
          is_new: false,
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
