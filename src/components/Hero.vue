<template>
  <div class="hero">
    <h1 class="hero__name" data-aos="zoom-in" data-aos-duration="600">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: [
    'name'
  ]
}
</script>

<style scoped>
.hero {
  padding: 4rem;
  text-align: left;
}

.hero__name {
  font-family: 'Open Sans', sans-serif;
  font-size: 7.5rem;
  font-weight: lighter;
  line-height: 8.5rem;
  letter-spacing: 0rem;
  animation: fading 0.8s infinite;
  animation-direction: alternate;
  max-width: 50%;
}

@media (max-width: 960px) {
  .hero__name {
    font-size: 3rem;
    line-height: 4rem;
  }

  .hero {
    padding: 1rem;
  }
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
