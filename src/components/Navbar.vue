<template>
  <div class="section navbar">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="field">
            <p class="control">
              <input class="input" type="text" placeholder="Search">
            </p>
          </div>
        </div>
        <div class="level-item">
          <CollectionSelect :collections="collections" />
        </div>
        <div class="level-item">
          <AddButton :user-id="userData.uid" :active-collection="activeCollection" />
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          {{ userData.email }}
        </div>
        <div class="level-item">
          <button class="button is-light" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import AddButton from '@/components/AddButton'
import CollectionSelect from '@/components/CollectionSelect'
export default {
  name: 'navbar',
  components: {
    AddButton,
    CollectionSelect
  },
  props: [
    'userData',
    'collections',
    'activeCollection'
  ],
  data: function () {
    return {

    }
  },
  computed: {

  },
  methods: {
    logout: function () {
      firebase.auth().signOut()
        .then(() => {
          this.eventHub.$emit('notification', {
            message: 'Logged Out',
            type: ''
          })

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
