<template>
  <footer class="p-4 md:px-40 text-sm bg-primary text-white">
    &copy; 2020 -
    <a
      href="https://github.com/kalamangna"
      target="_blank"
      rel="noopener noreferrer"
      class="lg:hover:underline font-semibold"
      @click="githubButton"
    >
      github.com/kalamangna
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
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
