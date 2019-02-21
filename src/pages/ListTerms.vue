<template>
  <span>{{ message }}</span>
</template>

<script>
  export default {
    name: 'ListTerms',
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      this.message = 'bye!'
    }
  }
</script>
