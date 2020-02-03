<template lang="pug">
  .contenedor.pt110
    section.presentacion.letra-morada-oscura
      img(alt="Logo Ellas Libres de Violencias", src="@/assets/LogoEllas.svg")
      prismic-rich-text(:field="data.presentacion")
      //- button(@click="this.$store.inputMunicipio = true").btn Cambiar ubicación

    main.grid-4-6
      aside.tarjetas-en-columna
        .card.urgencias
          .cabeza
            h2 {{ municipio[0] }}
          .cuerpo
            Urgencias

        SaberMas.card.pad.fondo-gris-claro

        Citas.card.fondo-rosa.pad

      .derecha.tarjetas-en-columna
        section.violencias.card.fondo-gris-claro
          h2.pad ¿Qué hacer en caso de violencia?
          subMEnuViolencias

        section.emergencia.card
          h2 {{ data.emergencia[0].titulo[0].text }}
            img(src="@/assets/ambulancia.png", width="140", align="middle")
          .contenido.pad
            prismic-rich-text(:field="data.emergencia[0].descripcion")
            button(@click="policia = true").btn ¿Qué servicios debe prestarme la policía?
            Modal(:visible.sync="policia")
              prismic-rich-text(:field="contenidoPolicia.contenido")
            
        
        section.preguntas.card.pad.fondo-gris-claro
          router-link(to="/preguntas-frecuentes/0")
            h2 Preguntas frecuentes
          Preguntas
</template>
 
<script>
import Urgencias from '@/components/Urgencias.vue'
import Preguntas from '@/components/PreguntasFrecuentes.vue'
import subMEnuViolencias from '@/components/subMenuViolencias.vue'
import Citas from '@/components/Citas.vue' 
import SaberMas from '@/components/SaberMas.vue' 
import Modal from "@/components/Modal" 

export default {
  name: 'Inicio',
  props: [
    'urgencias'
  ],
  components: {
      Urgencias,
      Preguntas,
      subMEnuViolencias,
      Citas,
      SaberMas,
      Modal
  },
  data () {
    return {
        preguntas: null,
        data: [],
        contenidoPolicia: [],
        policia: false
    };
  },
  methods: {
    getContent () {
      this.$prismic.client.query(
        this.$prismic.Predicates.any('document.type', ['inicio', 'acciones_inicio'])        
      ).then((response) => {
          var inicio = response.results.filter(doc => doc.type == 'inicio')
          var poli = response.results.filter(doc => doc.type == 'acciones_inicio')
          this.data = inicio[0].data
          this.contenidoPolicia = poli[0].data.acciones[1]
      })
    },
    aViolencias(n) {
      if(this.$store.state.municipio.length) {
        this.$router.push({ path: 'violencias', query: {v: n}})
      } else {
        alert("Debes seleccionar tu ubicación para obtener información sobre las rutas de orientación en tu ciudad o municipio")
      }
    },
    handleScroll () {
      
       this.suma = this.$refs.logo.getBoundingClientRect().top     
    }
  },
  computed: {
    municipio() {
      
      return this.$store.state.municipio
    }
  },
  created () {
    this.getContent();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style lang="sass" scoped>
@import "@/sass/globales/_colores"
.presentacion
  display: grid
  grid-template-columns: 1fr 2fr 1fr
  grid-gap: 1em
  margin-bottom: 40px
  img 
    max-width: 200px
    position: relative
    top: -80px
    padding-left: 30px
    z-index: 998
.urgencias
  padding: 0
  position: relative
  overflow: hidden
  .cabeza
    display: flex
    align-items: flex-end
    width: 100%
    height: 200px
    color: white
    background: url("../assets/urgencias.png")
    background-size: cover
    background-repeat: no-repeat
    background-position: center bottom
    padding: 14px 40px 18px 36px
    h2 
      margin: 0
  .cuerpo
    padding: 14px 40px 18px 36px
.violencias
  h2 
    background: $morado-ellas
    color: $amarillo
    border-radius: 4px 4px 0 0 
    text-align: center
    margin-top: 0
    padding-top: 26px
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05)
.emergencia
  h2 
    color: $morado-oscuro
    background: $amarillo    
    border-radius: 4px 4px 0 0 
    text-align: center
    margin-top: 0
    padding: 20px 10px 20px
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05)
    img 
      transform: translate(10px, -8px)
  button
    text-align: center
    margin: 30px auto 0
.preguntas
  a
    text-decoration: none
  h2 
    color: $morado-oscuro
    text-align: center
    padding-bottom: 20px
    margin-bottom: 0px
    border-bottom: solid 1px lightgrey
</style>