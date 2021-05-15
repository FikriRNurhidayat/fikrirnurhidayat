<template>
  <v-container class="stack py-12">
    <v-row
      class="white pa-0 black--text px-md-4 rounded"
      style="min-height: 100%"
    >
      <v-col
        v-for="(item, index) in data"
        cols="12"
        md="6"
        lg="6"
        class="pa-0"
        :key="index"
      >
        <c-role
          :name="item.name"
          :image="item.logo"
          :description="item.description"
          :tagline="item.tagline"
          :stacks="item.items"
        ></c-role>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Role from "@/components/Role.vue";

export default {
  name: "Stack",
  components: {
    "c-role": Role,
  },
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.stack {
  min-height: 100vh;
}
</style>