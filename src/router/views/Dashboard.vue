<template>
  <div>
    <Navbar :user-data="user"/>
    <div class="section">
      <Collection :user-data="user"/>
    </div>
    <EditResource :user-id="user.uid"></EditResource>
  </div>
</template>

<script>
import firebase from 'firebase'
import Navbar from '@/components/Navbar'
import Collection from '@/components/Collection'
import EditResource from '@/components/EditResource'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Collection,
    EditResource
  },
  computed: {
    user: function () {
      return firebase.auth().currentUser
    }
  }
}
</script>
