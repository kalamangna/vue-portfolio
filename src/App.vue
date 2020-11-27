<template>
  <div id="app">
    <!-- navbar -->
    <nav
      class="bg-blacky shadow font-nunito text-grey p-4 flex justify-between items-center fixed w-full z-50"
    >
      <div class="font-bold cursor-pointer" v-scroll-to="'#app'">
        ABED
      </div>
      <div>
        <button
          class="px-3 py-1 text-grey border border-grey text-sm rounded font-bold lg:hover:bg-grey lg:hover:text-blacky focus:outline-none tracking-wide"
          v-scroll-to="'#contact'"
          @click="hireMeButton"
        >
          HIRE ME
        </button>
      </div>
    </nav>
    <!-- end navbar -->

    <main>
      <router-view />
    </main>

    <!-- footer -->
    <footer class="bg-blackier p-4 text-grey">
      <a
        href="https://github.com/kalamangna"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold"
        @click="githubButton"
      >
        &copy; 2020 - github.com/kalamangna
      </a>
    </footer>
    <!-- end footer -->
  </div>
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
    githubButton() {
      this.$gtag.event("github-clicked", {
        event_category: "Link",
        event_label: "Github Link",
        value: 1,
      });
    },
  },
};
</script>
