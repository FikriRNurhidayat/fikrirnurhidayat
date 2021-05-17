<template>
  <v-container fluid class="me py-15">
    <v-row align="center" style="min-height: 50vh">
      <v-col cols="12" md="6" lg="6">
        <div class="main" v-text="name" data-aos="fade-in"></div>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <div
          class="body"
          v-text="description"
          data-aos="fade-in"
          data-aos-delay="300"
        ></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  props: ["name", "description"],
};
</script>

<style lang="scss" scoped>
.me {
  .main {
    font-size: 2rem;
  }

  .body {
    text-align: justify;
  }
}
</style>
