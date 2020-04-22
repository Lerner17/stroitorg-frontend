<template>
  <div class="news_related">
    <base-news-card
      v-for="n in news"
      :key="n.id"
      :slug="n.id"
      :title="n.title"
      :date="n.date"
      :image="n.image"
    />
  </div>
</template>

<script>
import BaseNewsCard from '@/components/BaseNewsCard'
export default {
  name: 'NewsRelated',
  components: {
    BaseNewsCard
  },
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
        }
      ]
    }
  }
}
</script>

<style>
.news_related {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
