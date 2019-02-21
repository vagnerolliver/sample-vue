<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <router-link class="navbar-item" tag="a" to="/terms">
      Termos
    </router-link>

    <router-link class="navbar-item" tag="a" to="/terms/list">
      Lista Termos
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
  }
</script>

<style lang="sass">
  .navbar
    border-bottom: 1px solid grey
    margin-bottom: 3rem

  .navbar-item
    &.router-link-exact-active
      border-bottom: 1px solid blue
</style>



