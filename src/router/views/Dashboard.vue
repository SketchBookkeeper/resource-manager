<template>
  <div>
    <Navbar :user-data="user"/>
    <div class="section">
      <Collection />
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Navbar from '@/components/Navbar'
import Collection from '@/components/Collection'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Collection
  },
  computed: {
    user: function () {
      return firebase.auth().currentUser
    }
  }
}
</script>
