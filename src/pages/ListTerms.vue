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
        <tr>
          <th>BOTAO_CANCELAR</th>
          <td>Cancelar</td>
        </tr>
        <tr>
          <th>BOTAO_DELETAR</th>
          <td>Deletar</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'ListTerms',
    data () {
      return {
        title: '',
        description: ''
      }
    },
    created () {
      this.title = 'Título da minha pagina!'
      this.description = 'Minha descrição'
    }
  }
</script>


<style lang="sass">

  $color: red

  h1
    color: blue

</style>
