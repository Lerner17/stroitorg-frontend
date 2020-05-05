<template>
  <div class="serach-form">
    <input
      v-model="search"
      type="text"
      class="serach-form__input"
      placeholder="Поиск..."
    />
    <button
      class="search-form__btn mdi mdi-magnify"
      :disabled="!search"
      @click="getSearch"
    ></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    getSearch() {
      this.$router.push(`/catalog/search/?q=${this.search}`)
    }
  }
}
</script>
