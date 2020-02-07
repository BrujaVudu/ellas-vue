<template lang="pug">
    section.politica
      h1.titulo.pl
        img(src="@/assets/iconos-violencias/icono-politica.svg", alt="Ícono violencia física o psicológica", width="60") 
        | Violencia política
      prismic-rich-text(:field="contenido[0].contenido")

      button(@click="ejemplos = !ejemplos").ejemplos Ver ejemplos
      prismic-rich-text(:field="contenido[1].contenido", v-if="ejemplos", htmlSerializer)

      h3 Si eres víctima de violencia política sigue estos pasos:

      button(@click="pasos.uno = !pasos.uno") {{ contenido[2].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[2].contenido", v-if="pasos.uno", htmlSerializer)

      button(@click="pasos.dos = !pasos.dos") {{ contenido[3].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[3].contenido", v-if="pasos.dos", htmlSerializer)
      
      button(@click="pasos.tres = !pasos.tres") {{ contenido[4].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[4].contenido", v-if="pasos.tres", htmlSerializer)

      button(@click="pasos.cuatro = !pasos.cuatro") {{ contenido[5].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[5].contenido", v-if="pasos.cuatro", htmlSerializer)
      
      button(@click="pasos.cinco = !pasos.cinco") {{ contenido[6].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[6].contenido", v-if="pasos.cinco", htmlSerializer)

      button(@click="pasos.seis = !pasos.seis") {{ contenido[7].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[7].contenido", v-if="pasos.seis", htmlSerializer)
  
</template>
<script>
export default {
  name: 'Violencia política',
  props: ['municipio'],
  data() {
      return {
        ejemplos: false,
        pasos: {
            uno: false,
            dos: false,
            tres: false,              
            cuatro: false,
            cinco: false,
            seis: false
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
            this.contenido = response.results[3].data['secciones-violencias']
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