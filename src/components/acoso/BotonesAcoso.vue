<template lang="pug">
  .card.pad.botonera.fondo-gris-claro
    h2.h2-botonera Espacios donde ocurre el acoso sexual
    .grid.cuatro-columnas
      router-link(to="/violencias/acoso/educativos")
        .boton.vertical
          img(alt="Ícono acoso sexual en espacios educativos", src="@/assets/iconos-acoso/icono-educativos.svg", width="80")
          p Educativos
      router-link(to="/violencias/acoso/laborales")
        .boton.vertical
          img(alt="Ícono acoso sexual en espacios laborales", src="@/assets/iconos-acoso/icono-laborales.svg", width="80")
          p Laborales
      router-link(to="/violencias/acoso/publicos")
        .boton.vertical
          img(alt="Ícono acoso sexual en espacios públicos", src="@/assets/iconos-acoso/icono-publicos.svg", width="80")
          p Públicos
      router-link(to="/violencias/acoso/virtuales")
        .boton.vertical
          img(alt="Ícono acoso sexual en espacios virtuales", src="@/assets/iconos-acoso/icono-virtuales.svg", width="80")
          p Virtuales
</template>
<style lang="sass" scoped>
@import "@/sass/componentes/_botonesIntraViolencias"
</style>