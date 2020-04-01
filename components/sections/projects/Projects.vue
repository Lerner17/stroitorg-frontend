<template>
  <div class="Projects">
    <BaseSectionHeader class="mt-12 mb-12">Наши проекты</BaseSectionHeader>
    <div class="Projects__wrapper">
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
      <base-project-card></base-project-card>
    </div>
  </div>
</template>

<script>
import { BaseSectionHeader } from '@/components/BaseSection'
import BaseProjectCard from '@/components/BaseProjectCard'
export default {
  components: { BaseSectionHeader, BaseProjectCard }
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
  display: flex;
  flex-wrap: wrap;
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
