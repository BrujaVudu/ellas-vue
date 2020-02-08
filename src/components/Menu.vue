<template lang="pug">
  nav
    Modal(:visible.sync="uno")
      prismic-rich-text(:field="data[0].contenido")
      
    Modal(:visible.sync="dos") 
      prismic-rich-text(:field="data[3].contenido")
    .logo.seccion.fondo-morado
      router-link(to="/")
        img(alt="Logo Ellas Libres de Violencias", src="@/assets/LogoEllas.svg")
    .fondo-lila.seccion
      router-link(to="/") Inicio 
      router-link(to="/preguntas-frecuentes/0") Preguntas frecuentes
      router-link(to="/citas") Para recordar
      router-link(to="/saber-mas") Para saber más
    .fondo-blanco.seccion
      router-link(to="/nosotras") ¿Qué es Ellas?
      a(href="https://docs.google.com/forms/d/1LBfksSga5UTLltcQkwEKfv_BG4LS3joOsnWR6KoCOCo/viewform?edit_requested=true", target="_blank") Cuéntanos tu experiencia
      a(@click="uno = true").pointer En caso de emergencia
      a(@click="dos=true").pointer Líneas de orientación
      a(href="https://ellascentrodeaprendizaje.com/") Ellas: Centro de Aprendizaje
    .fondo-morado.seccion
      ul.distribucion-vertical
        - var w = "30px"
        li(@click="aViolencias('fisica')").pointer 
          img(src="@/assets/iconos-violencias/icono-fisica.svg", width=w)
          span Violencia física o psicológica
        li(@click="aViolencias('sexual')").pointer 
          img(src="@/assets/iconos-violencias/icono-sexual.svg", width=w)
          span Violencia sexual
        li(@click="aViolencias('economica')").pointer 
          img(src="@/assets/iconos-violencias/icono-economica.svg", width=w)
          span Violencia económica
        li(@click="aViolencias('politica')").pointer 
          img(src="@/assets/iconos-violencias/icono-politica.svg", width=w)
          span Violencia política
        li(@click="aViolencias('acoso')").pointer 
          img(src="@/assets/iconos-violencias/icono-acoso.svg", width=w)
          span Acoso
            

</template>
<script>
import Modal from "@/components/Modal.vue"
export default {
  name: 'Menu',
  components: {
    Modal
  },
  data() {
    return {
      dos: false,
      uno: false,
      data: []
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('acciones_inicio')
        .then((response) => {
          this.data = response.data.acciones
      })
    },
    aViolencias(n) {
      if(this.$store.state.municipio.length) {
        this.$router.push({ path: '/violencias/' + n  })
      } else {
        alert("Debes seleccionar tu ubicación para obtener información sobre las rutas de orientación en tu ciudad o municipio")
      }
      
    }
  },
   created() {
        this.getContent();
    }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_menu"
</style>