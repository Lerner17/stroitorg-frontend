<template>
  <div class="news__footer">
    <div class="news__footer-inner">
      <h6 class="news__footer-title share__title">
        <slot>
          Share this post
        </slot>
      </h6>
      <ul
        class="share__list list-inline single-post-social-list list-inline-md"
      >
        <li><a class="icon mdi mdi-facebook" href="#"></a></li>
        <li><a class="icon mdi mdi-twitter" href="#"></a></li>
        <li><a class="icon mdi mdi-instagram" href="#"></a></li>
        <li><a class="icon mdi mdi-google-plus" href="#"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsFooter'
}
</script>

<style scoped>
.news__footer {
  margin-top: 50px;
  padding: 33px 35px;
  background: #f3f3f3;
  border-bottom: 3px solid #b62e26;
}
.news__footer-inner {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media only screen and (min-width: 768px) {
  .news__footer-inner {
    justify-content: space-between;
  }
}

.news__footer-title {
  display: inline-block;
  text-transform: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33333;
  color: #151515;
}
.share__list {
  /*margin-left: auto;*/
  display: flex;
}
.news__footer-title,
.share__list {
  margin-top: 0;
  /*margin-bottom: 25px;*/
  margin-left: 25px;
}
.share__list .icon {
  font-size: 22px;
  color: #151515;
  padding-left: 11px;
  padding-right: 11px;
}
</style>
