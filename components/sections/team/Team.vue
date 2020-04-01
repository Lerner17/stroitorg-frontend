<template>
  <div>
    <base-section-header dark class="mt-12 mb-12"
      >Наша команда</base-section-header
    >
    <div class="Team">
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
  height: auto;
  box-sizing: border-box;
  padding: 0 75px 30px 75px;
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-auto-rows: 360px;
  gap: 50px 40px;
  /* grid-template-rows: minmax(360px, auto); */
  /* grid-template-columns: 1fr 1fr 1fr; */
}
</style>
