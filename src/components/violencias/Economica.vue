<template lang="pug">
    section.economica
      h1.titulo.ec
        img(src="@/assets/iconos-violencias/icono-economica.svg", alt="Ícono violencia física o psicológica", width="60") 
        | Violencia económica
      prismic-rich-text(:field="contenido[0].contenido", htmlSerializer)

      button(@click="pasos.uno = !pasos.uno") {{ contenido[1].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[1].contenido", v-if="pasos.uno", htmlSerializer)

      button(@click="pasos.dos = !pasos.dos") {{ contenido[2].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[2].contenido", v-if="pasos.dos", htmlSerializer)
    
</template>
<script>
export default {
  name: 'Violencia económica',
  props: ['municipio'],
  data() {
      return {
        ejemplos: false,
        pasos: {
            uno: false,
            dos: false,
            tres: false                
        },
        contenido: []
      }
  },
  methods: {
    getContent () {
        this.$prismic.client.query(
            this.$prismic.Predicates.at('document.tags', ['Municipio ' + (this.$store.state.municipio[1][0].Categoria || 2)]),
            { orderings : '[my.violencias.posicion]' }
        ).then((response) => {
            this.contenido = response.results[2].data['secciones-violencias']
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