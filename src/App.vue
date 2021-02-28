<template>
  <div id="app">
    <!-- header -->
    <Header />

    <!-- content -->
    <main style="padding-top: 76px">
      <router-view />
    </main>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
