<template>
  <div class="container about__wrapper">
    <div class="about__map-wrapper">
      <h4 class="about__title">Контакты</h4>
      <form
        class="rd-form rd-mailform"
        data-form-output="form-output-global"
        data-form-type="contact"
        method="post"
        novalidate="novalidate"
      >
        <div class="contacts__form-wrapper">
          <div class="col-md-6">
            <BaseInput
              id="name"
              v-model="formData.name"
              label="Ваше имя"
              required
              name="name"
            />
          </div>
          <div class="col-md-6">
            <BaseInput
              id="name"
              v-model="formData.email"
              label="Ваш email"
              required
              name="email"
              tag-type="email"
            />
          </div>
          <div class="col-md-6">
            <div class="form-wrap">
              <select
                id="regula-generated-566215"
                v-model="formData.service"
                class="form-input form-control-has-validation form-control-last-child"
                data-minimum-results-for-search="Infinity"
                data-constraints="@Required"
                tabindex="-1"
              >
                <option value="1">Select a Service</option>
                <option value="2">Welding</option>
                <option value="3">Steel Cladding</option>
                <option value="4">Steel Detailing</option> </select
              ><span class="form-validation"></span>
            </div>
          </div>
          <div class="col-md-6">
            <BaseInput
              id="name"
              v-model="formData.phone"
              label="Ваш телефон"
              required
              name="phone"
              tag-type="tel"
              inputmode="number"
            />
          </div>
          <div class="form-wrap has-error contacts__textarea-wrapper">
            <label
              v-show="!formData.message"
              class="form-label rd-input-label"
              for="contact-message-5"
              >Сообщение</label
            >
            <textarea
              id="contact-message-5"
              v-model="formData.message"
              class="form-input textarea-lg form-control-has-validation form-control-last-child"
              name="message"
              data-constraints="@Required"
            ></textarea>
            <!--            <span class="form-validation">The text field is required.</span>-->
          </div>
        </div>
        <BaseButton size="large" color="warn">
          Связаться
        </BaseButton>
      </form>
    </div>
    <div class="about__contacts">
      <div class="contacts__item">
        <p class="contacts__title">
          Контакты
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
import BaseButton from '@/components/BaseButton'
import BaseInput from '@/components/BaseInput'
export default {
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      formData: {
        name: null,
        email: null,
        service: 1,
        phone: null,
        message: null
      }
    }
  }
}
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

.contacts__form-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.25rem;
  margin-bottom: 2rem;
  padding: 0.5rem;
}
@media screen and (min-width: 768px) {
  .contacts__form-wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .contacts__textarea-wrapper {
    grid-column: 1/3;
  }
}
</style>
