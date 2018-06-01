import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from '@/router/views/Home'
import Dashboard from '@/router/views/Dashboard'
import Register from '@/router/views/Register'

Vue.use(Router)

function checkForUser () {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      resolve(user)
      reject(new Error('user error'))
    })
  })
}

// Views
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
  checkForUser() // wait for user to be determined
    .then(user => {
      if ( // Only allow logged in users
        to.meta.hasOwnProperty('requiresAuth') &&
        to.meta.requiresAuth === true
      ) {
        if (!user) { // Not a user, redirect to home page, otherwise continue
          next({
            path: '/'
          })
        } else {
          next()
        }
      } else if ( // Only allow non logged in users
        to.meta.hasOwnProperty('requiresGuest') &&
        to.meta.requiresGuest === true
      ) {
        if (user) { // Logged in user, redirect to dashboard
          next({
            path: '/dashboard'
          })
        } else {
          next()
        }
      } else { // Hander for views assessable to all
        next()
      }
    })
    .catch(error => {
      console.log(error)
      next({
        path: '/'
      })
    })
})

export default router
