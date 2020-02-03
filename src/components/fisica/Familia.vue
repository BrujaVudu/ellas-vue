<template lang="pug">
  section.fisica
    h1.titulo.fp
      img(src="@/assets/iconos-violencias/icono-fisica.svg", alt="Ícono violencia física o psicológica", width="60") 
      | Violencia en la familia
    Botones

    h1  {{data[0].subtitulo[0].text}}
    prismic-rich-text(:field="data[0].contenido")

    button(@click="uno = !uno") {{ data[1].subtitulo[0].text }}
    prismic-rich-text(:field="data[1].contenido", v-if="uno")

    button(@click="dos = !dos") {{ data[2].subtitulo[0].text }}
    prismic-rich-text(:field="data[2].contenido", v-if="dos")

    button(@click="tres = !tres") {{ data[3].subtitulo[0].text }}
    prismic-rich-text(:field="data[3].contenido", v-if="tres")

</template>
<script>
import Botones from "@/components/fisica/BotonesFisica"
export default {
  name: 'Violencia familiar',
  props: ['municipio'],
  components: {
    Botones
  },
  data() {
    return {
      uno: false,
      dos: false,
      tres: false,
      data: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.tags', ['Municipio ' + (this.$store.state.municipio[1][0].Categoria || 2)]),
        { orderings : '[my.violencias.posicion]' }
      ).then((response) => {
        this.data = response.results[0].data['secciones-violencias'].slice(2,6)
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