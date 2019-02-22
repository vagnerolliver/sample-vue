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
        <tr v-for="(term, index) in terms">
          <th>{{ term.name }}</th>
          <td>{{ term.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getTerms } from "@/untils/crud";

  export default {
    name: 'ListTerms',
    data () {
      return {
        title: '',
        description: '',
        terms: []
      }
    },
    created () {
      this.title = 'Título da minha pagina!'
      this.description = 'Minha descrição'
    },
    mounted () {
      this.listTerms();
    },
    methods: {
      listTerms: function() {
        return getTerms('terms')
          .then(response => {
            this.terms = response
          })
      }
    }
  }
</script>


<style lang="sass">

  $color: red

  h1
    color: blue

</style>
