<template lang="pug">
    section.cita.pt40
      router-link(:to="'/citas/' + indice")
        q {{ data.frase }}
        h3 — {{ data.autor1 }}
      .botones
        button(@click="cambiarCita(indice-1)").texto-izq 
          img(src="@/assets/anterior.svg", height="25")
        button(@click="cambiarCita(indice+1)").texto-izq
          img(src="@/assets/anterior.svg", height="25").invertir
        .der
          Compartir(:indice.sync="indice", style="text-align: right") 

</template>
<script>
import Compartir from "@/components/Compartir.vue";
export default {
  name: "Citas",
  components: {
    Compartir
  },
  data() {
    return {
      data: [],
      indice: null,
      todas: [],
      cuenta: 1
    }
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('citas')
        .then((response) => {
          this.todas = response.data.autor
          const totalCitas = response.data.autor.length
          this.indice = Math.floor(Math.random() * totalCitas)
          this.data = response.data.autor[this.indice]
        })
    },
    cambiarCita(n) {
      var total = this.todas.length
      if (n >= total) {
        n = 0 
      } else if (n < 0) {
        n = total - 1
      }
      this.data = this.todas[n]
      this.indice = n
    }
  },
  created () {
    this.getContent()
  }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_botonesCita"
.invertir 
  transform: rotate(180deg)
</style>