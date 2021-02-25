<template>
  <header class="w-full py-5">
    <nav class="container flex justify-between items-center">
      <div
        class="font-semibold cursor-pointer text-primary"
        v-scroll-to="'#app'"
      >
        ABED
      </div>
      <div>
        <button
          class="px-5 py-3 bg-primary lg:hover:bg-secondary text-white text-sm rounded-full font-semibold focus:outline-none"
          v-scroll-to="'#contact'"
          @click="hireMeButton"
        >
          CONTACT ME
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
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
