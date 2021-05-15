<template>
  <c-section class="section d-flex-column">
    <c-hero :name="content" />
  </c-section>
</template>

<script>
import Section from '@/components/Section.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Main',
  components: {
    'c-section': Section,
    'c-hero': Hero
  },
  props: [
    'content'
  ]
}
</script>

<style lang="scss" scoped>
.section {
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
