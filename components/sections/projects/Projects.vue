<template>
  <div class="Projects">
    <BaseSectionHeader class="mt-12 mb-12">Наши проекты</BaseSectionHeader>
    <div class="Projects__wrapper">
      <base-project-card
        v-for="p in projects"
        :key="p.id"
        :image="p.image"
        :title="p.title"
        :description="p.description"
      ></base-project-card>
    </div>
  </div>
</template>

<script>
import { BaseSectionHeader } from '@/components/BaseSection'
import BaseProjectCard from '@/components/BaseProjectCard'
export default {
  components: { BaseSectionHeader, BaseProjectCard },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    this.$axios.$get('/main/projects/').then((data) => (this.projects = data))
  }
}
</script>

<style>
.Projects {
  padding: 0 75px 30px 75px;
  width: 100%;
  max-width: 1920px;
  box-sizing: border-box;
}

.Projects__wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 15px;
}

@media screen and (min-width: 768px) {
  .Projects__wrapper {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 30px;
  }
}

@media screen and (max-width: 550px) {
  .Projects {
    padding: 0 10px 0 10px;
  }

  .Projects__wrapper {
    justify-content: center;
  }
}
</style>
