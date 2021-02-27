<template>
  <footer class="text-sm bg-black text-white">
    <div class="container p-4 md:px-20">
      &copy; {{ new Date().getFullYear() }} -
      <a
        href="https://github.com/kalamangna"
        target="_blank"
        rel="noopener noreferrer"
        class="lg:hover:underline font-semibold"
        @click="githubButton"
      >
        github.com/kalamangna
      </a>
    </div>
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
