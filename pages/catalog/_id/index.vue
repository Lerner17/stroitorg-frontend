<template>
  <div class="GoodDetail">
    <div class="parallax parallax--mask">
      <h3 style="postition: relative; z-index: 1;">Product name</h3>
      <div class="header_parallax_row"></div>
    </div>
    <div class="links_tree">
      <a href="">Главная</a><span class="mdi mdi-arrow-right"></span
      ><a>Каталог</a><span class="mdi mdi-arrow-right"></span
      ><span>Имя товара</span>
    </div>
    <div class="good">
      <div class="good_view">
        <hooper style="height: auto;">
          <slide style="width: 100%;">
            <img
              class="good__image"
              src="http://placekitten.com/500/500/"
              alt=""
            />
          </slide>
        </hooper>
      </div>
      <div class="good_info">
        <h4>Drill Press Vise</h4>
        <div class="good_info_ctn">
          <span class="good_price">₽ 2 500</span>
          <star-rating
            :star-size="24"
            :padding="5"
            :show-rating="false"
          ></star-rating>
        </div>
        <p>
          Lorem ipsum dolor sit amet, ei impetus epicurei his, ne falli erant
          consequuntur est. Mei simul aperiam eu, an rebum regione ponderum mel.
          Facer placerat ut duo, id duis solum maiorum vis, vim autemsemper
          docendi cu.
        </p>
        <hr />
        <div class="characteristics">
          <div>
            Категория: <span class="characteristics__span">Пылесосы</span>
          </div>
          <div>Вес: <span class="characteristics__span">32 кг</span></div>
          <div>
            Габариты:
            <span class="characteristics__span">20 х 21 х 333 метра</span>
          </div>
          <div class="good_actions">
            <div class="actions_counter">
              <div class="counter_count">{{ count }}</div>
              <div class="counter_buttons">
                <button @click="addCount()">+</button>
                <button @click="removeCount()">-</button>
              </div>
            </div>
            <base-button class="ml-5" size="large" color="danger"
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
import StarRating from 'vue-star-rating'
import BaseButton from '@/components/BaseButton'
export default {
  components: { Hooper, StarRating, Slide, BaseButton },
  data() {
    return {
      count: 1
    }
  },
  methods: {
    addCount() {
      ++this.count
    },
    removeCount() {
      if (this.count > 1) {
        --this.count
      }
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
