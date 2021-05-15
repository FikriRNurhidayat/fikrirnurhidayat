<template>
  <div class="pa-15 d-flex flex-column" style="height: 100%;">
    <div class="d-flex flex-column flex-grow-1">
      <div data-aos="fade-in">
        <img :src="image">
      </div>

      <div data-aos="fade-in">
        <h1 class="py-4">{{ name }}</h1>
      </div>

      <div data-aos="fade-in" class="text-center py-4">
        <p>{{ description }}</p>
      </div>
    </div>

    <div data-aos="fade-in" class="flex-grow-1">
      <div data-aos="fade-in">
        <h3>{{ tagline }}</h3>
      </div>

      <v-container>
        <v-row>
          <v-col cols="6" md="4" lg="4" xl="4" v-for="(stack, index) in stacks" :key="index" data-aos="zoom-in">
            <img :src="stack.image" class="py-4">
            <h5>{{ stack.name }}</h5>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Role',
  props: [
    'name',
    'image',
    'stacks',
    'description',
    'tagline'
  ]
}
</script>