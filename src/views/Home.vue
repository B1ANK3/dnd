<template>
  <div class="d-flex vh-100 text-center text-white bg-dark">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <HomeHead />
      <HomeBody />
      <HomeFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHead from "@/components/Head.vue";
import HomeBody from "@/components/Body.vue";
import HomeFooter from "@/components/Footer.vue";

export default defineComponent({
  components: {
    HomeHead,
    HomeBody,
    HomeFooter,
  },
});
</script>


<style lang="scss">
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

/*
 * Globals
 */

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}

/*
 * Base structure
 */

body {
  text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.cover-container {
  max-width: 42em;
}
</style>