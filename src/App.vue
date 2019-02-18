<template>
  <div id="app" class="container section">
    <NavBar />
    <router-view></router-view>
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

