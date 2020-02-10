<template lang="pug">
  .violencias
    .violencias-fondo-botones.pt110
      .contenedor
        subMenuViolencias.card.fondo-blanco.pt40
    main.contenedor.grid-4-6.pt40
      
      aside

        h2.letra-morada-oscura Direcciones útiles
        button.btn(v-for="i in botonComponentes", type="button", v-text="i[0]" @click="seleccionaComponente(i[1])").btn
        .contenido
          component(:is="componenteSeleccionado").card.pad.mt-2em
          component(v-if="dobleComponente" is="DenunciasComisaria").card.pad.mt-2em
        
        .recordatorios
          router-link(to="/citas").sin-under
            h2.letra-morada-oscura.mt-2em Para recordar
          Citas.card.fondo-rosa.mt-2em.pad2
      
      router-view(:municipio="municipio")

</template>
<script>
import subMenuViolencias from '@/components/subMenuViolencias.vue'

import DenunciasFiscalia from '../components/DenunciasFiscalia.vue'
import DenunciasComisaria from '../components/DenunciasComisaria.vue'
import Alternativos from '../components/Alternativos.vue'
import Comisarias from '../components/Comisarias.vue'
import Urgencias from '../components/Urgencias.vue'

import Fisica from '@/components/violencias/Fisica.vue'
import Sexual from '@/components/violencias/Sexual.vue'
import Economica from '@/components/violencias/Economica.vue'
import Politica from '@/components/violencias/Politica.vue'
import Acoso from '@/components/violencias/Acoso.vue'

import Citas from '@/components/Citas.vue'

export default {
    name: "Violencias",
    props: [
      'municipio'
    ],
    components: {
        subMenuViolencias,
        DenunciasFiscalia,
        DenunciasComisaria,
        Alternativos,
        Comisarias,
        Urgencias,
        Fisica,
        Sexual,
        Economica,
        Politica,
        Acoso,
        Citas
    },
    data() {
      return {
        data: [],
        // glosario: [],
        // spans: [],
        violencia: this.$route.query.v,
        botonComponentes: [
          ['Centros de urgencias','Urgencias'],
          ['Comisarías de Familia', 'Comisarias'],
          ['Puntos de recepción de denuncias',['DenunciasFiscalia', 2]]
          // ['Mecanismos alternativos','Alternativos']],
        ],
        componenteSeleccionado: null,
        dobleComponente: false, 
        nombres: ['Violencia física o psicológica', 'Violencia sexual', 'Violencia económica', 'Violencia política', 'Acoso']
      }
    },
    methods: {
      fromSerializer() {
        alert("hola")
      },
      seleccionaComponente(comp) {
        if (this.componenteSeleccionado === comp || this.componenteSeleccionado === comp[0]) {
          this.componenteSeleccionado = null
          this.dobleComponente = false
          return
        }
        if(!Array.isArray(comp)) {
          this.componenteSeleccionado = comp
          this.dobleComponente = false
        } else {
          this.componenteSeleccionado = comp[0]
          this.dobleComponente = true
        }
      }
    },
    mounted() {
      // // Un NodeList con todas las palabras que estén encerradas en la clase "glosario"
      // var spansDom = document.querySelectorAll('.glosario')
      // // Convierte NodeList en arreglo
      // var arregloDeSpans = Array.prototype.slice.call(spansDom)
      // // Agrupa el arreglo en un objeto según su contenido
      // var spansAgrupados = arregloDeSpans.reduce(function(grupos, e) {
      //   const val = e.innerHTML.toLowerCase()
      //   grupos[val] = grupos[val] || []
      //   grupos[val].push(e)
      //   return grupos
      // }, {})
      // this.$prismic.client.getSingle('palabras_clave')
      //   .then((response) => {
      //     this.glosario = response.data['palabra-definicion']
          // claves.forEach(g => {
          //   spansAgrupados[g.palabra.toLowerCase()].forEach(s => {
          //     alert(s.innerHTML)
          //   })
          // })
        // })
    }
}
</script>
<style lang="sass">
@import @/sass/componentes/_violencias
@import @/sass/celular/_violencias
</style>