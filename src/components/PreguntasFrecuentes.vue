<template lang="pug">
  .preguntas-int
    .pregunta(v-for="p in data")
      .texto
        h3 {{ p.pregunta[0].text }}
        p {{ p.respuesta_corta }}
      router-link(:to="'/preguntas-frecuentes/' + (p.numero_de_pregunta - 1)") 
        button.btn Ver más
    router-link(to="/preguntas-frecuentes").btn.mas Más preguntas frecuentes
</template>
<script>
export default {
  name: "CompPreguntasFrecuentes",
  data() {
    return {
      data: null
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("preguntas_frecuentes").then(response => {
        var cantidadElementos = response.data.pregunta_y_respuesta.length;
        var seleccionados = [];
        var i = 0;
        while (i < 3) {
          var resultado = Math.floor(Math.random() * cantidadElementos);
          if (
            seleccionados.includes(
              response.data.pregunta_y_respuesta[resultado]
            )
          ) {
            continue;
          }
          seleccionados.push(response.data.pregunta_y_respuesta[resultado]);
          i++;
        }

        this.data = seleccionados;
      });
    }
  },
  created() {
    this.getContent();
  }
};
</script>
<style lang="sass" scoped>
@import @/sass/globales/_colores
a
  text-decoration: none
.pregunta
  display: grid
  grid-template-columns: 3.2fr 0.8fr
  grid-gap: 1.5em
  align-items: center
  border-bottom: solid 1px lightgrey
  padding: 20px 0
  &:last-child
    border-bottom: none    
  h3 
    font-size: 1em
    line-height: 1.25em
    color: $morado-ellas
    font-weight: normal
    margin: 0
  p 
    margin: 0.4em 0 0 0   
    color: #343434b8
.btn 
  background: $morado-ellas
  width: max-content
.mas
  margin: 20px auto 0
</style>