<template>
  <div class="Catalog__container_sidebar">
    <div class="catalog-sidebar__inner-wrapper">
      <h6 class="asside_title">Категории</h6>
      <CategoryList :items="categories"></CategoryList>
      <BaseSearch />
    </div>
  </div>
</template>
<script>
import BaseSearch from '~/components/BaseSearch'
import CategoryList from '~/components/CategoryList/CategoryList'

export default {
  name: 'CatalogSidebar',
  components: { BaseSearch, CategoryList },
  props: {
    categories: {
      type: Array,
      default: null
    }
  }
}
</script>
<style>
.links_tree > a {
  color: #777777;
}

@media screen and (min-width: 768px) {
  .catalog-sidebar__inner-wrapper {
    position: sticky;
    top: 90px;
  }
}

.Catalog__container_sidebar {
  /*width: 300px;*/
  /*flex: 20%;*/
  box-sizing: border-box;
}

@media screen {
}

.asside_title {
  font-weight: 400;
  text-transform: none;
  padding-bottom: 15px;
  border-bottom: 1px solid #e1e1e1;
  letter-spacing: 0.1em;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', Arial, sans-serif;
  color: #151515;
}

@media (max-width: 1020px) {
  .Catalog__container_sidebar {
    width: 100%;
  }

  /*.Catalog__container {
      display: block;
    }*/
}
</style>
