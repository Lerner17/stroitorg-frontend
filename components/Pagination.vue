<template>
  <div class="pagination-wrap">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li
          v-show="currentPage > 1"
          class="page-item page-item-control disabled"
        >
          <span class="page-link" href="#" aria-label="Previous"
            ><span class="icon" aria-hidden="true"></span
          ></span>
        </li>
        <li v-for="i in pages" :key="i" class="page-item active">
          <span class="page-link">{{ i }}</span>
        </li>
        <li class="page-item page-item-control">
          <a class="page-link" href="#" aria-label="Next">
            <span class="icon" aria-hidden="true"></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    pages() {
      return 3
    }
  },
  methods: {
    prev() {
      this.currentPage--
    },
    next() {
      this.currentPage++
    }
  }
}
</script>

<style></style>
