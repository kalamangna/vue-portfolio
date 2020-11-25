<template>
  <div id="app">
    <!-- navbar -->
    <nav
      class="bg-blacky shadow font-nunito text-grey p-4 flex justify-between items-center"
    >
      <div class="font-bold">
        ABED
      </div>
      <div>
        <button
          class="px-3 py-1 text-grey border border-grey text-sm rounded font-bold hover:bg-grey hover:text-blacky focus:outline-none tracking-wide"
          v-scroll-to="'#contact'"
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
      >
        &copy; 2020 - github.com/kalamangna
      </a>
    </footer>
    <!-- end footer -->
  </div>
</template>
