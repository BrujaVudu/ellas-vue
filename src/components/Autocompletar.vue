<template lang="pug">
    .autocomplete
        img(src="../assets/pin.svg", align="center")
        .input(@click.stop="toggleVisible", v-text="'Tu ubicación: ' + m_seleccionado[0]")
        .modal(v-show="visible")
          .fondo
          .contenido.card.pad.fondo-blanco
            input(
                ref="buscaMunicipio",
                type="text", 
                v-model="query", 
                placeholder="Escribe tu ciudad o municipio...",
                @keydown.up="up",
                @keydown.down="down",
                @keydown.enter="seleccionado",
                @keydown.esc="toggleVisible"
            )
            .options(ref="optionsList")
                ul 
                    li(v-for="(match, i) in matches", 
                    :key="match['Municipio']", 
                    :class="{ 'seleccionado' : (i_seleccionado === i)}",
                    v-text="match[0]", 
                    @click="cliqueado(i)")
                    li(v-if="matches.length > 9")
                        b ...
</template>
<script>
import Municipios from '@/assets/db/municipios.json'
export default {
    data()  {
        return {
            query: '',
            visible: false,
            i_seleccionado: 0,
            m_seleccionado: ["No has seleccionado tu ubicación"],
            filtro: "Municipio"
        }
    },
    mounted() {
        if (localStorage.municipio) {
            this.m_seleccionado = JSON.parse(localStorage.municipio)
        }
        this.municipios = Municipios
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible
            this.$nextTick(function(){
                this.$refs.buscaMunicipio.focus()
                this.$refs.buscaMunicipio.select()
            })
        },
        cliqueado(i) {
            this.i_seleccionado = i
            this.seleccionado()
        },
        seleccionado() {
            if(!this.matches.length) {
                return;
            }

            this.m_seleccionado = this.matches[this.i_seleccionado]
            this.visible = false

            this.$store.commit("cambiaMunicipio", this.m_seleccionado)
        },
        up() {
            if (this.i_seleccionado == 0) {
                this.i_seleccionado = (this.matches.length > 9 ? 9 : this.matches.length - 1)
                return;
            }
            this.i_seleccionado -= 1;
        },
        down() {
            if (this.i_seleccionado >= this.matches.length - 1 || this.i_seleccionado >= 9) {
                this.i_seleccionado = 0;
                return;
            }
            this.i_seleccionado += 1;
        }
    },
    computed: {
        matches() {
            if(this.query == '') {
                return []
            }
            return this.municipios.filter(i => i[1][0].Municipio.toLowerCase().normalize('NFD').includes(this.query.toLowerCase().normalize('NFD'))).slice(0,10)
        }
    }
}
</script>
<style lang="sass" scoped>
@import "@/sass/componentes/_modal"
@import "@/sass/componentes/_autocompletar"
</style>