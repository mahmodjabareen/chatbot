import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

Vue.use(VueCompositionAPI)
library.add(fas, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = createApp({
  router,
  render: () => h(App)
})

app.mount('#app')
