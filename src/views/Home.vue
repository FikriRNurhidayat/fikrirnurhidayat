<template>
  <v-main class="main">
    <c-main />
    <c-about />
  </v-main>
</template>

<script>
import Main from '@/components/Section/Main.vue';
import About from '@/components/Section/About.vue';

export default {
  name: 'Home',
  components: {
    'c-main': Main,
    'c-about': About
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
</style>
