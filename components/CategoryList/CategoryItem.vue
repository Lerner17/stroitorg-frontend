<template>
  <li class="category__item">
    <span @mouseover="activeItem = item" @mouseout="activeItem = null">
      <n-link
        :to="`/catalog/category/${item.id}/${item.slug}`"
        class="category__link"
        :active-class="'category__link_active'"
      >
        {{ item.name }}
      </n-link>
    </span>
    <img
      v-if="activeItem === item"
      class="tooltip"
      src="http://89.223.89.167/media/products/%D0%A6%D0%B5%D0%BC%D1%81%D0%B8%D1%81.jpg"
    />
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
  },
  data() {
    return {
      activeItem: null
    }
  }
}
</script>

<style>
.category__item {
  position: relative;
}
.category__link_active {
  color: #b62e26 !important;
}

.tooltip {
  position: absolute;
  top: 0;
  transform: translateY(-50%) translateX(15%);
  background-color: red;
  width: 120px;
  height: 120px;
}
</style>
