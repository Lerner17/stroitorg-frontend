<template>
  <ul class="category__list list-marked-2">
    <CategoryItem
      v-for="(item, j) in items"
      :key="j"
      :item="item"
    ></CategoryItem>
  </ul>
</template>

<script>
import CategoryItem from './CategoryItem'
export default {
  name: 'MenuList',
  components: {
    CategoryItem
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>
.category__list {
  /*padding-left: 1rem;*/
  display: flex;
  flex-direction: column;
}
.category__list .category__list {
  /*padding-left: 1rem;*/
  margin-top: 0.75rem;
}
</style>
