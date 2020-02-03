<template lang="pug">
  #app
    transition(name="slide")
      Menu(v-if="menu") 
    header.fondo-gris-claro.letra-morada-oscura
      router-link(to="/", v-if="$route.path !== '/'")
        img(alt="Logo Ellas Libres de Violencias", src="@/assets/LogoEllas.svg", height="60")
      input(type="checkbox", id="burger", v-model="menu")
      label(for="burger")
        span.bar.top
        span.bar.middle
        span.bar.bottom
      Autocompletar
    transition(name="fade")
      router-view(:municipio="municipio")
    Pie
</template>

<script>
import Autocompletar from './components/Autocompletar.vue'
import Cabecera from './components/Cabecera.vue'
import Menu from './components/Menu.vue'
import Inicio from './paginas/Inicio.vue'
import Pie from '@/components/Pie.vue' 

export default {
  name: 'app',
  data() {
    return {
      menu: false
    }
  },
  mounted() {
    if (localStorage.municipio) {
      this.$store.commit("cambiaMunicipio", JSON.parse(localStorage.municipio)) 
    }
  },
  watch: {
    municipio(nuevo) {
      localStorage.municipio = JSON.stringify(nuevo)
    },
    '$route' () {
      window.scrollTo(0, 0)
      this.menu = false
    }
  },
  components: {
    Autocompletar,
    Cabecera,
    Menu,
    Inicio,
    Pie
  },
  computed: {
    municipio() {
      return this.$store.state.municipio
    }
  }
}
</script>

<style lang="sass">
@import "./sass/_global"
@import "./sass/_celular"
header
  a 
    background: $morado-ellas  
    height: 70px
    width: 70px
    box-sizing: border-box
    display: flex
    align-items: center
    justify-content: center
</style>
