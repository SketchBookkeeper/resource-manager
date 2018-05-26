import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from '@/router/views/Home'
import Dashboard from '@/router/views/Dashboard'
import Register from '@/router/views/Register'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// Router Guard
router.beforeEach((to, from, next) => {
  if (
    to.meta.hasOwnProperty('requiresAuth') &&
    to.meta.requiresAuth === true
  ) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/register'
      })
    } else {
      next()
    }
  } else if (
    to.meta.hasOwnProperty('requiresGuest') &&
    to.meta.requiresGuest === true
  ) {
    if (firebase.auth().currentUser) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
