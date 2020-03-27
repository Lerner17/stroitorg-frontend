<template>
  <div>
    <section>
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
    </section>
    <Advantages />
    <Team />
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import Advantages from '@/components/sections/advantages/Advantages'
import 'hooper/dist/hooper.css'
import BaseButton from '@/components/BaseButton'
import Team from '@/components/sections/team/Team'
export default {
  components: { Hooper, Slide, BaseButton, Advantages, Team },
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
          url:
            'https://lh3.googleusercontent.com/proxy/Y7x_nnLjZew-LLBawtGcVJ03NkoW5iJT_q43c4FRhu0v9bAsSm558uFAZ5SxPPVduQC8GoZ1bwpHOXcfKj5XXcwTfhg3WjN4iHW-xg7SyQn385ner7_aGjuYvo4VCLfXh9IwmIIaJkpY8CuS0XVXjhrNl5AZ81WTMmgvRa_GbI5AQ5WMpz42EsK0hHr7zYg7eu-H6Yp7PjmLgZJu3eEPWOCGkEeFEmmytrP3bh4cU46_CTMb-XOM-qyft4oaGeKdNdFDr9rsUYqCtTa19l_ERA5OeNOLkPkYOCL1Nvqz0Ub2hGXo_ZTCyi2bMytsSdScjLKuQHnIVuiJ8B5PNQ'
        }
      ]
    }
  }
}
</script>

<style>
.slider {
  border-top: 6px solid #ffb426;
  height: 90vh !important;
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

/* .hooper-slide .is-active .is-current .item_btn,
.item_h1,
.item_text { */
/* transform: translateY(0); */
</style>
