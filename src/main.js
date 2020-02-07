import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import { store } from "./store/store"

// Enrutador
import VueRouter from 'vue-router'
import Inicio from './paginas/Inicio.vue'
import Citas from './paginas/Citas.vue'
import Cita from './paginas/Cita.vue'
import PalabrasClave from './paginas/PalabrasClave.vue'
import Nosotras from './paginas/Nosotras.vue'
import Violencias from './paginas/Violencias.vue'
import Preguntas from './paginas/PreguntasFrecuentes.vue'
import SaberMas from './paginas/SaberMas.vue'
import PostSaberMas from './paginas/PostSaberMas.vue'

// Enrutador de Violencias
import Fisica from './components/violencias/Fisica.vue'
import Sexual from './components/violencias/Sexual.vue'
import Economica from './components/violencias/Economica.vue'
import Politica from './components/violencias/Politica.vue'
import Acoso from './components/violencias/Acoso.vue'

// Enrutador física
import Familia from './components/fisica/Familia.vue'
import Cotidiana from './components/fisica/Cotidiana.vue'

// Enrutador acoso
import Educativos from './components/acoso/Educativos.vue'
import Laborales from './components/acoso/Laborales.vue'
import Publicos from './components/acoso/Publicos.vue'
import Virtuales from './components/acoso/Virtuales.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Inicio},
  { path: '/citas', component: Citas},
  { path: '/citas/:id', component: Cita},
  { path: '/nosotras', component: Nosotras},
  { path: '/preguntas-frecuentes/', redirect: '/preguntas-frecuentes/0'},
  { path: '/preguntas-frecuentes/:id', component: Preguntas},
  { 
    path: '/violencias',
    name: 'violencias',
    component: Violencias,
    children: [
      { path: 'fisica' , component: Fisica },
      { path: 'fisica/familia' , component: Familia },
      { path: 'fisica/cotidiana' , component: Cotidiana },
      { path: 'sexual' , component: Sexual },
      { path: 'economica' , component: Economica },
      { path: 'politica' , component: Politica },
      { path: 'acoso' , component: Acoso },
      { path: 'acoso/educativos', component: Educativos },
      { path: 'acoso/laborales', component: Laborales },
      { path: 'acoso/publicos', component: Publicos },
      { path: 'acoso/virtuales', component: Virtuales }
      ]
  },
  { path: '/palabras-clave', component: PalabrasClave},
  { path: '/saber-mas', component: SaberMas},
  { path: '/saber-mas/:uid', component: PostSaberMas}

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// El paquete para hacer http requests.
import axios from 'axios'
Vue.prototype.$http = axios

// Requerimientos de Prismic
import PrismicVue from 'prismic-vue';
import linkResolver from './scripts/link-resolver';
import htmlSerializer from './scripts/html-serializer';

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
});

Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
