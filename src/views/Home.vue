<template>
  <div>
    <section class="bg-gray-50">
      <div
        class="container px-4 md:px-20 py-10 md:py-16 grid lg:grid-cols-2 gap-20 items-center"
      >
        <div class="text-center lg:text-left">
          <h1 class="text-2xl lg:text-4xl font-bold mb-4">
            Abd Dzuljalali Wal Ikram
          </h1>

          <p class="mb-10">
            Hello. You can call me
            <span class="font-semibold">Abed.</span>
            I'm a detail oriented Frontend Developer based in South Sulawesi,
            Indonesia. With more than 1 year professional experience in website
            development, I have acquired the skills necessary to build great
            websites. Maybe I don't need an inspirational quote, just buy me a
            coffee!
          </p>

          <div class="py-3">
            <a
              href="Resume - Abd Dzuljalali Wal Ikram.pdf"
              download
              rel="noopener noreferrer"
              class="px-5 py-3 bg-black lg:hover:bg-primary text-white text-sm rounded-full font-semibold focus:outline-none"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
        <div>
          <img
            src="@/assets/img/dev_productivity.svg"
            alt="freelancer"
            class="w-3/4 lg:w-full mx-auto"
          />
        </div>
      </div>
    </section>

    <section class="bg-gray-100">
      <div
        class="container px-4 py-10 md:px-20 md:py-16 grid lg:grid-cols-3 gap-20 items-center"
      >
        <div>
          <img
            src="@/assets/img/web_developer.svg"
            alt="developer"
            class="w-3/4 mx-auto lg:w-full"
          />
        </div>
        <div class="lg:col-span-2">
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-bold mb-2">
              Specializing in
            </h3>

            <p class="mb-10 font-medium">
              Frontend Website Development
            </p>
          </div>

          <div
            class="grid grid-cols-2 md:grid-cols-3 items-center gap-4 md:gap-y-6"
          >
            <div
              v-for="(skill, i) in skills"
              :key="skill.text"
              :class="
                i % 2 === 0
                  ? `text-center border border-black p-2 lg:hover:bg-primary lg:hover:text-white lg:hover:border-0 rounded-2xl`
                  : `text-center border border-black p-2 lg:hover:bg-primary lg:hover:text-white lg:hover:border-0 rounded-2xl md:w-3/4 md:mx-auto`
              "
            >
              <p>{{ skill.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-50">
      <div class="container px-4 md:px-20 py-10 md:py-16 text-center">
        <h3 class="text-2xl font-bold mb-2">
          Works
        </h3>

        <p class="mb-10 font-medium">
          Finished and On Going Projects
        </p>

        <div class="grid lg:grid-cols-3 gap-12">
          <div v-for="(work, i) in works" :key="i">
            <div class="shadow-xl rounded-2xl hover:shadow-2xl overflow-hidden">
              <div v-if="i < 2">
                <img
                  :src="work.img"
                  alt="portfolio"
                  class="h-80 w-full object-contain object-top"
                />
              </div>
              <div v-else class="h-80 flex justify-center items-center">
                <p class="font-medium">You are here</p>
              </div>
            </div>

            <p class="font-semibold mt-6 mb-1">{{ work.title }}</p>
            <p class="text-sm mb-5">{{ work.detail }}</p>
            <div class="py-3">
              <a
                v-if="i < 2"
                :href="work.link"
                target="_blank"
                rel="noopener noreferrer"
                class="w-40 px-5 py-3 bg-black lg:hover:bg-primary text-white text-sm rounded-full font-semibold focus:outline-none"
                @click="seeLiveButton"
              >
                SEE LIVE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100" id="contact">
      <div class="container px-4 md:px-20 py-10 md:py-16">
        <div class="shadow-xl p-10 rounded-2xl text-center bg-white">
          <h3 class="text-2xl font-bold mb-10">
            Get In Touch
          </h3>

          <div class="grid gap-8 items-center justify-center">
            <div
              v-for="contact in contacts"
              :key="contact.text"
              class="grid grid-cols-6 items-center text-left"
            >
              <img :src="contact.icon" alt="contact" class="w-6 h-6" />
              <a
                :href="contact.link"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:underline col-span-5"
                @click="contactButton"
              >
                <p>
                  {{ contact.text }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      about: `Hello. You can call me Abed. I'm a detail oriented Frontend Developer based in South Sulawesi, Indonesia. With more than 1 year professional experience in website development, I have acquired the skills necessary to build great websites. Maybe I don't need an inspirational quote, just buy me a coffee!`,
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
          text: "Responsive Web",
        },
        {
          text: "Javascript",
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
  metaInfo() {
    let about = this.about;
    return {
      // HTML Meta Tags
      title: "Abd Dzuljalali Wal Ikram - Frontend Developer",
      titleTemplate: "Abd Dzuljalali Wal Ikram - Frontend Developer",
      meta: [
        {
          name: "description",
          content: about,
        },
        // Facebook Meta Tags
        {
          property: "og:title",
          content: "Abd Dzuljalali Wal Ikram - Frontend Developer",
        },
        {
          property: "og:description",
          content: about,
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
          content: "Abd Dzuljalali Wal Ikram - Frontend Developer",
        },
        {
          name: "twitter:description",
          content: about,
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
    };
  },
  methods: {
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
