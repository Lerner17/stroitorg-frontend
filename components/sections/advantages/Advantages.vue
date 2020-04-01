<template>
  <div class="Advantages">
    <div class="Advantages__title mb-8">
      <span class="title__row"></span>
      <h5>Наши приемущества</h5>
    </div>
    <hooper class="Advantages__slider" :settings="hooperSettings">
      <slide>
        <div class="Advantages__slider_item">
          <div class="Advantages__slider_item__image">
            <div class="slider_item__text"></div>
          </div>
          <span class="text_title"
            >Уникальность <br />
            И еще что-то</span
          >
        </div>
      </slide>
      <slide>
        <div class="Advantages__slider_item">
          <div class="Advantages__slider_item__image">
            <div class="slider_item__text"></div>
          </div>
          <span class="text_title"
            >Уникальность <br />
            И еще что-то</span
          >
        </div>
      </slide>
      <slide>
        <div class="Advantages__slider_item">
          <div class="Advantages__slider_item__image">
            <div class="slider_item__text"></div>
          </div>
          <span class="text_title"
            >Уникальность <br />
            И еще что-то</span
          >
        </div>
      </slide>
      <slide>
        <div class="Advantages__slider_item">
          <div class="Advantages__slider_item__image">
            <div class="slider_item__text"></div>
          </div>
          <span class="text_title"
            >Уникальность <br />
            И еще что-то</span
          >
        </div>
      </slide>
    </hooper>
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
        // autoPlay: true,
        playSpeed: 3500,
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
      }
    }
  }
}
</script>

<style>
.Advantages {
  padding: 0 75px 30px 75px;
  box-sizing: border-box;
  min-height: 450px;
  margin-top: 50px;
  width: 100%;
  max-width: 1920px;
}

.Advantages .hooper-slide {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}

.Advantages__title {
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

.Advantages__slider {
  height: auto !important;
  overflow: hidden;
  width: 100%;
}

.Advantages__slider_item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  width: 350px;
}

.Advantages__slider_item__image {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://placekitten.com/350/270/');
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

.Advantages__slider_item:hover .slider_item__text {
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

.Advantages__slider_item:hover .text_title {
  transform: translateY(-150px);
  font-size: 18px;
  letter-spacing: 0.3em;
  color: red;
}

.cnt {
  content: '';
}
</style>
