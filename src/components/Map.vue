<template>
  <v-container class="map-container">
    <v-img src="@/assets/images/map.svg" height="100%" data-aos="fade-in" class="map" />
    <div class="point">
      <div class="sonar" />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style lang="scss" scoped>
.map-container {
  position: relative;
}

.map {
  z-index: 1;
  position: relative;
  min-width: 100%;
}

.point {
  width: 0.5em;
  height: 0.5em;
  min-width: 0.5rem;
  min-height: 0.5rem;
  border-radius: 100%;
  background-color: black;
  z-index: 2;
  top: 81%;
  left: 33%;
  position: absolute;
}

.sonar {
  top: 0;
  left: 0;
  animation: emit 2s infinite;
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 100%;
  background-color: black;
  z-index: 3;
  pointer-events: none;
}

@keyframes emit {
  from {
    opacity: 1.0;
  }

  to {
    opacity: 0;
    transform: scale(50);
  }
}
</style>
