import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/router/views/Dashboard'
import Register from '@/router/views/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
