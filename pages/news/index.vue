<template>
  <div class="content">
    <base-news-card
      v-for="n in news"
      :key="n.id"
      :title="n.title"
      :date="n.date"
      :image="n.image"
    ></base-news-card>
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
          title: 'Title 1',
          date: 'Апрель, 22, 2019',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSubSEurzKVzKkQpxewTW_dludtKuIDmciqbeb9OknIwv643u2'
        },
        {
          id: 2,
          title: 'Title 2',
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
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 100px;
  width: 100%;
  box-sizing: border-box;
}
</style>
