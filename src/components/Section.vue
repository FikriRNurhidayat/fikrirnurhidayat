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
  width: 100%;
  min-height: 100vh;
}
</style>
