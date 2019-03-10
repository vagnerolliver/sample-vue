<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th class="is-uppercase">{{ title }}</th>
        <th class="is-uppercase">{{ description }}</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="term in terms">
          <th>{{ term.name }}</th>
          <td>{{ term.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'ListTerms',
    computed: mapState({
      terms: state => state.terms.data
    }),
    created () {
      this.$store.dispatch('terms/getAllTerms')
      this.title = 'Título da minha pagina!'
      this.description = 'Minha descrição'
    },
  }
</script>


<style lang="sass">

  $color: red

  h1
    color: blue

</style>
