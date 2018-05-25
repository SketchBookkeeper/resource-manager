<template>
  <form action="index.html">
    <div class="field">
      <div class="control has-icons-left">
        <input class="input is-medium" type="email" id="email" v-model="email" placeholder="email">
        <label class="is-invisible" for="email">Email Address</label>
        <span class="icon is-left">
          <i class="material-icons">email</i>
        </span>
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-left">
        <input class="input is-medium" type="password" id="password" v-model="password" placeholder="password">
        <label class="is-invisible" for="password">Password</label>
        <span class="icon is-left">
          <i class="material-icons">vpn_key</i>
        </span>
      </div>
    </div>
    <button class="button is-primary is-large" @click="register">Sign Up</button>
  </form>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function (e) {
      e.preventDefault()

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.push('/dashboard')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
