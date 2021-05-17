<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" md="6" lg="6">
        <div class="text-overline font-weight-light" v-text="copyright"></div>
      </v-col>
      <v-col class="d-flex" cols="12" md="6" lg="6">
        <v-container v-for="(item, index) in contacts" :key="index">
          <v-btn
            color="transparent"
            :href="item.link"
            target="_blank"
          >
            <v-icon color="white">
              {{item.icon}}
            </v-icon>
          </v-btn>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  props: ["copyright", "contacts"],
};
</script>