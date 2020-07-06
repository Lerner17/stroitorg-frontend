<template>
  <div class="GoodDetail">
    <BaseModal :is-show="isShowModal" :item="modalItem" @close="modalClose" />
    <div class="links_tree">
      <nuxt-link to="/">Главная</nuxt-link
      ><span class="mdi mdi-arrow-right"></span
      ><nuxt-link to="/catalog">Каталог</nuxt-link>
      <nuxt-link
        v-if="product.category"
        :to="
          `/catalog/category/${product.category.id}/${product.category.slug}`
        "
        class="mdi mdi-arrow-right"
        >{{ product.category.name }}</nuxt-link
      >
      <span class="mdi mdi-arrow-right"></span><span>{{ product.name }}</span>
    </div>
    <div class="good">
      <hooper class="good_view" :settings="hooperSettings">
        <slide v-for="slide in slider" :key="slide.id">
          <img class="good__image" :src="slide.image" />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
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
            <span v-if="product.category" class="characteristics__span">{{
              product.category.name
            }}</span>
          </div>
          <div v-if="product.parameters">
            <div v-for="p in product.parameters" :key="p.id">
              {{ p.name }}:
              <span class="characteristics__span">{{ p.value }}</span>
            </div>
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
              class="ml-5 pl-1 pr-2"
              size="medium"
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
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import { mapActions } from 'vuex'
import BaseButton from '@/components/BaseButton'
import BaseModal from '@/components/BaseModal'
export default {
  components: { Hooper, Slide, HooperNavigation, BaseButton, BaseModal },
  data() {
    return {
      count: 1,
      product: {},
      slider: [],
      hooperSettings: {
        autoPlay: true,
        itemsToShow: 1,
        wheelControl: false,
        playSpeed: 5000
      },
      isShowModal: false,
      modalItem: {}
    }
  },
  computed: {
    category() {
      return this.product.category.name
    }
  },
  mounted() {
    this.$axios
      .$get(`catalog/products/${this.$route.params.id}`)
      .then((data) => {
        this.product = data
        this.slider = data.images
      })
  },
  methods: {
    ...mapActions({
      updateCart: 'cart/updateCart'
    }),
    addCount() {
      ++this.count
    },
    removeCount() {
      if (this.count > 1) {
        --this.count
      }
    },
    modalClose() {
      this.isShowModal = false
    },
    addToCart() {
      // this.$store.dispatch({ type: 'updateCartWithPayload', count: 10 })
      const item = {
        id: this.product.id,
        title: this.product.title,
        price: this.product.price,
        new_price: this.product.newPrice,
        image: this.product.image
      }
      let i = 0
      while (i < this.count) {
        this.updateCart(item)
        ++i
      }
      this.modalItem = item
      this.isShowModal = true
    }
  }
}
</script>

<style>
.Goods__slider_btn_bottom {
  position: absolute;
}
.GoodDetail {
  max-width: 1920px;
  width: 100%;
  padding-bottom: 80px;
}

.links_tree {
  width: 100%;
  color: #777777;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
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

.good_view {
  max-width: 423px;
  min-width: 250px;
  height: auto !important;
  max-height: 423px;
  width: 100%;
}

.good__image {
  width: 100%;
  object-fit: cover;
  object-position: center center;
  height: 100%;
}

.good {
  padding-top: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.counter_buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 7px;
}

.counter_buttons button {
  width: 25px;
  height: 25px;
  font-size: 18px;
  line-height: 25px;
  background: #f3f3f3;
  border: none;
  outline: none;
}
</style>
