<template lang="pug">
  .acoso
    h1.titulo.ac
      img(src="@/assets/iconos-violencias/icono-acoso.svg", alt="Ícono violencia física o psicológica", width="60") 
      | Acoso
    Botones
    section
      h1 {{ contenido[0].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[0].contenido", htmlSerializer)

      button(@click="ejemplos = !ejemplos").ejemplos Ver ejemplos
      prismic-rich-text(:field="contenido[1].contenido", v-if="ejemplos", htmlSerializer)
      
      button(@click="colegio = !colegio") {{ contenido[2].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[2].contenido", v-if="colegio", htmlSerializer)
      
      button(@click="universidad = !universidad") {{ contenido[3].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[3].contenido", v-if="universidad", htmlSerializer)
      
      button(@click="despues = !despues") {{ contenido[4].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[4].contenido", v-if="despues", htmlSerializer)
      
      button(@click="protocolos = !protocolos") {{ contenido[5].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[5].contenido", v-if="protocolos", htmlSerializer)

    
</template>
<script>
import Botones from "@/components/acoso/BotonesAcoso"
export default {
  name: 'educativos',
  props: ['municipio'],
  components: {
    Botones
  },
  data() {
    return {
      contenido: [],
      ejemplos: false,
      colegio: false,
      universidad: false,
      despues: false,
      protocolos: false
    }
  },
  methods: {
    getContent() {
      this.$prismic.client.query(
          this.$prismic.Predicates.at("document.id", "Xh6v9BAAACAAD7hZ")
      ).then(response => {
          this.contenido = response.results[0].data["secciones-violencias"].slice(3,9)
      });
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