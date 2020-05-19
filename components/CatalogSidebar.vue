<template>
  <div class="Catalog__container_sidebar">
    <div class="catalog-sidebar__inner-wrapper">
      <h6 class="asside_title">Категории</h6>
      <CategoryList :items="categories"></CategoryList>
      <BaseSearch />
      <h6 class="asside_title pt-5">Фильтры</h6>
      <div class="thickness">Толщина, мм</div>
      <div class="thickness__wrapper">
        <a
          v-for="t in thickness"
          :key="t.id"
          class="thickness__item"
          :href="'/catalog/thickness/?id=' + t.id"
        >
          {{ t.thickness }}
        </a>
      </div>
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
  },
  data() {
    return {
      thickness: []
    }
  },
  mounted() {
    this.$axios.$get('/catalog/thickness/').then((data) => {
      this.thickness = data
    })
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

.thickness__wrapper {
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
}

.thickness {
  padding-left: 21px;
  padding-top: 10px;
  color: #777777;
}

.thickness__item {
  border-radius: 5px;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #ffb426;
  color: white;
  cursor: pointer;
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
