<template lang="pug">
    main
        h1 Recordatorios
        .citas.auto-grid-min300.contenedor.pt40
          template(v-for="(e, i) in data")
            router-link(:to="'/citas/' + i").cita.card.pad.fondo-rosa.letra-blanca.pt40 
              q {{ e.frase }}
              h3 — {{ e.autor1 }}
</template>
<script>

export default {
    name: "Frases célebres",
    data() {
        return {
            data: []
        }
    },
    methods: {
        getContent () {
            this.$prismic.client.getSingle('citas')
                .then((response) => {
                    this.data = response.data.autor
                })
        }
    },
    created () {
        this.getContent();
    }
}
</script>
<style lang="sass" scoped>
@import @/sass/globales/_colores
h1 
  background: linear-gradient(to right bottom, #fece39, #fed43d, #ffdb41, #ffe145, #ffe74a) 
  padding: 110px 10px 60px
  color: $morado-oscuro
  text-align: center
a 
  text-decoration: none
  color: white
</style>
