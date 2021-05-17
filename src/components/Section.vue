<template>
  <section>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Section'
}
</script>

<style scoped>
section {
  min-width: 100%;
  min-height: 100vh;
}
</style>
