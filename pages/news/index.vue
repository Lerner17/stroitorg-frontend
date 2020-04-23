<template>
  <div>
    <div class="parallax parallax--mask">
      <h3 style="postition: relative; z-index: 1;">Новости</h3>
      <div class="header_parallax_row"></div>
    </div>
    <div class="News">
      <base-news-card
        v-for="n in news"
        :key="n.id"
        :slug="n.id"
        :title="n.title"
        :date="n.created_at"
        :image="n.image"
      ></base-news-card>
    </div>
  </div>
</template>

<script>
import BaseNewsCard from '@/components/BaseNewsCard'
export default {
  components: { BaseNewsCard },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('news/')
    console.log(data)
    return { news: data }
  },
  data() {
    return {
      // news: []
    }
  }
}
</script>

<style>
.News {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 100px;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
}

/* .News:after {
  content: '';
  flex: auto;
} */

.header_parallax_row {
}

.parallax--mask {
  position: relative;
}

.parallax--mask:before {
  position: absolute;
  content: '';
  background-color: rgba(1, 1, 1, 0.4);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}
</style>
