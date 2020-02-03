<template lang="pug">
  main.preguntas-pagina.fondo-gris-claro
      
    section.pregunta-destacada
      .card.pad 
        h1 {{ data[preguntaDestacada].pregunta[0].text }}
        prismic-rich-text(:field=" data[preguntaDestacada].respuesta_completa ")

    section.auto-grid-min300.contenedor.pt60
      .pregunta(
        v-for="p in data", 
        v-if="(p.numero_de_pregunta - 1) != preguntaDestacada ", 
        :key="p.id" 
        ).card.pad
        
        h2 {{ p.pregunta[0].text }}
        p {{ p.respuesta_corta }}
        router-link(:to="'/preguntas-frecuentes/' + (p.numero_de_pregunta - 1)") Más información...



</template>
<script>
export default {
    name: 'PreguntasFrecuentes',
    data() {
        return {
            data: [],
            preguntaDestacada: undefined
        }
    },
    methods: {
      getContent () {
        this.$prismic.client.getSingle('preguntas_frecuentes')
          .then((response) => {
            this.data = response.data.pregunta_y_respuesta
            this.evaluaSiHayIdEnRouter();
        })
        this.preguntaDestacada = this.$route.params.id
      }
    },
    watch: {
        '$route.params.id' () {     
            this.preguntaDestacada = this.$route.params.id
        },
        '$route' (){
            window.scrollTo(0, 0)
        } 
    },
    created() {
        this.getContent();
    }

}
</script>
<style lang="sass" scoped>
  @import "@/sass/globales/_colores"
  .pregunta-destacada
    background: linear-gradient(to right bottom, #fece39, #fed43d, #ffdb41, #ffe145, #ffe74a) 
    padding: 120px 10px 60px
    .card
      margin: 0 auto
      max-width: 750px
      background: white
  .pregunta
    background: white
  h1
    line-height: 1.5em
  h2 
    font-size: 1.15em
  h1, h2 
    color: $morado-oscuro    
</style>