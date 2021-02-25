<template>
  <div class="container">
    <section class="lg:flex py-10 items-center">
      <div class="lg:w-1/2">
        <h1 class="text-4xl font-bold mb-4">
          Abd Dzuljalali Wal Ikram
        </h1>
        <p class="pr-24 mb-10">
          Hello. You can call me
          <span class="font-semibold">Abed.</span>
          I'm a detail oriented Frontend Developer based in South Sulawesi,
          Indonesia. With more than 1 year professional experience in website
          development, I have acquired the skills necessary to build great
          websites. Maybe I don't need an inspirational quote, just buy me a
          coffee!
        </p>
        <a
          href="Resume - Abd Dzuljalali Wal Ikram.pdf"
          download
          rel="noopener noreferrer"
          class="px-5 py-3 bg-primary lg:hover:bg-secondary text-white text-sm rounded-full font-semibold focus:outline-none"
        >
          DOWNLOAD RESUME
        </a>
      </div>
      <div class="lg:w-1/2">
        <img src="@/assets/img/programmer.svg" alt="freelancer" />
      </div>
    </section>

    <!-- end banner -->

    <!-- card -->
    <!-- <div class="bg-blacky mt-10 md:mt-20 p-5 md:p-10 rounded shadow lg:flex"> -->
    <!-- about -->
    <!-- <div class="lg:w-1/2">
          <h2 class="font-nunito font-bold text-3xl tracking-wide">
            About
          </h2>
          <hr class="w-10 mt-3 mb-6" />
          <p class="lg:pr-10">
            My name is
            <span class="font-bold">Abd Dzuljalali Wal Ikram.</span> I'm a
            detail oriented Frontend Developer based in South Sulawesi,
            Indonesia. With more than 1 year professional experience in website
            development, I have acquired the skills necessary to build great
            websites. Maybe I don't need an inspirational quote, just buy me a
            coffee!
          </p>
        </div> -->
    <!-- end about -->

    <!-- skills -->
    <!-- <div class="lg:w-1/2 mt-8 lg:mt-0">
          <h2 class="font-nunito font-bold text-3xl tracking-wide">
            Skills
          </h2>
          <hr class="w-10 mt-3 mb-6" />
          <div class="flex">
            <div class="w-1/2">
              <div
                class="flex items-center pb-1 last:pb-0"
                v-for="skill in skills.slice(0, 6)"
                :key="skill.text"
              >
                <div class="w-2 h-2 mr-3 rounded bg-grey"></div>
                <p>{{ skill.text }}</p>
              </div>
            </div>
            <div class="w-1/2">
              <div
                class="flex items-center pb-1 last:pb-0"
                v-for="skill in skills.slice(6, 12)"
                :key="skill.text"
              >
                <div class="w-2 h-2 mr-3 rounded bg-grey"></div>
                <p>{{ skill.text }}</p>
              </div>
            </div>
          </div>
        </div> -->
    <!-- end skills -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- end card -->

    <!-- goto button -->
    <!-- <div class="h-10 bg-blackier">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-10 mx-auto animate-bounce cursor-pointer"
        v-scroll-to="{ el: '#works', offset: -50 }"
        @click="scrollButton"
      >
        <path
          fill-rule="evenodd"
          d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div> -->
    <!-- end goto button -->

    <!-- works -->
    <!-- <div
      class="bg-blackier px-4 py-10 md:px-40 md:py-20 text-center"
      id="works"
    >
      <h2 class="font-nunito font-bold text-3xl tracking-wide">
        Works
      </h2>
      <hr class="w-10 mt-3 mb-10 mx-auto" />
      <div class="flex flex-wrap justify-between">
        <div
          v-for="(work, i) in works"
          :key="i"
          class="w-full lg:w-80 h-auto mb-8 last:mb-0"
        >
          <div class="bg-blacky p-4 h-80 w-full rounded shadow">
            <img
              v-if="i < 2"
              class="h-full w-full object-cover object-top rounded"
              :src="work.img"
              alt="portfolio"
            />
            <div
              v-else
              class="flex justify-center items-center h-full w-full font-bold text-2xl"
            >
              You are here
            </div>
          </div>
          <h3 class="text-lg font-semibold mt-3">{{ work.title }}</h3>
          <p class="mb-5">{{ work.detail }}</p>
          <a
            v-if="i < 2"
            :href="work.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-grey text-sm px-3 py-1 shadow rounded border border-grey font-nunito font-bold tracking-wide lg:hover:bg-grey lg:hover:text-blackier"
            @click="seeLiveButton"
          >
            SEE LIVE
          </a>
        </div>
      </div>
    </div> -->
    <!-- end works -->

    <!-- contact -->
    <!-- <div
      class="bg-blacky px-4 py-10 md:px-40 md:py-20 text-center"
      id="contact"
    >
      <h2 class="font-nunito font-bold text-3xl tracking-wide">
        Contact
      </h2>
      <hr class="w-10 mt-3 mb-10 mx-auto" />
      <div class="inline-block">
        <a
          v-for="contact in contacts"
          :key="contact.text"
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline flex justify-center items-center py-2"
          @click="contactButton"
        >
          <img :src="contact.icon" alt="contact" class="w-6 h-6 mr-3" />
          {{ contact.text }}
        </a>
      </div>
      <a
        href="Resume - Abd Dzuljalali Wal Ikram.pdf"
        download
        rel="noopener noreferrer"
        class="text-grey text-sm px-3 py-1 shadow rounded border border-grey font-nunito font-bold tracking-wide lg:hover:bg-grey lg:hover:text-blackier block w-48 mx-auto mt-8"
      >
        DOWNLOAD RESUME
      </a>
    </div> -->
    <!-- end contact -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      skills: [
        {
          text: "Vue.js",
        },
        {
          text: "Nuxt.js",
        },
        {
          text: "React.js",
        },
        {
          text: "HTML",
        },
        {
          text: "CSS",
        },
        {
          text: "SCSS",
        },
        {
          text: "Javascript",
        },
        {
          text: "Responsive Web",
        },
        {
          text: "Bootstrap",
        },
        {
          text: "Vuetify",
        },
        {
          text: "Tailwind CSS",
        },
        {
          text: "Material UI",
        },
      ],
      contacts: [
        {
          icon: require("@/assets/icon/gmail.svg"),
          text: "kalamangna@gmail.com",
          link: "mailto:kalamangna@gmail.com",
        },
        {
          icon: require("@/assets/icon/whatsapp.svg"),
          text: "+62 82188344982",
          link: "https://wa.me/6282188344982",
        },
        {
          icon: require("@/assets/icon/linkedin.svg"),
          text: "Abd Dzuljalali Wal Ikram",
          link: "https://linkedin.com/in/kalamangna",
        },
      ],
      works: [
        {
          img: require("@/assets/img/travling.jpg"),
          title: "Travling Landing Page",
          detail: "Nuxt.js + Vuetify",
          link: "https://travling.id",
        },
        {
          img: require("@/assets/img/ekspose.jpg"),
          title: "Ekspose Sulsel News",
          detail: "Wordpress API + Nuxt.js + Tailwind CSS",
          link: "https://ekspose-sulsel.herokuapp.com",
        },
        {
          title: "Portfolio Website",
          detail: "Vue.js + Tailwind CSS",
          link: "https://kalamangna.github.io",
        },
      ],
    };
  },
  metaInfo: {
    // HTML Meta Tags
    title: "Abd Dzuljalali Wal Ikram - Frontend Developer Portfolio",
    titleTemplate: "Abd Dzuljalali Wal Ikram - Frontend Developer Portfolio",
    meta: [
      {
        name: "description",
        content:
          "Hello! My name is Abd. Dzuljalali Wal Ikram. I'm a Frontend Developer (especially Vue.js) based in Makassar, Indonesia. With more than 1 year professional experience in website development, I have acquired the skills necessary to build great and premium websites.",
      },
      // Facebook Meta Tags
      {
        property: "og:title",
        content: "Abd Dzuljalali Wal Ikram - Frontend Developer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Hello! My name is Abd. Dzuljalali Wal Ikram. I'm a Frontend Developer (especially Vue.js) based in Makassar, Indonesia. With more than 1 year professional experience in website development, I have acquired the skills necessary to build great and premium websites.",
      },
      {
        property: "og:url",
        content: "https://kalamangna.github.io",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://kalamangna.github.io/abed.png",
      },
      // Twitter Meta Tags
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:domain",
        content: "kalamangna.github.io",
      },
      {
        property: "twitter:url",
        content: "https://kalamangna.github.io",
      },
      {
        name: "twitter:title",
        content: "Abd Dzuljalali Wal Ikram - Frontend Developer Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Hello! My name is Abd. Dzuljalali Wal Ikram. I'm a Frontend Developer (especially Vue.js) based in Makassar, Indonesia. With more than 1 year professional experience in website development, I have acquired the skills necessary to build great and premium websites.",
      },
      {
        name: "twitter:image",
        content: "https://kalamangna.github.io/abed.png",
      },
      {
        name: "twitter:creator",
        content: "@kalamangna",
      },
    ],
  },
  methods: {
    scrollButton() {
      this.$gtag.event("go-to-clicked", {
        event_category: "Button",
        event_label: "Go To",
        value: 1,
      });
    },
    seeLiveButton() {
      this.$gtag.event("see-live-clicked", {
        event_category: "Link",
        event_label: "See Live",
        value: 1,
      });
    },
    contactButton() {
      this.$gtag.event("contact-clicked", {
        event_category: "Link",
        event_label: "Contact Link",
        value: 1,
      });
    },
  },
};
</script>
