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
        :title="n.title"
        :date="n.date"
        :image="n.image"
      ></base-news-card>
    </div>
  </div>
</template>

<script>
import BaseNewsCard from '@/components/BaseNewsCard'
export default {
  components: { BaseNewsCard },
  data() {
    return {
      news: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          date: 'Апрель, 22, 2019',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSubSEurzKVzKkQpxewTW_dludtKuIDmciqbeb9OknIwv643u2'
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          date: 'Май, 17, 2019'
        },
        {
          id: 3,
          title: 'Title 3',
          date: 'Июнь, 9, 2019'
        },
        {
          id: 4,
          title: 'Title 4',
          date: 'Февраль, 23, 2020'
        }
      ]
    }
  }
}
</script>

<style>
.News {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex-wrap: wrap;
  padding: 20px 100px;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
}

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
