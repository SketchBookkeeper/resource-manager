<template>
  <div class="section navbar">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input class="input" type="text" placeholder="Search Collection">
            </p>
            <p class="control">
              <button class="button">Search</button>
            </p>
          </div>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <button class="button is-light" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  methods: {
    logout: function () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    width: 100%;

    .level {
      width: 100%;
    }
  }
</style>
