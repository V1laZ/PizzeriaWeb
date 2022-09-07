import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
createApp(App).use(router)
    .component('fa', FontAwesomeIcon)
    .component('fa-layers', FontAwesomeLayers)
    .component('fa-layers-text', FontAwesomeLayersText)
    .mount('#app')
