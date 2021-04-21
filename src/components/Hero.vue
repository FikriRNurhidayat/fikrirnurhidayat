<template>
  <div class="hero" data-aos="fade-up" data-aos-duration="600">
    <h5 class="hero__greet">{{ greet }}</h5>
    <h1 class="hero__name">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: [
    'greet',
    'name'
  ]
}
</script>

<style scoped>
.hero {
  padding: 4rem;
  text-align: left;
}

.hero__greet {
  font-size: 2rem;
  font-weight: 400;
}

.hero__name {
  font-size: 4rem;
  animation: fading 0.8s infinite;
  animation-direction: alternate;
}

@keyframes fading {
  from {
    opacity: 1.0;
  }

  to {
    opacity: 0.5;
  }
}
</style>