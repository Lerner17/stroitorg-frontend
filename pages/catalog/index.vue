<template>
  <div class="products">
    <base-product-card
      v-for="product in products"
      :id="product.id"
      :key="product.id"
      :name="product.name"
      :new-price="product.old_price"
      :price="product.price"
      :image="product.preview"
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
      products: []
    }
  },
  mounted() {
    this.$axios.$get('/catalog/products/').then((data) => {
      this.products = data
    })
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
