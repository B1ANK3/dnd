<template>
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">D&D for the bois</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <router-link to="/" class="nav-link active" aria-current="page"
          >Home</router-link
        >
        <router-link to="/about" class="nav-link">About</router-link>
      </nav>
    </div>
  </header>
</template>

<!-- <a class="nav-link" href="#">Features</a>
<a class="nav-link" href="#">Contact</a> -->

<style lang="scss" scoped>
/*
 * Header
 */

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>