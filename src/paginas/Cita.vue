<template lang="pug">
  main
    .comillas-bg
      include ../assets/comillas.svg
    .cita.card.pad.pt40.sombra
      router-link(to="/")
        img(alt="Logo Ellas Libres de Violencias", src="@/assets/LogoEllas.svg", width="140")
      q {{ data[$route.params.id].frase }}
      h3 — {{ data[$route.params.id].autor1 }}
    p ELLAS LIBRES DE VIOLENCIAS
    .botones-compartir
      button(type='submit', :onClick="facebook").bot.fb
        img.img(style='vertical-align:middle' src='@/assets/fb.svg' alt='' width='16' height='16')
        span Compartir
      button(type='submit', :onClick="tuiter").bot.tw
        img.img(style='vertical-align:middle' src='@/assets/tw.svg' alt='' width='16' height='16')
        span Tuitear 

</template>
<script>

export default {
    name: "FrasesCelebres",
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
    },
    computed: {
      cita() {
        return "«" + this.data[this.$route.params.id].frase + "» — " + this.data[this.$route.params.id].autor1
      },
      facebook() {
        return "window.open('https://www.facebook.com/sharer/sharer.php?u=" + window.location.href + "&quote=" + this.cita + "', '', 'width=1000')"
      },
      tuiter() {
        return "window.open('https://twitter.com/intent/tweet?hashtags=EllasSinViolencias&text=" + this.cita + "&url=" + window.location.href + "', '', 'width=1000')"
      }
    },
    beforeUpdate() {
      var titulo = document.createElement('meta')
      titulo.setAttribute('property', 'og:title')
      titulo.content = "Cita de " + this.data[this.$route.params.id].autor1 + " | ellaslibresdeviolencias.com"
      document.getElementsByTagName('head')[0].appendChild(titulo)
      
      var ogDescripcion = document.createElement('meta')
      ogDescripcion.setAttribute('property', 'og:description')
      ogDescripcion.content = this.data[this.$route.params.id].frase
      document.getElementsByTagName('head')[0].appendChild(ogDescripcion)
    }
}
</script>
<style lang="sass" scoped>
@import "@/sass/globales/_colores"
.comillas-bg 
  fill: white
  opacity: .3
  position: absolute
  transform: translate(-100px, 60px)
  z-index: 0
.comillas
  height: 60vh 
main 
  // background: lighten($rosa, 20)
  background-image: linear-gradient(to right bottom, #fece39, #fed43d, #ffdb41, #ffe145, #ffe74a) 
  width: 100vw
  min-height: 95vh
  padding-top: 80px
  padding-bottom: 10px
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
.sombra
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)
.card
  background: white
  position: relative
  font-size: 1.5em
  max-width: 600px
  text-align: center
  line-height: 1.5em
  background: url('../assets/comillas-bg.svg') white no-repeat
  background-size: 160px
  background-position: center center

  h3 
    font-size: 1.2em
  q 
    margin-top: 40px
    z-index: 999
  img 
    display: block
    padding-top: 20px
    margin: 0 auto 30px
    position: relative
    left: -13px
  .comillas-in-card
    position: absolute
    top: 50%
    fill: $rosa
    .comillas
      z-index: 1
      height: 120px
P 
  letter-spacing: 3px
  margin: 50px 0 0
  color: #00000069
  z-index: 9
.botones-compartir
  margin-top: 30px  
  z-index: 2
  display: flex
.bot
  border: none
  color: white
  border-radius: 6px
  cursor: pointer
  padding: 5px
  display: flex
  align-items: center
  img 
    margin-right: 5px
.fb
  background: #1877f2
  margin-right: 10px
.tw  
  background: #1b95e0
</style>