<template>
  <div class="hero is-fullheight is-primary is-bold">
    <div class="hero-head">
      <div class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <router-link class="button" to="/register">Register</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-body">
      <div class="sign-up box">
        <h1 class="title is-4 has-text-primary">Login</h1>
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    &-body {
      justify-content: center;
    }
  }

  .sign-up {
    max-width: 600px;
    width: 100%;
  }
</style>
