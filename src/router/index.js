import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/router/views/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
