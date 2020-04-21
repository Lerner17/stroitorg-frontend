<template>
  <div class="Paggination">
    <ul>
      <li v-for="p in paginatedData" :key="p">
        {{ p.first }}
        {{ p.last }}
        {{ p.suffix }}
      </li>
    </ul>
    <button @click="prevPage">
      Previous
    </button>
    <button @click="nextPage">
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      pageNumber: 0
    }
  },
  computed: {
    pageCount() {
      const l = this.listData.length
      const s = this.size
      // редакция переводчика спасибо комментаторам
      return Math.ceil(l / s)
      // оригинал
      // return Math.floor(l/s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.listData.slice(start, end)
    }
  },
  methods: {
    nextPage() {
      ++this.pageNumber
    },
    prevPage() {
      --this.pageNumber
    }
  }
}
</script>

<style>
.Paggination {
  width: 100%;
  text-align: center;
}
</style>
