<template>
  <div class="GoodDetail">
    <div class="parallax parallax--mask">
      <h3 style="postition: relative; z-index: 1;">Product name</h3>
      <div class="header_parallax_row"></div>
    </div>
    <div class="links_tree">
      <nuxt-link to="/">Главная</nuxt-link
      ><span class="mdi mdi-arrow-right"></span
      ><nuxt-link to="/catalog">Каталог</nuxt-link
      ><span class="mdi mdi-arrow-right"></span><span>{{ product.name }}</span>
    </div>
    <div class="good">
      <div class="good_view">
        <hooper style="height: auto;">
          <slide
            v-for="image in product.images"
            :key="image.id"
            style="width: 100%;"
          >
            <img class="good__image" :src="image.image" :alt="product.title" />
          </slide>
        </hooper>
      </div>
      <div class="good_info">
        <h4>{{ product.name }}</h4>
        <div class="good_info_ctn">
          <span class="good_price">{{ product.price | currency }}</span>
        </div>
        <p>
          {{ product.description }}
        </p>
        <hr />
        <div class="characteristics">
          <div>
            Категория:
            <span class="characteristics__span">{{
              product.category.name
            }}</span>
          </div>
          <div v-for="p of parameters" :key="p.id">
            {{ p.name }}:
            <span class="characteristics__span">{{ p.value }}</span>
          </div>
          <div class="good_actions">
            <div class="actions_counter">
              <div class="counter_count">{{ count }}</div>
              <div class="counter_buttons">
                <button @click="addCount()">+</button>
                <button @click="removeCount()">-</button>
              </div>
            </div>
            <base-button
              class="ml-5"
              size="large"
              color="danger"
              @click="addToCart()"
              >Добавить в корзину</base-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import BaseButton from '@/components/BaseButton'
export default {
  components: { Hooper, Slide, BaseButton },
  data() {
    return {
      count: 1,
      product: {}
    }
  },
  mounted() {
    this.$axios
      .$get(`catalog/products/${this.$route.params.id}`)
      .then((data) => {
        this.product = data
      })
  },
  methods: {
    addCount() {
      ++this.count
    },
    removeCount() {
      if (this.count > 1) {
        --this.count
      }
    },
    addToCart() {
      this.$store.dispatch({ type: 'updateCartWithPayload', count: 10 })
    }
  }
}
</script>

<style>
.GoodDetail {
  max-width: 1920px;
  width: 100%;
  padding-bottom: 80px;
}

.links_tree {
  width: 100%;
  color: #777777;
  text-align: center;
  padding-top: 20px;
  padding-buttom: 20px;
}

.links_tree > a {
  color: #777777;
}

.links_tree > span {
  font-size: 15px;
  line-height: 1.6;
  font-weight: 600;
  color: black;
}

.good {
  padding-top: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.good__image {
  max-width: 500px;
  width: 100%;
}

.good__view {
  max-width: 532px;
  width: 100%;
  height: auto;
}

.good_price {
  font-size: 24px;
  letter-spacing: 0.05em;
  color: #b62e26;
  margin-right: 10px;
}

.good_info {
  padding: 15px;
  width: auto;
  margin-left: 20px;
}

.good_info_ctn {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
}

.good_info p {
  margin-top: 24px;
  font-size: 19px;
  letter-spacing: 0.05em;
  max-width: 570px;
  margin-bottom: 14px;
}

.characteristics {
  margin-top: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}

.characteristics__span {
  color: #777777;
}

.good_actions {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 25px;
}

.actions_counter {
  display: flex;
  flex-direction: row;
}

.counter_count {
  background: #f3f3f3;
  font-weight: 400;
  font-size: 24px;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
}

.counter_buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 7px;
}

.counter_buttons button {
  width: 37px;
  height: 37px;
  font-size: 24px;
  line-height: 37px;
  background: #f3f3f3;
  border: none;
}
</style>
