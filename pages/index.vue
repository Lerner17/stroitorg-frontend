<template>
  <div class="Index">
    <base-section dark>
      <hooper
        class="slider"
        :auto-play="true"
        :play-speed="5000"
        :wheel-control="false"
      >
        <slide v-for="slide in slider" :key="slide.id">
          <div
            class="slider__item"
            :style="
              `background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url('${slide.image}');`
            "
          >
            <div class="item__title">
              <span class="item_h1">{{ slide.title }}</span>
              <span class="item_text">{{ slide.text }}</span>
              <base-button class="item_btn" size="large" color="danger"
                >Подробнее</base-button
              >
            </div>
          </div>
        </slide>
      </hooper>
    </base-section>
    <base-section>
      <Gallery />
    </base-section>
    <base-section dark>
      <Advantages />
    </base-section>
    <base-section>
      <Projects />
    </base-section>
    <section class="parallax">
      <div class="parallax__wrapper">
        <div class="parallax__item">
          <div class="item__number">25</div>
          <div class="item__descr">
            Миллионов заказов выполнили
          </div>
        </div>
        <div class="parallax__item">
          <div class="item__number">2</div>
          <div class="item__descr">
            года работаем в России
          </div>
        </div>
        <div class="parallax__item">
          <div class="item__number">8</div>
          <div class="item__descr">
            тысяч поставок ежемесячно
          </div>
        </div>
        <div class="parallax__item">
          <div class="item__number">200</div>
          <div class="item__descr">
            миллионов тон плитки мы продали
          </div>
        </div>
      </div>
    </section>
    <base-section dark>
      <Team />
    </base-section>
    <base-section>
      <Partners />
    </base-section>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import BaseButton from '@/components/BaseButton'
import BaseSection from '@/components/BaseSection'
import Gallery from '@/components/sections/gallery/Gallery'
import Partners from '@/components/sections/partners/Partners'
import Team from '@/components/sections/team/Team'
import Projects from '@/components/sections/projects/Projects'
import Advantages from '@/components/sections/advantages/Advantages'
export default {
  components: {
    Hooper,
    Slide,
    BaseButton,
    BaseSection,
    Gallery,
    Team,
    Projects,
    Partners,
    Advantages
  },
  data() {
    return {
      slider: []
    }
  },
  mounted() {
    this.$axios.$get('/main/slider/').then((data) => {
      this.slider = data
    })
  }
}
</script>

<style>
.Index {
  background-color: #313131;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  border-top: 6px solid #ffb426;
  height: 90vh !important;
  max-width: 1920px;
  /* box-sizing: border-box; */
  /* margin: 0 3px 0 3px; */
  /* position: relative; */
}

.slider__item {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.item__title {
  color: white;
  text-transform: uppercase;
  padding-top: 20%;
  padding-left: 20%;
  /* position: absolute; */
  top: 20%;
  left: 20%;
  display: flex;
  flex-direction: column;
}

.item_h1 {
  font-size: 44px;
  font-weight: 900;
  transform: translateY(-50px);
  opacity: 0;
  transition: 0.7s;
}

.is-active .item_h1 {
  transform: translateY(0);
  opacity: 1;
}

.is-active .item_text {
  opacity: 1;
  transform: translateY(0);
}

.is-prev .item_h1 {
  transform: translateY(-50px);
}

.item_text {
  font-size: 18px;
  letter-spacing: 0.2em;
  color: #ffb426;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 50px;
  opacity: 0;
  transition: 1s;
  transform: translateY(-20px);
}

.item_btn {
  transform: translateY(50px);
  opacity: 0;
}

.is-active .item_btn {
  transform: translateY(0);
  opacity: 1;
}

.parallax {
  background-image: url('https://livedemo00.template-help.com/wt_prod-23021/images/parallax-1.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  min-height: 350px;
  padding-top: 20;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.parallax__wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  height: 100%;
}

.item__number {
  font-size: 110px;
  position: relative;
  text-align: center;
}

.item__number:before {
  display: inline-block;
  content: '';
  width: 95px;
  border-top: 1px solid #b62e26;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.item__descr {
  margin-top: 10px;
  font-size: 16px;
  letter-spacing: 0.3em;
  text-align: center;
  text-transform: uppercase;
  max-width: 190px;
}
/* .hooper-slide .is-active .is-current .item_btn,
.item_h1,
.item_text { */
/* transform: translateY(0); */
</style>
