<template>
  <header class="w-full">
    <nav class="p-4 md:px-40 flex justify-between items-center">
      <div class="font-bold cursor-pointer text-primary" v-scroll-to="'#app'">
        ABED
      </div>
      <div>
        <!-- v-scroll-to="'#contact'" -->
        <button
          class="px-5 py-3 bg-primary lg:hover:bg-secondary text-white text-sm rounded-full font-semibold focus:outline-none"
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
