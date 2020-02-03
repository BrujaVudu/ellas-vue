<template lang="pug">
  section.saber-mas
    router-link(to="/saber-mas")
      h2.letra-morada-oscura Para saber más
    .contenido(@click="enlacePost()").pointer
        .derecha
          .imagen(:style="bg")
          h3 {{ contenido.data.titulo[0].text }}
            .fecha {{ contenido.data.fecha }}
    router-link(to="/saber-mas").btn.mas Más publicaciones
</template>
<script>
export default {
  name: 'saberMasComponente',
  data() {
    return {
      contenido: [],
      uid: undefined,
      bg: ""
    }
  },
  methods: {
    getContent() {
      this.$prismic.client.query(
          this.$prismic.Predicates.at("document.type", "para_saber_mas")
      ).then(response => {
          this.contenido = response.results[0]
          this.uid = this.contenido.uid
          this.bg = "background:url(" + this.contenido.data.foto.url + ") center;background-size:cover"
      });
    },
    enlacePost() {
      this.$router.push({ path: '/saber-mas/' + this.uid  })
    }
  },
  
  created() {
    this.getContent();
  }
}
</script>
<style lang="sass" scoped>
  @import @/sass/globales/_colores
  a
    text-decoration: none
  h2 
    text-align: center
    padding-bottom: 20px
    margin-bottom: 40px
    border-bottom: solid 1px lightgrey
  .derecha
    display: grid
    grid-template-columns: 3fr 7fr
  
  h3
    font-size: .9em
    margin: 0
    padding: 0
    line-height: 1.2em
  .imagen
    border-radius: 50px
    height: 90px
    width: 90px 
  .fecha 
    margin-top: 10px
    font-style: italic
    color: grey
  .btn 
    background: $morado-ellas
    width: max-content
  .mas
    margin: 20px auto 0
</style>