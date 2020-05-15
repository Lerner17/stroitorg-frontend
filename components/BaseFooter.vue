<template>
  <div class="BaseFooter">
    <div class="BaseFooter__content">
      <div class="BaseFooter__content__block">
        <div class="BaseFooter__content__item-middle">
          <span class="mdi mdi-arrange-send-backward"></span>
          <span class="BaseFooter__content__item__title">О нас</span>
          <p class="BaseFooter__content__text_about">
            Компания «Строй Торг» является официальным представителем основных
            заводов-изготовителей строительных материалов.
          </p>
          <ul class="icon-list">
            <li class="footer-icon">
              <span class="mdi mdi-facebook"></span>
            </li>
            <li class="footer-icon">
              <span class="mdi mdi-instagram"></span>
            </li>
            <li class="footer-icon">
              <span class="mdi mdi-twitter"></span>
            </li>
            <li class="footer-icon">
              <span class="mdi mdi-vk"></span>
            </li>
          </ul>
        </div>
        <div class="BaseFooter__content__item-middle">
          <span class="mdi mdi-contacts"></span>
          <span class="BaseFooter__content__item__title">Наши контакты</span>
          <p class="BaseFooter__content__text_address">
            Телефон
          </p>
          <a class="BaseFooter__contacts__link" href="tel:+7 (978) 022-44-11">
            +7 (978) 022-44-11
          </a>
          <p class="BaseFooter__content__text_address">
            Адрес
          </p>
          <a class="BaseFooter__contacts__link">
            г.Севастополь, ул.Выдуманная, д.15
          </a>
          <p class="BaseFooter__content__text_address">
            E-mail
          </p>
          <a class="BaseFooter__contacts__link" href="mailto:sales@st-ru.com">
            sales@st-ru.com
          </a>
        </div>
        <div class="BaseFooter__content__item-large">
          <span class="mdi mdi-link-variant"></span>
          <span class="BaseFooter__content__item__title">Ссылки</span>
          <ul class="link-list">
            <li class="link">
              <a href="#" style="color: white">Наша история</a>
            </li>
            <li class="link">
              <a href="#" style="color: white">Последние новости</a>
            </li>
            <li class="link"><a href="#" style="color: white">Каталог</a></li>
            <li class="link">
              <a href="/contacts" style="color: white">Наши контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="BaseFooter__copy">&copy; 2020. All Rights Reserverd.</div>
  </div>
</template>

<style>
.BaseFooter {
}
.BaseFooter__contacts__link {
  color: white;
}
.BaseFooter__content {
  width: 100%;
  background-color: #313131;
  padding-top: 90px;
  padding-bottom: 90px;
  color: white;
}
.BaseFooter__content__block {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: auto;
}
.BaseFooter__content__item-middle {
  height: 280px;
  width: 270px;
  margin: auto;
  text-align: left;
}
.BaseFooter__content__item-large {
  height: 280px;
  width: 370px;
  margin: auto;
  text-align: left;
}
@media screen and (max-width: 980px) {
  .BaseFooter__content__item-middle {
    width: 200px;
  }
  .BaseFooter__content__item-large {
    width: 300px;
  }
}
@media screen and (max-width: 740px) {
  .BaseFooter__content__item-large {
    margin-top: 50px;
    max-height: 280px;
  }
}
@media screen and (max-width: 420px) {
  .BaseFooter__content__item-middle {
    padding-left: 5px;
  }
  .BaseFooter__content__item-large {
    margin-top: 50px;
  }
}
.BaseFooter__content__item__title {
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.BaseFooter__content__text_about {
  text-align: left;
  letter-spacing: 0.075em;
  font-size: 15px;
  margin-top: 30px;
}
.icon-list {
  list-style: none;
  display: flex;
  flex-direction: row;
}
.footer-icon {
  min-width: 30px;
  min-height: 30px;
  margin: 30px 5px;
  background-color: #444444;
  text-align: center;
  line-height: 2;
}
.BaseFooter__content__text_address {
  margin-top: 30px;
  margin-bottom: 10px;
  color: #555555;
  font-weight: 700;
}
.BaseFooter__copy {
  text-align: center;
  width: 100%;
  background-color: #262626;
  padding-top: 40px;
  padding-bottom: 40px;
  color: rgba(255, 255, 255, 0.2);
}
.link-list {
  list-style: none;
  margin-top: 30px;
  font-size: 16px;
  column-count: 2;
  margin-left: 0;
}
.link {
  margin-bottom: 15px;
}
</style>
