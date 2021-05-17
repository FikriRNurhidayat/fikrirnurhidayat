<template>
  <v-app>
    <v-main class="main">
      <c-main :content="main"></c-main>
      <c-about :name="about.name" :description="about.description"></c-about>
      <c-stack :data="stacks"></c-stack>
      <c-experience :data="experiences"></c-experience>
      <v-divider dark></v-divider>
      <c-footer
        :copyright="footer.copyright"
        :contacts="footer.contacts"
      ></c-footer>
    </v-main>
  </v-app>
</template>

<script>
import Main from "@/components/Section/Main.vue";
import About from "@/components/Section/About.vue";
import Stack from "@/components/Section/Stack.vue";
import Experience from "@/components/Section/Experience.vue";
import Footer from "@/components/Section/Footer.vue";

export default {
  name: "Home",
  components: {
    "c-main": Main,
    "c-about": About,
    "c-stack": Stack,
    "c-experience": Experience,
    "c-footer": Footer,
  },
  data: () => ({
    main: "Web Developer",
    about: {
      name: "Fikri Rahmat Nurhidayat",
      description:
        "Mentor, Backend Developer, and Frontend Developer, or as you can tell, I'm fullstack developer.",
    },
    stacks: [
      {
        name: "Back-end Developer",
        logo: require("@/assets/images/backend.png"),
        description:
          "I love to write code, especially when it comes to the business logic, I love the complexity behind everything.",
        tagline: "I'm fluent on these stacks",
        items: [
          {
            name: "Ruby",
            image: require("@/assets/images/ruby.png"),
          },
          {
            name: "Node.js",
            image: require("@/assets/images/javascript.png"),
          },
          {
            name: "Ruby on Rails",
            image: require("@/assets/images/rails.png"),
          },
          {
            name: "Postgresql",
            image: require("@/assets/images/postgresql.png"),
          },
          {
            name: "MongoDB",
            image: require("@/assets/images/mongodb.png"),
          },
        ],
      },
      {
        name: "Front-end Developer",
        logo: require("@/assets/images/frontend.png"),
        description:
          "Converting UI design into a real application is my favourite.",
        tagline: "Things I use to make it happens",
        items: [
          {
            name: "HTML",
            image: require("@/assets/images/html.png"),
          },
          {
            name: "CSS",
            image: require("@/assets/images/css.png"),
          },
          {
            name: "Sass",
            image: require("@/assets/images/sass.png"),
          },
          {
            name: "Vue.js",
            image: require("@/assets/images/vue.png"),
          },
          {
            name: "React.js",
            image: require("@/assets/images/react.png"),
          },
        ],
      },
    ],
    experiences: [
      {
        title: "Binar Academy",
        description: "Help Binar build application that showcases their work.",
        time: "February 2019 - May 2019",
        position: "Intern Backend Engineer",
        image: require("@/assets/images/binar.png"),
        link: "https://binaracademy.com",
      },
      {
        title: "Glints Academy",
        subtitle: "Powered by Binar Academy",
        description:
          "Teach people how to write code and land on a job in the tech industry.",
        time: "August 2019 - August 2020",
        position: "Backend Engineering Mentor",
        image: require("@/assets/images/glints.svg"),
        link: "https://glints.com",
      },
      {
        title: "Tutore",
        subtitle: "Powered by Qatros",
        description:
          "Help tutore build their application to help people to learn English easily by building their backend application.",
        time: "August 2019 - March 2020",
        position: "Backend Engineer",
        image: require("@/assets/images/tutore.png"),
        link: "https://qatros.com",
      },
      {
        title: "Program Vokasi Indonesia Bekerja",
        subtitle: "Powered by Binar Academy & BPJS Ketenagakerjaan",
        description:
          "Teach people on how to build fullstack web application easily in a month.",
        time: "November 2019 - December 2019",
        position: "Fullstack Engineering Mentor",
        image: require("@/assets/images/bpjs.png"),
        link: "https://www.binaracademy.com/blog?tag=Program%20Vokasi%20Indonesia%20Bekerja&category=Binar%20x",
      },
      {
        title: "Binar Academy",
        description:
          "Help Binar build application that improves learning experience.",
        time: "August 2020 - <b>Present</b>",
        position: "Backend Engineer",
        image: require("@/assets/images/binar.png"),
        link: 'https://binaracademy.com'
      },
    ],
    footer: {
      copyright: "Fikri Rahmat Nurhidayat © 2019 - 2021",
      contacts: [
        {
          icon: "mdi-email",
          link: "mailto:fikrirnurhidayat@gmail.com",
        },
        {
          icon: "mdi-github",
          link: "https://github.com/FikriRNurhidayat",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/fikrirnurhidayat",
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
@mixin d-flex-column {
  display: flex;
  flex-direction: column;
}

.main {
  background: #0d0d0d;
  color: white;
}
</style>
