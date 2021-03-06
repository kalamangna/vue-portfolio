<template>
  <header
    :class="
      isScroll
        ? `fixed w-full bg-gray-50 shadow-lg transition ease-out duration-1000 z-50`
        : `fixed w-full bg-gray-50 transition ease-in z-50`
    "
  >
    <nav class="container p-4 md:px-20 flex justify-between items-center">
      <div class="font-bold cursor-pointer" v-scroll-to="'#app'">
        ABED
      </div>
      <div>
        <button
          class="px-5 py-3 bg-black lg:hover:bg-primary text-white text-sm rounded-full font-semibold focus:outline-none"
          @click="hireMeButton"
          v-scroll-to="'#contact'"
        >
          CONTACT ME
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScroll = window.scrollY ? true : false;
    },
    hireMeButton() {
      this.$gtag.event("hire-me-clicked", {
        event_category: "Button",
        event_label: "Hire Me",
        value: 1,
      });
    },
  },
};
</script>

<style></style>
