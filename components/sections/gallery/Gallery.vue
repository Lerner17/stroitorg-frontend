<template>
  <div class="Gallery">
    <div class="Gallery__title mb-8">
      <span class="title__row"></span>
      <h5>Галерея</h5>
      <div class="Gallery__slider_btn">
        <button @click.prevent="slidePrev">
          <span class="mdi mdi-arrow-left"></span>
        </button>
        <button @click.prevent="slideNext">
          <span class="mdi mdi-arrow-right"></span>
        </button>
      </div>
    </div>
    <hooper ref="carousel" class="Gallery__slider" :settings="hooperSettings">
      <slide v-for="a in adv" :key="a.id">
        <div class="Gallery__slider_item">
          <div
            class="Gallery__slider_item__image"
            :style="'background-image: url(' + a.image + ');'"
          >
            <div class="slider_item__text"></div>
          </div>
          <span class="text_title">
            {{ a.title }}
          </span>
        </div>
      </slide>
    </hooper>
    <div class="Gallery__slider_btn_bottom">
      <button @click.prevent="slidePrev">
        <span class="mdi mdi-arrow-left"></span>
      </button>
      <button @click.prevent="slideNext">
        <span class="mdi mdi-arrow-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
export default {
  components: { Hooper, Slide },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        wheelControl: false,
        breakpoints: {
          2400: {
            // 2400px ~
            itemsToShow: 4
          },
          1800: {
            // 1800px ~ 2400px
            itemsToShow: 4
          },
          1500: {
            // 1500px ~ 1800px
            itemsToShow: 4
          },
          1100: {
            // 1100px ~ 1500px
            itemsToShow: 2.5
          },
          600: {
            // 600px ~ 1100px
            itemsToShow: 1.5
          },
          0: {
            // 0px ~ 600px
            itemsToShow: 1
          }
        }
      },
      adv: []
    }
  },
  mounted() {
    this.$axios.$get('/main/gallery/').then((data) => (this.adv = data))
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    }
  }
}
</script>

<style>
.Gallery {
  padding: 0 75px 30px 75px;
  box-sizing: border-box;
  min-height: 450px;
  margin-top: 50px;
  width: 100%;
  max-width: 1920px;
}

.Gallery .hooper-slide {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.Gallery__title {
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

.title__row {
  position: absolute;
  top: 50%;
  right: calc(100% + 35px);
  width: 400%;
  font-size: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.137);
}

.Gallery__slider {
  height: auto !important;
  overflow: hidden;
  width: 100%;
}

.Gallery__slider_item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  width: 350px;
}

.Gallery__slider_item__image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://livedemo00.template-help.com/wt_prod-23021/images/services-11-420x320.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 270px;
}

.slider_item__text {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  color: #b62e26;
  box-sizing: border-box;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  transition: all 0.25s;
  transform: translateY(-20px);
  opacity: 0;
  /* display: none; */
}

.Gallery__slider_item:hover .slider_item__text {
  transform: translateY(0);
  opacity: 1;
}

.text_title {
  /* width: 100%; */
  text-align: center;
  font-size: 16px;
  line-height: 1.625;
  letter-spacing: 0.2em;
  font-weight: 700;
  text-transform: uppercase;
  color: #151515;
  transition: all 0.25s;
}

.Gallery__slider_item:hover .text_title {
  transform: translateY(-150px);
  font-size: 18px;
  letter-spacing: 0.3em;
  color: red;
}

.cnt {
  content: '';
}

.Gallery__slider_btn {
  position: absolute;
  right: 0;
  top: 0;
}

.Gallery__slider_btn > button {
  background: none;
  border: none;
  font-size: 25px;
  width: 40px;
  height: 30px;
}

.Gallery__slider_btn > button:first-child {
  border-right: 1px solid black;
  /* padding-right: 20px; */
}

.Gallery__slider_btn_bottom {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: none;
}

.Gallery__slider_btn_bottom > button {
  background: none;
  border: none;
  font-size: 25px;
  width: 40px;
  height: 30px;
}

@media screen and (max-width: 600px) {
  .Gallery__slider_btn {
    display: none;
  }

  .Gallery__slider_btn_bottom {
    display: flex;
  }
}
</style>
