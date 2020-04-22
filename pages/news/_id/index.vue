<template>
  <div class="container news__detail">
    <h1 class="news__title">News Title</h1>
    <!-- <img
      class="news_image"
      width="700"
      height="500"
      src="/images/no_image.png"
    />-->
    <div class="news__meta">
      <time class="news__date">29.03.2003</time>
      <ul class="news__meta-list meta-list">
        <li class="meta__author">
          <span class="icon mdi mdi-account-outline"></span>
          <span>by <a href="#">Harry Burns</a></span>
        </li>
        <li class="meta__views">
          <span class="icon mdi mdi-eye"></span><span>3678</span>
        </li>
        <li class="meta__comment-count">
          <span class="icon mdi mdi-comment-outline"></span>
          <a href="#">3</a>
        </li>
      </ul>
    </div>
    <div class="news__content">
      <p>
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
      </p>
      <img width="1200" height="500" src="/images/no_image.png" alt="" />
      <p>
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
      </p>
      <img width="500" height="300" src="/images/no_image.png" alt="" />
      <p>
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
        Куча текста Куча текста Куча текста Куча текста Куча текста Куча текста
      </p>
    </div>

    <news-footer>
      Поделиться
    </news-footer>
  </div>
</template>

<script>
import { NewsFooter } from '@/components/sections/news'

export default {
  components: {
    NewsFooter
  },
  async asyncData({ $axios, params }) {
    const id = params.id
    const data = await $axios
      .get(`/news/${id}`)
      .catch((error) => console.error(error.message))
    return { data, id }
  },
  data() {
    return {
      id: 1,
      data: {}
    }
  }
}
</script>

<style>
.news__detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;
  text-align: center;
  padding: 90px 1rem 80px;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (min-width: 1300px) {
  .news__detail {
    max-width: 1200px;
  }
}
.news__title {
  font-size: 1.5rem;
}
.news__image {
  margin-left: auto;
  margin-right: auto;
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
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*margin-bottom: 20px;*/
  /*margin-left: 20px;*/
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
  margin-top: 0;
  margin-bottom: 20px;
  margin-left: 20px;
}

.meta-list {
  /*display: inline-block;*/
  margin-top: 0;
  margin-bottom: 20px;
  margin-left: 20px;
}
.meta__author,
.meta__comment-count,
.meta__views {
  display: inline-block;
  margin-top: 14px;
  padding-left: 17px;
  padding-right: 17px;
}
.meta__comment-count,
.meta__views {
  border-left: 1px solid #cccccc;
}

.news__detail p {
  margin-top: 30px;
}
.news__detail * + p {
  margin: 0;
}
.news__detail img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-style: none;
}
.news__detail * + img {
  margin-top: 30px;
}
.news__detail img + p {
  margin-top: 35px;
}
</style>
