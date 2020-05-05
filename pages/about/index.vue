<template>
  <div class="container about__wrapper">
    <div class="about__map-wrapper">
      <h4 class="about__title">Get in Touch</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363539.48828320677!2d33.35784276985494!3d44.61436189628585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409525ef659144f5%3A0xbd2da7afff4d34cc!2z0KHQtdCy0LDRgdGC0L7Qv9C-0LvRjA!5e0!3m2!1sru!2sru!4v1588165883146!5m2!1sru!2sru"
        width="100%"
        height="350"
        loading="lazy"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
        class="about__map"
      ></iframe>
    </div>
    <div class="about__contacts">
      <div class="contacts__item">
        <p class="contacts__title">
          GET SOCIAL
        </p>
        <ul class="icon-list">
          <li class="icon"><span class="mdi mdi-facebook"></span></li>
          <li class="icon"><span class="mdi mdi-instagram"></span></li>
          <li class="icon"><span class="mdi mdi-twitter"></span></li>
          <li class="icon"><span class="mdi mdi-vk"></span></li>
        </ul>
      </div>
      <div class="contacts__item">
        <p class="contacts__title">
          Телефон
        </p>
        <a href="tel:33" class="contacts__phone"
          ><span class="icon mdi mdi-phone"></span>1-800-1234-567</a
        >
      </div>
      <div class="contacts__item">
        <div class="contacts__title">
          E-Mail
        </div>
        <a href="mailto:stroitorg@test.com" class="contacts__email">
          <span class="icon mdi mdi-email-outline"></span>stroitorg@test.com</a
        >
      </div>
      <div class="contacts__item">
        <p class="contacts__title">
          Адрес
        </p>
        <span class="contacts__address">
          <span class="icon mdi mdi-map-marker"></span>
          г.Севастополь, ул.Выдуманная, д.15
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.about__wrapper {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
@media screen and (min-width: 1200px) {
  .about__wrapper {
    grid-template-columns: 9fr 3fr;
    max-width: 1200px;
    grid-gap: 4rem;
  }
}
.about__map {
  margin-top: 2rem;
}
.about__title {
  text-transform: none;
  letter-spacing: 0.025em;
  line-height: 1.27778;
}
.about__contacts {
  padding-left: 2rem;
  border-left: 1px solid #ebebeb;
}
.contacts__item {
  margin-bottom: 2rem;
}
.contacts__item .icon-list {
  margin-top: 1rem;
}
.contacts__item .icon {
  font-size: 20px;
  line-height: 1;
  margin-right: 0.75rem;
}
.contacts__item a {
  color: #151515;
}
.contacts__item:not(:first-of-type) {
  padding-top: 31px;
  border-top: 1px solid #ebebeb;
}
.contacts__title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #151515;
}
.contacts__email,
.contacts__phone,
.contacts__address {
  margin-bottom: -10px;
  margin-left: -10px;
  margin-top: 1rem;
  display: flex;
}
.contacts__email .icon,
.contacts__phone .icon,
.contacts__address .icon {
  vertical-align: middle;
  color: #b62e26;
}
</style>
