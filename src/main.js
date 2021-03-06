// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Modal from './components/Modal'
import Collection from './components/Collection'
import Tile from './components/Tile'
import FlashMessage from './components/FlashMessage'
import EditResource from './components/EditResource'
import './design/settings.scss'

Vue.config.productionTip = false

const eventHub = new Vue()

Vue.mixin({
  data: function () {
    return {
      eventHub: eventHub
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    Modal,
    Collection,
    Tile,
    FlashMessage,
    EditResource
  },
  template: '<App/>'
})
