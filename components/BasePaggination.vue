<template>
  <div class="pagination">
    <span
      v-show="pageNumber > 1"
      class="pagination__button pagination__button_prev icon mdi mdi-arrow-left"
      @click="prevPage"
    >
    </span>
    <ul class="pagination__list">
      <li v-for="p in links" :key="p" class="pagination__item">
        <span
          :to="`${p}`"
          append
          :class="[
            'pagination__link',
            p === pageNumber ? 'nuxt-link-active' : ''
          ]"
          @click.prevent="setPage(p)"
        >
          {{ p }}
        </span>
      </li>
    </ul>
    <span
      v-show="pageNumber < size"
      class="pagination__button pagination__button_next icon mdi mdi-arrow-right"
      @click="nextPage"
    >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      pageNumber: 1
    }
  },
  computed: {
    links() {
      const links = []
      if (this.pageNumber > 1) links.push(1)
      if (this.pageNumber - 1 > 1) links.push(this.pageNumber - 1)
      if (this.pageNumber - 2 > 1) links.push(this.pageNumber - 2)
      links.push(this.pageNumber)
      if (this.pageNumber + 1 < this.size) links.push(this.pageNumber + 1)
      if (this.pageNumber + 2 < this.size) links.push(this.pageNumber + 2)
      if (this.pageNumber < this.size) links.push(this.size)
      return links
    }
  },
  created() {
    this.pageNumber = this.currentPage
  },
  methods: {
    setPage(page) {
      this.pageNumber = page
      this.$emit('change', this.pageNumber)
    },
    nextPage() {
      ++this.pageNumber
      this.$emit('change', this.pageNumber)
    },
    prevPage() {
      --this.pageNumber
      this.$emit('change', this.pageNumber)
    }
  }
}
</script>

<style>
.pagination {
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: minmax(30px, auto) 1fr minmax(30px, auto);
  justify-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 30px;
  margin-bottom: 30px;
}
@media only screen and (min-width: 1280px) {
  .pagination {
    max-width: 1200px;
  }
}
.pagination__list {
  display: flex;
  grid-column-start: 2;
}
.pagination__item,
.pagination__button {
  display: inline-block;
  padding: 0 5px;
  font-size: 24px;
  min-width: 24px;
  line-height: 1.33333;
  font-weight: 500;
  -webkit-appearance: button;
  -moz-appearance: button;
  cursor: pointer;
}
.pagination__link {
  display: inline-block;
  padding: 0 5px;
  min-width: 24px;
  color: #151515;
}
.pagination__link.nuxt-link-active {
  color: #b62e26;
}
</style>
