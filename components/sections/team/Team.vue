<template>
  <div class="Team">
    <base-section-header dark class="mt-12 mb-12"
      >Наша команда</base-section-header
    >
    <div class="Team__content">
      <team-card></team-card>
      <team-card></team-card>
      <team-card></team-card>
      <team-card></team-card>
      <team-card></team-card>
      <team-card></team-card>
      <team-card></team-card>
      <team-card></team-card>
    </div>
  </div>
</template>

<script>
import TeamCard from './TeamCard'
import { BaseSectionHeader } from '@/components/BaseSection'

export default {
  components: { BaseSectionHeader, TeamCard }
}
</script>

<style>
.Team {
  width: 100%;
  max-width: 1920px;
  height: auto;
  box-sizing: border-box;
  padding: 0 75px 0 75px;
}

@media screen and (max-width: 550px) {
  .Team {
    padding: 0 10px 0 10px;
  }
}

.Team__content {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen {
}
</style>
