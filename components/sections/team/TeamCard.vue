<template>
  <div class="TeamCard">
    <h5 class="TeamCard__position">{{ position }}</h5>
    <div class="TeamCard__info">
      <img class="team-ruth-figure" :src="avatar" alt="" />
      <div class="TeamCard__contact">
        <span class="contact__name"
          >{{ firstName }} <br />
          {{ lastName }}
        </span>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </div>
    <div class="TeamCard__footer">
      {{ bio }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: 'no-image.png'
    },
    email: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.TeamCard {
  position: relative;
  background-color: #414141;
  max-width: 370px;
  min-width: 350px;
  height: auto;
  min-height: 100%;
  padding-right: 10px;
  padding-bottom: 10px;
  will-change: transform;
  transition: all 0.3s ease;
  z-index: 1;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
}

.TeamCard:hover {
  transform: translateY(-15px);
}

.TeamCard:before {
  position: absolute;
  content: '';
  top: 10px;
  right: 0;
  bottom: 0;
  left: 10px;
  box-shadow: 5px 5px 0 5px #555;
  overflow: hidden;
  z-index: -1;
}

.TeamCard__position {
  padding: 30px 26px 14px;
  color: #ffb426;
  font-size: 14px;
  line-height: 1.72;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.TeamCard__info {
  display: flex;
}

.TeamCard__info > img {
  width: 167px;
  height: 167px;
}

.TeamCard__footer {
  padding: 22px 12px 50px 28px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 0.05em;
}

.team-ruth-figure {
  display: block;
  overflow: hidden;
  object-fit: cover;
  object-position: center center;
  min-width: 150px;
  max-width: 320px;
  width: 100%;
  clip-path: polygon(calc(100% - 11px) 0, 100% 15px, 100% 100%, 0 100%, 0 0);
}

.TeamCard__contact {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 20px;
  width: 100%;
  /* box-sizing: border-box; */
}

.contact__name {
  font-weight: 400;
  letter-spacing: 0.075em;
  text-transform: none;
  font-size: 23px;
}
</style>
