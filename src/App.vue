<template>
  <div class="container section">
    <NavBar />
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  import NavBar from '@/components/NavBar.vue'


  export default {
    name: 'app',
    components: {
      NavBar
    }
  }
</script>


<style lang="sass">

  $color: red

  h1
    color: blue

</style>

