<template>
  <v-container class="experience py-12 px-4">
    <v-timeline align-top dark :dense="$vuetify.breakpoint.mdAndDown">
      <v-timeline-item
        data-aos="fade-in"
        v-for="(item, index) in data"
        :key="index"
        color="white"
        small
      >
        <template v-slot:opposite v-if="!!item.image">
          <img :src="item.image" style="max-height: 5rem" data-aos="zoom-in" />
        </template>
        <v-container
          fluid
          class="text-left"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <v-badge color="transparent" inline>
            <template v-slot:badge>
              <div
                v-text="item.position"
                class="text-overline font-weight-thin"
              ></div>
            </template>
            <div
              class="text-h4 font-weight-normal mb-4 place--text"
              v-text="item.title"
              @click="redirect(item.link)($event)"
            ></div>
          </v-badge>

          <div
            class="text-subtitle mb-4"
            v-if="!!item.subtitle"
            v-text="item.subtitle"
          ></div>
          <div
            class="text-body-2 font-weight-light mb-4"
            v-text="item.description"
          ></div>
          <div class="text-overline mb-4" v-html="item.time"></div>
        </v-container>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  name: "Experience",
  props: ["data"],
  methods: {
    redirect: (link) => () => {
      window.open(link, "_blank").focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.place--text {
  cursor: pointer;
}
</style>