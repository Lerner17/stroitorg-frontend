<template>
  <div class="news__wrapper">
    <div class="news_detail">
      <h1 class="news__title">{{ news.title }}</h1>
      <div class="news__meta">
        <time class="news__date">{{ news.created_at | formatDate }}</time>
        <ul class="news__meta-list meta-list">
          <li class="meta__author">
            <span class="icon mdi mdi-account-outline"></span>
            <span>Стройторг<a href="#"></a></span>
          </li>
        </ul>
      </div>
      <div class="news__content">
        <img width="100%" height="500" :src="news.image" :alt="news.title" />
        <p v-html="news.content" />
      </div>

      <news-footer>
        Поделиться
      </news-footer>
    </div>
    <NewsSidebar :tags="tags" />
  </div>
</template>

<script>
import { NewsFooter, NewsSidebar } from '@/components/sections/news'

export default {
  components: {
    NewsFooter,
    NewsSidebar
  },
  async asyncData({ $axios, params }) {
    const id = params.id
    const data = await $axios.get(`/news/${id}`)
    return { news: data.data }
  },
  data() {
    return {
      id: 1
    }
  }
}
</script>

<style>
.news__wrapper {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 1rem 80px;
}
@media only screen and (min-width: 768px) {
  .news__wrapper {
    grid-template-columns: 2fr 1fr;
    max-width: 1200px;
    padding-top: 90px;
  }
}
.news_detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  padding: 0 1rem;
  margin-left: auto;
  margin-right: auto;
}

.news__title {
  font-size: 1.5rem;
  text-align: center;
}
@media only screen and (min-width: 1300px) {
  .news__title {
    text-align: left;
  }
}
.news__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: -20px;
  margin-left: -20px;
}

@media screen and (min-width: 768px) {
  .news__meta {
    justify-content: flex-start;
  }
}
.news__meta-list {
  transform: translate3d(0, -14px, 0);
  margin: 0 -17px -14px;
  font-size: 15px;
  line-height: 1;
  letter-spacing: 0.05em;
  color: #777777;
}
.news__date {
  padding: 1px 10px;
  font-size: 12px;
  line-height: 2;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 30px;
  color: #ffffff;
  background: #ffb426;
  z-index: 1;

  display: inline-block;
  /*margin-top: 20px;*/
  margin-bottom: 20px;
  margin-left: 20px;
}

.meta-list {
  /*display: inline-block;*/
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
}
.meta__author,
.meta__comment-count,
.meta__views {
  display: inline-block;
  /*margin-top: 14px;*/
  padding-left: 17px;
  padding-right: 17px;
}
.meta__comment-count,
.meta__views {
  border-left: 1px solid #cccccc;
}

.news__content {
  margin-top: 30px;
}

.news__content p {
  margin-top: 30px;
}
.news__content * + p {
  margin: 0;
}
.news__content img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
  object-fit: contain;
  object-position: center;
}
.news__content * + img {
  margin-top: 30px;
}
.news__content img + p {
  margin-top: 35px;
}
</style>
