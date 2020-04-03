<template>
  <div class="Partners">
    <base-section-header class="mt-12 mb-12">Партнеры</base-section-header>
    <div class="Partners__slider">
      <hooper ref="parnters" :settings="hooperSettings">
        <slide>
          <div class="slider__parnter_item">
            <img
              src="https://livedemo00.template-help.com/wt_prod-23021/images/clients-1-200x90.png"
              alt=""
            />
          </div>
        </slide>
        <slide>
          <div class="slider__parnter_item">
            <img
              src="https://livedemo00.template-help.com/wt_prod-23021/images/clients-2-200x90.png"
              alt=""
            />
          </div>
        </slide>
        <slide>
          <div class="slider__parnter_item">
            <img
              src="https://livedemo00.template-help.com/wt_prod-23021/images/clients-3-200x90.png"
              alt=""
            />
          </div>
        </slide>
        <slide>
          <div class="slider__parnter_item">
            <img
              src="https://livedemo00.template-help.com/wt_prod-23021/images/clients-4-200x90.png"
              alt=""
            />
          </div>
        </slide>
        <slide>
          <div class="slider__parnter_item">
            <img
              src="https://livedemo00.template-help.com/wt_prod-23021/images/clients-5-200x90.png"
              alt=""
            />
          </div>
        </slide>
        <slide>
          <div class="slider__parnter_item">
            <img
              src="https://livedemo00.template-help.com/wt_prod-23021/images/clients-6-200x90.png"
              alt=""
            />
          </div>
        </slide>
      </hooper>
      <button class="slider_btn slider_btn--left" @click.prevent="slidePrev">
        <span class="mdi mdi-arrow-left"></span>
      </button>
      <button class="slider_btn slider_btn--right" @click.prevent="slideNext">
        <span class="mdi mdi-arrow-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
import { BaseSectionHeader } from '@/components/BaseSection'
export default {
  components: { Hooper, Slide, BaseSectionHeader },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        infiniteScroll: true,
        wheelControl: false,
        breakpoints: {
          2400: {
            // 2400px ~
            itemsToShow: 5
          },
          1800: {
            // 1800px ~ 2400px
            itemsToShow: 5
          },
          1500: {
            // 1500px ~ 1800px
            itemsToShow: 5
          },
          1100: {
            // 1100px ~ 1500px
            itemsToShow: 5
          },
          600: {
            // 600px ~ 1100px
            itemsToShow: 3
          },
          0: {
            // 0px ~ 600px
            itemsToShow: 1
          }
        }
      }
    }
  },
  methods: {
    slidePrev() {
      this.$refs.parnters.slidePrev()
    },
    slideNext() {
      this.$refs.parnters.slideNext()
    }
  }
}
</script>

<style>
.Partners {
  padding: 0 75px 30px 75px;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
}

.Partners__slider {
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #e1e1e1;
  position: relative;
}

.Partners__slider .hooper {
  height: 100px;
}
.Partners__slider .hooper img {
  width: 200px;
  height: 90;
}

.slider__parnter_item {
  /* width: 200px; */
  display: flex;
  justify-content: center;
}

.slider_btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  width: 28px;
  height: 54px;
  background-color: #fff;
  font-size: 18px;
  color: rgba(1, 1, 1, 0.3);
  /* background-color: black; */
}

.slider_btn--left {
  left: -12px;
}

.slider_btn--right {
  right: -12px;
}
</style>
