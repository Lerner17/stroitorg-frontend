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
            :style="`background-image: url('${slide.url}');`"
          >
            <div class="item__title">
              <span class="item_h1">Мы лучший завод!</span>
              <span class="item_text">Все так говорят!</span>
              <base-button class="item_btn" size="large" color="danger"
                >Подробнее</base-button
              >
            </div>
          </div>
        </slide>
      </hooper>
    </base-section>
    <base-section>
      <Advantages />
    </base-section>
    <base-section dark>
      <Team />
    </base-section>
    <base-section>
      <Projects />
    </base-section>
    <section class="parallax">
      <div class="parallax__wrapper">
        <div class="parallax__item">
          <div class="item__number">25</div>
          <div class="item__descr">
            Миллионов украли на Крымском мосту
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
            байт в бите
          </div>
        </div>
      </div>
    </section>
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
import Advantages from '@/components/sections/advantages/Advantages'
import Partners from '@/components/sections/partners/Partners'
import Team from '@/components/sections/team/Team'
import Projects from '@/components/sections/projects/Projects'
export default {
  components: {
    Hooper,
    Slide,
    BaseButton,
    BaseSection,
    Advantages,
    Team,
    Projects,
    Partners
  },
  data() {
    return {
      slider: [
        {
          id: 1,
          url:
            'https://s1.1zoom.ru/big0/981/Sky_Factory_Smoke_Clouds_HDR_530224_1280x720.jpg'
        },
        {
          id: 2,
          url: 'http://placekitten.com/1440/2000'
        }
      ]
    }
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
  background-image: url('https://lh3.googleusercontent.com/proxy/dGuaBZfL6rNZBcQT50jsrErmPbs09tazUGPBs8B7TySu35unWH5JuCz9yQRweXedq5CAnyJpILMS41knX-QcvD48BMo2qMRsx_Yvls4A0BA');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  color: white;
}

.parallax__wrapper {
  display: flex;
  justify-content: space-around;
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
