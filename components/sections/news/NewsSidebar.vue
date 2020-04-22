<template>
  <aside class="sidebar">
    <div class="sidebar__track">
      <div class="sidebar__item">
        <form class="form-search" method="GET">
          <div class="form-wrap">
            <label class="form-label" for="search-form-2">Поиск...</label>
            <input id="search-form-2" class="form-input" type="text" />
            <BaseButton :class="'button_search'">
              <span class="icon mdi mdi-search-web"></span>
            </BaseButton>
          </div>
        </form>
      </div>
      <div class="sidebar__item">
        <h6 class="sidebar__title">Теги</h6>
        <div class="sidebar__buttons">
          <BaseButton
            v-for="(tag, i) in tags"
            :key="i"
            :to="tag.link"
            :color="'primary'"
            class="tags_button"
            size="small"
          >
            {{ tag.name }}
          </BaseButton>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import BaseButton from '../../BaseButton'
export default {
  name: 'NewsSidebar',
  components: {
    BaseButton
  },
  props: {
    tags: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>
.sidebar {
  /*display: flex;*/
  padding-left: 40px;
  height: 100%;
}
.sidebar__track {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.sidebar__item {
  margin-bottom: 75px;
}
.sidebar__title {
  font-weight: 400;
  text-transform: none;
  padding-bottom: 15px;
  border-bottom: 1px solid #e1e1e1;
}
.form-wrap {
  position: relative;
}
.form-label {
  padding-right: 70px;
  padding-left: 30px;

  font-size: 16px;
  letter-spacing: 0.1em;
  color: #9b9b9b;

  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  font-weight: 400;
  line-height: 26px;
  pointer-events: none;
  text-align: left;
  z-index: 9;
  transition: 0.25s;
  will-change: transform;
  transform: translateY(-50%);
}
.form-input {
  min-height: 60px;
  padding-right: 60px;
  padding-left: 20px;
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #9b9b9b;
  background: #f3f3f3;
  touch-action: manipulation;

  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 26px;
  border-radius: 0;
  -webkit-appearance: none;
  transition: 0.3s ease-in-out;
  border: 1px solid #f3f3f3;
}
.button_search {
  position: absolute;
  text-align: center;
  padding: 0 5px;
  right: 0;
  top: 0;
  height: 60px;
  width: 60px;
  font-size: 24px;
  line-height: 60px;
  border: none;
  outline: none;
  box-shadow: none;
  background: transparent;
  cursor: pointer;
  transition: all 250ms ease;
  color: black;
}
.button_search:hover {
  color: #b62e26;
  background: none;
}

.sidebar__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: -8px;
  margin-left: -8px;
  margin-top: 30px;
}
.tags_button {
  color: #9b9b9b;
  border-color: #e1e1e1;
  width: auto;
  min-width: 10px;
  /*flex: auto;*/
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 7px 20px;
  font-size: 12px;
}
.tags_button:hover {
  background-color: #ffb426;
  color: black;
  border-color: #ffb426;
}
</style>
