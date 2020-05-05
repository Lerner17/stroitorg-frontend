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
    <!--<base-paggination
      :size="6"
      :current-page="$route.params.page ? $route.params.page : 1"
      @change="changePage"
    />-->
  </div>
</template>

<script>
import BaseNewsCard from '@/components/BaseNewsCard'
// import BasePaggination from '@/components/BasePaggination'
export default {
  components: { BaseNewsCard /* BasePaggination */ },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('news/')
    console.log(data)
    return { news: data }
  },
  data() {
    return {
      // news: []
    }
  },
  methods: {
    changePage(page) {
      this.$axios
        .$get(`/catalog/news`, { params: { page } })
        .then((data) => {
          this.products = data.results
        })
        .catch()
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
  padding: 20px 1rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 1300px) {
  .News {
    max-width: 1300px;
  }
}

@media screen and (min-width: 1420px) {
  .News {
    max-width: 1400px;
  }
}

@media screen and (min-width: 1920px) {
  .News {
    max-width: 1920px;
  }
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
