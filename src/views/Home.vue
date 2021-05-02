<template>
  <v-main class="main">
    <v-section class="hero">
      <v-hero greet="Hi, my name is" name="Fikri Rahmat Nurhidayat" />
    </v-section>

    <v-section class="description">
      <v-container class="description__container">
        <v-description content="I'm based on <b>Yogyakarta, Indonesia.</b> But, I can work <b>remotely</b>." />
        <d-map />
      </v-container>
    </v-section>
  </v-main>
</template>

<script>
import Section from '@/components/Section.vue'
import Hero from '@/components/Hero.vue'
import Description from '@/components/Description.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    'v-section': Section,
    'v-hero': Hero,
    'v-description': Description,
    'd-map': Map
  },
}
</script>

<style lang="scss" scoped>
@mixin d-flex-column {
  display: flex;
  flex-direction: column;
}

.main {
  background: #0D0D0D;
  color: white;
}

.hero {
  @include d-flex-column;
  align-items: flex-start;
  justify-content: flex-end;
}

.description {
  @include d-flex-column;
  align-items: center;
  justify-content: center;
}

.description__container {
  padding: 8rem;
}
</style>
