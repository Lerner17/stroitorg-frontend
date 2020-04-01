<template>
  <form name="feedback" class="feedback-form">
    <h5 class="feedback-form-title">{{ form_title }}</h5>
    <input
      type="text"
      class="feedback-form-input"
      name="name"
      placeholder="Имя *"
      required
    />
    <input
      type="tel"
      class="feedback-form-input"
      name="phone"
      placeholder="Номер телефона *"
      required
    />
    <textarea
      name="text"
      class="feedback-form-input"
      placeholder="Сообщение..."
      maxlength="255"
      rows="4"
      wrap="soft"
    ></textarea>
    <base-button class="feedback-form-btn" color="warn">
      Отправить
    </base-button>
  </form>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  name: 'BaseFeedbackForm',
  components: { BaseButton },
  props: {
    // eslint-disable-next-line vue/prop-name-casing,vue/require-default-prop
    form_title: String
  }
}
</script>

<style>
.feedback-form {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: #f5f5f5;
  width: 280px;
  height: 360px;
  margin: 10px 10px 10px auto;
}
.feedback-form-title {
  font-size: 18px;
  margin: auto;
}
.feedback-form-input {
  background-color: #f5f5f5;
  border: 0;
  border-bottom: 2px solid #a5a5a5;
  margin: auto;
  font-size: 14px;
  width: 200px;
}
.feedback-form-btn {
  margin: auto;
  width: 150px;
  font-size: 14px;
}
</style>
