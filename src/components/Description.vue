<template>
  <div class="description" data-aos="zoom-in" data-aos-duration="600">
    <p v-html="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: [
    'content'
  ]
}
</script>

<style scoped>
.description {
  font-size: 1.5rem;
  padding: 8rem 0rem;
}

@keyframes description--appear {
  from {
    transform: translateY(50%);
    opacity: 0.1;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>
