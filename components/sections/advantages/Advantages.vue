<template>
  <div class="SectionAdv">
    <div class="Advantages">
      <base-section-header dark class="mt-12 mb-12"
        >Почему мы?</base-section-header
      >
      <h3>Наши приемущества</h3>
      <div>
        <AdvantagesItem v-for="a in advantages" :key="a.id" :title="a.title" />
      </div>
    </div>
    <div class="Advatages__video">
      <div class="video__content">
        <div style="font-size: 50px" class="mdi mdi-play"></div>
        <strong
          >Видео презентация <br />
          нашей компании</strong
        >
      </div>
    </div>
  </div>
</template>

<script>
import AdvantagesItem from './AdvantagesItem'
import { BaseSectionHeader } from '@/components/BaseSection'
export default {
  components: {
    BaseSectionHeader,
    AdvantagesItem
  },
  data() {
    return {
      advantages: []
    }
  },
  mounted() {
    this.$axios.$get('/main/advantage/').then((data) => {
      this.advantages = data
    })
  }
}
</script>

<style>
.Advantages {
  padding: 0 75px 30px 75px;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
}

.Advatages__video {
  width: 100%;
  max-width: calc(1440px / 2);
  height: 550px;
  background-image: url('https://livedemo00.template-help.com/wt_prod-23021/images/video-1-1110x830.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.SectionAdv {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.video__content {
  padding: 50px;
  font-size: 25px;
  text-transform: uppercase;
}

@media screen and (max-width: 1340px) {
  .SectionAdv {
    flex-direction: column-reverse;
  }
  .Advatages__video {
    max-width: 100%;
  }
}
</style>
