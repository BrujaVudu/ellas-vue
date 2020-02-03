<template lang="pug">
    section.fisica
      h1.titulo.fp
        img(src="@/assets/iconos-violencias/icono-fisica.svg", alt="Ícono violencia física o psicológica", width="60") 
        | Violencia física o psicológica

      Botones

      prismic-rich-text(:field="data[0].contenido")
      button(@click="denuncia = !denuncia") {{ data[1].subtitulo[0].text }}
      prismic-rich-text(:field="data[1].contenido", v-if="denuncia")

</template>
<script>
import Botones from "@/components/fisica/BotonesFisica"
export default {
  name: 'Violencia física',
  props: ['municipio'],
  components: {
    Botones
  },
  data() {
    return {
      denuncia: false,
      data: []
    }
  },
  methods: {
      getContent () {
          this.$prismic.client.query(
              this.$prismic.Predicates.at('document.tags', ['Municipio ' + (this.$store.state.municipio[1][0].Categoria || 2)]),
              { orderings : '[my.violencias.posicion]' }
          ).then((response) => {
              this.data = response.results[0].data['secciones-violencias'].slice(0,2)
          })
      }
  },
  created() {
      this.getContent();
  },
  watch: {
    municipio() {
      this.getContent()
    }
  }
}
</script>
<style lang="sass" scoped>
@import @/sass/componentes/_titulosViolencias
</style>  