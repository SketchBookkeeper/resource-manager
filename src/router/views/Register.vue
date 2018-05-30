<template>
  <div class="hero is-fullheight" >
    <div class="hero-head">
      <div class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <router-link class="button" to="/">Log In</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-body">
      <div class="sign-up box">
        <h1 class="title is-4">Register For An Account</h1>
        <SignUp />
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from '@/components/SignUp'
export default {
  name: 'Register',
  components: {
    SignUp
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    background-image: url(../../assets/register.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &-body {
      justify-content: center;
    }
  }

  .sign-up {
    max-width: 600px;
    width: 100%;
  }
</style>
