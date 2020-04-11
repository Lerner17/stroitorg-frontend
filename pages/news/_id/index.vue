<template>
  <div class="news_detail">
    <h3>News Title</h3>
    <img
      class="news_image"
      width="700"
      height="500"
      src="/images/no_image.png"
    />
    <span class="news_date">29.03.2003</span>
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
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
.news_detail {
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1920px;
  width: 100%;
  padding-bottom: 80px;
  text-align: center;
}
.news_image {
  margin-left: auto;
  margin-right: auto;
}
.news_date {
  border-radius: 40px;
  background: orange;
  margin-left: 430px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  font-size: 14px;
  height: 26px;
  width: 120px;
  text-align: center;
  line-height: 25px;
}
</style>
