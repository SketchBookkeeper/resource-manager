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
        <div class="columns">
          <div class="column has-text-grey-light">
            <a href="#" @click.prevent="openModal">Forgot Password</a>
          </div>
        </div>
        <SignInAlt />
      </div>
    </div>

    <Modal title="Reset Password" v-show="isResetPasswordModalOpen" @close="closeModal">
      <ResetPassword />
    </Modal>
  </div>
</template>

<script>
import Login from '@/components/Login'
import SignInAlt from '@/components/AltSignIn'
import ResetPassword from '@/components/ResetPassword'
import Modal from '@/components/Modal'
export default {
  name: 'home',
  components: {
    Login,
    SignInAlt,
    ResetPassword,
    Modal
  },
  data () {
    return {
      isResetPasswordModalOpen: false
    }
  },
  methods: {
    openModal () {
      this.isResetPasswordModalOpen = true
    },
    closeModal () {
      this.isResetPasswordModalOpen = false
    }
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
