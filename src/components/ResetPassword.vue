<template>
  <form action="index.html">
    <div class="field has-addons">
      <div class="control email-control has-icons-left">
        <input class="input is-medium email-field" type="email" id="reset-email" v-model="email" placeholder="email">
        <label class="is-invisible" for="reset-email">Email Address</label>
        <span class="icon is-left">
          <i class="material-icons">email</i>
        </span>
      </div>

      <div class="control">
        <button class="button is-medium is-primary" @click.prevent="reset">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'reset-password',
  data: function () {
    return {
      email: ''
    }
  },
  methods: {
    reset: function () {
      const auth = firebase.auth()

      auth.sendPasswordResetEmail(this.email)
        .then(() => {
          this.eventHub.$emit('notification', {
            message: 'Check your email.',
            type: 'is-primary'
          })
        })
        .catch(error => {
          this.eventHub.$emit('notification', {
            message: error.message,
            type: 'is-danger'
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .email-control {
    width: 100%;
  }
</style>
