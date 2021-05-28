<template>
  <div class="d-flex vh-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Head />
      <main class="px-3">
        <h1>About</h1>
        <p class="lead">its the text speaking lol</p>
      </main>
      <footer>Yes</footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Head from "@/components/Head.vue";

export default defineComponent({
  components: {
    Head,
  },
});
</script>
