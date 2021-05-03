<template>
  <c-section>
    <c-section class="about d-flex-column">
      <v-container fluid>
        <v-row align-content="center">
          <v-col cols="12" lg class="d-flex justify-content-center align-items-center">
            <h1 class="job" data-aos="zoom-in">Web Developer</h1>
          </v-col>
          <v-col cols="12" lg>
            <v-container fluid class="description" data-aos="fade-in" data-aos-delay="300">
              <p>Self taught and dextrous, started as a hobbyist and become a professional engineer. Help as <b>backend</b>, <b>frontend</b> or <b>fullstack developer.</b></p>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </c-section>

    <c-section class="how-i-work d-flex-column align-items-center justify-content-center">
      <v-container fluid class="d-flex align-items-center justify-content-center math">
        <v-container v-for="(i, index) in math" :key="index" class="argument--container">
          <h1 data-aos="flip-up" :data-aos-delay="index * 300">{{ i }}</h1>
        </v-container>
      </v-container>

      <v-container fluid class="d-flex align-items-center justify-content-center text-justify description">
        <p data-aos="fade-in">With proper functional requirement and design, I can help you achieve what your business needs by building your application.</p>
      </v-container>
    </c-section>
  </c-section>
</template>

<script>
import Section from '@/components/Section.vue'

export default {
  name: 'About',
  components: {
    'c-section': Section
  },
  data: () => ({
    math: [
      'Functional Requirement',
      '+',
      'Design',
      '+',
      'Me',
      '=',
      'Business Results'
    ]
  }),
  props: [
    'content'
  ]
}
</script>

<style lang="scss" scoped>
.about {
  align-items: center;
  justify-content: center;

  .job {
    font-family: 'Open Sans', sans-serif;
    font-size: 5rem;
    font-weight: 300;
    line-height: 8.5rem;
    letter-spacing: 0rem;
  }
}

.description {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  text-align: justify;
  padding: 4rem;

  p {
    line-height: 3rem;
  }
}

.how-i-work {
  .math {
    transition: 0.3s;
    padding: 4rem;

    .argument--container {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
    }
    
    h1 {
      font-size: 3rem;
      font-weight: 300;
    }
  }

  .description {
    padding: unset;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 960px) {
    .math {
      padding: 4rem;
      .argument--container {
        padding: 0;
      }

      h1 {
        font-size: 2rem;
      }
    }
  }
}

</style>
