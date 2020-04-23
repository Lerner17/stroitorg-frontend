<template>
  <div class="Catalog">
    <div class="links_tree">
      <nuxt-link to="/">Главная</nuxt-link
      ><span class="mdi mdi-arrow-right"></span
      ><span class="links_tree--bold">Каталог</span>
    </div>
    <div class="Catalog__container">
      <div class="Catalog__container_sidebar">
        <h6 class="asside_title">Категории</h6>
        <ul class="list-marked-2">
          <nuxt-link
            v-for="c in categories"
            :key="c.id"
            tag="li"
            :to="`/catalog/category/${c.id}/${c.slug}`"
            >{{ c.name }}</nuxt-link
          >
        </ul>
        <div class="serach-form">
          <input
            v-model="search"
            type="text"
            class="serach-form__input"
            placeholder="Поиск..."
          />
          <button class="search-form__btn mdi mdi-magnify"></button>
        </div>
      </div>
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
        />
      </div>
    </div>
    <BasePaggination
      :size="10"
      :current-page="$route.params.page ? $route.params.page : 1"
      @change="changePage"
    />
  </div>
</template>

<script>
import BaseProductCard from '@/components/BaseProductCard'
import BasePaggination from '@/components/BasePaggination'
export default {
  components: { BaseProductCard, BasePaggination },
  async asyncData({ $axios }) {
    const data = await $axios.$get('/catalog/products/')
    return { products: data.results }
    // await $axios.$get('/catalog/categories/').then((data) => {
    //   // data.categories = data
    // })
  },
  data() {
    return {
      // products: [],
      categories: [],
      search: ''
    }
  },
  mounted() {
    // this.$axios.$get('/catalog/products/').then((data) => {
    //   this.products = data.results
    // })
    // this.$axios.$get('/catalog/categories/').then((data) => {
    //   this.categories = data
    // })
  },
  methods: {
    changePage(page) {
      this.$axios
        .$get(`/catalog/products`, { params: { page } })
        .then((data) => {
          this.products = data.results
        })
        .catch()
    }
  }
}
</script>

<style>
.links_tree {
  width: 100%;
  color: #777777;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.links_tree > a {
  color: #777777;
}

.links_tree--bold {
  font-size: 15px;
  line-height: 1.6;
  font-weight: 600;
  color: black;
}

.Catalog__container {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 50px;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding-top: 90px;
}

.Catalog__container_sidebar {
  width: 300px;
  box-sizing: border-box;
}

.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* padding: 20px 100px; */
  width: calc(100% - 300px);
  /* width: 100%; */
  box-sizing: border-box;
}

.asside_title {
  font-weight: 400;
  text-transform: none;
  padding-bottom: 15px;
  border-bottom: 1px solid #e1e1e1;
  letter-spacing: 0.1em;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  color: #151515;
}

.serach-form {
  margin-top: 20px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.serach-form__input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 25px;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.075em;
  color: #777777;
  background-color: #ffffff;
  background-image: none;
  border-radius: 0;
  -webkit-appearance: none;
  transition: 0.3s ease-in-out;
  border: 1px solid #e1e1e1;
  padding-right: 60px;
}

.search-form__btn {
  position: absolute;
  text-align: center;
  padding: 0 5px;
  right: 0;
  top: 0;
  height: 60px;
  width: 60px;
  font-size: 20px;
  line-height: 60px;
  border: none;
  outline: none;
  box-shadow: none;
  background: transparent;
  cursor: pointer;
  transition: all 250ms ease;
}

.search-form__btn:hover {
  color: #b62e26;
}

@media (max-width: 1020px) {
  .Catalog__container_sidebar {
    width: 100%;
  }
  .Catalog__container {
    display: block;
  }
}
</style>
