<template lang="pug">
    section.sexual
        h1.titulo.sx
          img(src="@/assets/iconos-violencias/icono-sexual.svg", alt="Ícono violencia física o psicológica", width="60") 
          | Violencia sexual
        prismic-rich-text(:field="data[0].contenido")

        button(@click="ejemplos = !ejemplos").ejemplos Ver ejemplos
        prismic-rich-text(:field="data[1].contenido", v-if="ejemplos", htmlSerializer)

        p Si eres víctima de violencia sexual, sigue estos pasos:

        button(@click="pasos.uno = !pasos.uno") {{ data[2].subtitulo[0].text }}
        prismic-rich-text(:field="data[2].contenido", v-if="pasos.uno", htmlSerializer)

        button(@click="pasos.dos = !pasos.dos") {{ data[3].subtitulo[0].text }}
        prismic-rich-text(:field="data[3].contenido", v-if="pasos.dos", htmlSerializer)

        button(@click="pasos.tres = !pasos.tres") {{ data[4].subtitulo[0].text }}
        prismic-rich-text(:field="data[4].contenido", v-if="pasos.tres", htmlSerializer)
    
</template>
<script>
export default {
  name: "Violencia sexual",
  props: ['municipio'],
  data() {
      return {
        data: [],
          ejemplos: false,
          pasos: {
              uno: false,
              dos: false,
              tres: false                
          }
      }
  },
  methods: {
      getContent () {
          this.$prismic.client.query(
              this.$prismic.Predicates.at('document.tags', ['Municipio ' + (this.$store.state.municipio[1][0].Categoria || 2)]),
              { orderings : '[my.violencias.posicion]' }
          ).then((response) => {
              this.data = response.results[1].data['secciones-violencias']
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
.ejemplos 
  background: #aa3e66
  color: white
  margin: 2em 0
</style>