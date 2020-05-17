<template>
  <div class="Team">
    <base-section-header dark class="mt-12 mb-12"
      >Наша команда</base-section-header
    >
    <!-- <div class="Team__content"> -->
    <hooper ref="carousel" class="Team-slide" :settings="hooperSettings">
      <slide v-for="e in emloyees" :key="e.id">
        <team-card
          :first-name="e.first_name"
          :last-name="e.last_name"
          :bio="e.bio"
          :avatar="e.avatar"
          :position="e.position"
          :email="e.email"
        />
      </slide>
    </hooper>
    <div class="TeamActions">
      <button class="mdi mdi-arrow-left " @click.prevent="slidePrev" />
      <button class="mdi mdi-arrow-right" @click.prevent="slideNext" />
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import TeamCard from './TeamCard'
import { BaseSectionHeader } from '@/components/BaseSection'

export default {
  components: { Hooper, Slide, BaseSectionHeader, TeamCard },
  data() {
    return {
      emloyees: [],
      hooperSettings: {
        infiniteScroll: true,
        // centerMode: true,
        wheelControl: false,
        breakpoints: {
          2400: {
            // 2400px ~
            itemsToShow: 3
          },
          1800: {
            // 1800px ~ 2400px
            itemsToShow: 3
          },
          1500: {
            // 1500px ~ 1800px
            itemsToShow: 3
          },
          1100: {
            // 1100px ~ 1500px
            itemsToShow: 3
          },
          600: {
            // 600px ~ 1100px
            itemsToShow: 2
          },
          0: {
            // 0px ~ 600px
            itemsToShow: 1
          }
        }
      }
    }
  },
  mounted() {
    this.$axios.$get('/main/employee/').then((data) => {
      this.emloyees = data
    })
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev()
    },
    slideNext() {
      this.$refs.carousel.slideNext()
    }
  }
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

.Team-slide {
  height: auto !important;
  user-select: none;
}

.Team__slider_btn {
  position: absolute;
  right: 0;
  top: 0;
  color: white;
}

.TeamActions {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding-bottom: 10px;
}

.TeamActions button {
  margin: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
}
</style>
