<template lang="pug">
  .acoso
    section
      h1.titulo.ac
        img(src="@/assets/iconos-violencias/icono-acoso.svg", alt="Ícono violencia física o psicológica", width="60") 
        | Acoso
      h2 ¿Qué es acoso?
      prismic-rich-text(:field="contenido[0].contenido")

      Botones

      //- Cómo saber
      button(@click="saber = !saber") {{ contenido[1].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[1].contenido", v-if="saber")
      
      //- Recomendaciones
      button(@click="recomendaciones = !recomendaciones") {{ contenido[2].subtitulo[0].text }}
      prismic-rich-text(:field="contenido[2].contenido", v-if="recomendaciones")
      
</template>
<script>
import Botones from "@/components/acoso/BotonesAcoso"
export default {
  name: "Acoso",
  props: ['municipio'],
  components: {
      Botones 
  },
  data() {
    return {
      contenido: [],
      presentacion: true,
      saber: false,
      recomendaciones: false
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.query(
          this.$prismic.Predicates.at("document.id", "Xh6v9BAAACAAD7hZ")
      ).then(response => {
          this.contenido = response.results[0].data["secciones-violencias"].slice(0,3)
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