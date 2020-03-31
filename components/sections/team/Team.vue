<template>
  <div>
    <base-section-header dark class="mb-12">Наша команда</base-section-header>
    <div class="Team">
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: left;
}
</style>
