<template lang="pug">
    section
        h3.letra-morada-oscura Red de urgencias más cercana
        span(v-if="filtrada.length == 0") {{ !this.$store.state.municipio.length ? "Debes indicar tu ubicación para obtener información precisa" : "No tenemos información disponible para " + this.$store.state.municipio[0] }}
        ul.alto-limitado-600(v-if="filtrada.length > 0")
          li(v-for="e in filtrada[0][1]") 
            b {{ e.Institucion }}
            span Servicio: {{ e.Servicio }} 
            span {{ e.Direccion }} 
            span Teléfono: {{ e.Telefono }}

          li(v-if="filtrada.length == 0")
            

                
            
</template>
<script>
// El CSV lo cenvertí a JSON, lo pasé por un algoritmo mío que 
// agrupaba por ciudad y luego por otro que cada grupo lo volvía 
// elemento de un arreglo. Eso este este "urgencias"
import Urgencias from '@/assets/db/urgencias.json'
import Modal from '@/components/Modal'

export default {
  name: 'Urgencias',
  components: {Modal},
  data() {
    return {
      urgenciasOcultas: false
    }
  },
  computed: {
    filtrada() {
      return Urgencias.filter(c => c[0].includes(this.$store.state.municipio[0]))
    }    
  }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_tarjetasAside"
</style>