<template>
  <div class="BaseProjectCard">
    <!-- <img src="/images/no_image.png" /> -->
    <img :src="image" />
    <div class="BaseProjectCard__title">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.BaseProjectCard {
  position: relative;
  display: flex;
  flex-direction: column;
  /*max-width: 400px;*/
  width: 100%;
  /*max-height: 300px;*/
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  /*margin: 15px;*/
  overflow: hidden;
}

.BaseProjectCard img {
  object-fit: cover;
  height: 100%;
  object-position: center center;
  transition: 0.5s;
}

.BaseProjectCard:hover img {
  transform: scale(1.2);
}

.BaseProjectCard__title {
  top: 25%;
  padding: 5px 10px 5px 10px;
  max-width: 75%;
  position: absolute;
  color: white;
  background-color: #313131;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  letter-spacing: 0.1em;
  font-size: 18px;
  transition: 0.25s;
}

.BaseProjectCard:hover .BaseProjectCard__title {
  opacity: 0;
}
</style>
