<template>
  <div class="DefaultLayout">
    <base-toolbar></base-toolbar>
    <div class="DefaultLayout__content">
      <nuxt />
    </div>
    <div class="footer">
      <BaseFooter />
    </div>
  </div>
</template>

<script>
import BaseToolbar from '@/components/BaseToolbar'
import BaseFooter from '@/components/BaseFooter'
export default {
  components: { BaseToolbar, BaseFooter }
}
</script>

<style>
.DefaultLayout {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100%;
}
.DefaultLayout__content {
  flex: 1 0 auto;
}

.footer {
  flex: 0 0 auto;
}
</style>
