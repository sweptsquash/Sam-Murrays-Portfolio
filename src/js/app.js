import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faDiscord,
    faFacebookF,
    faGithub,
    faInstagram,
    faTwitch,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
    faComments,
    faDownload,
    faEye,
    faInfo,
    faPlus,
    faShoppingBag,
    faStar,
    faVideo,
} from '@fortawesome/free-solid-svg-icons'
require('@/bootstrap')
import '../sass/app.scss'
import Index from '@/index'

library.add(
    faComments,
    faDiscord,
    faDownload,
    faEye,
    faFacebookF,
    faGithub,
    faInfo,
    faInstagram,
    faPlus,
    faShoppingBag,
    faStar,
    faTwitch,
    faTwitter,
    faVideo,
    faYoutube,
)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const el = document.getElementById('app')

new Vue({
    render: (h) => h(Index),
}).$mount(el)
