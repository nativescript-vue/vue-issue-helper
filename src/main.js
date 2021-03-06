import 'babel-polyfill'
import Vue from 'vue'
import i18n from './i18n/plugin'
import VueResource from 'vue-resource'
import VueUi from '@vue/ui'
import '@vue/ui/dist/vue-ui.css'

import App from './components/App.vue'

Vue.use(i18n)
Vue.use(VueResource)
Vue.use(VueUi)

window.addEventListener('dragover', e => {
  e.preventDefault()
})

window.addEventListener('drop', e => {
  e.preventDefault()
  alert(app.i18n('drop-warn'))
})

const app = new Vue({
  el: '#app',
  ...App
})
