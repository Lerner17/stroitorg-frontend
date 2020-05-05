<template>
  <li class="category__item">
    <n-link
      :to="`/catalog/category/${item.id}/${item.slug}`"
      class="category__link"
      :active-class="'category__link_active'"
    >
      {{ item.name }}
    </n-link>
    <CategoryList v-if="item.children" :items="item.children" />
  </li>
</template>

<script>
// import CategoryList from '@/components/CategoryList/CategoryList'
export default {
  name: 'CategoryItem',
  components: {
    CategoryList: () =>
      import(
        /* webpackPrefetch: true */ '@/components/CategoryList/CategoryList'
      )
  },
  props: {
    item: {
      type: Object,
      default: null
    },
    items: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>
.category__item {
}
.category__link_active {
  color: red;
}
</style>
