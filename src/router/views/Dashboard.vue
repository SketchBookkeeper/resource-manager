<template>
  <div>
    <Navbar :user-data="user"/>
    <div class="section">
      <Collection :user-data="user"/>
    </div>
    <EditResource :user-id="user.uid" />
    <DeleteResource :user-id="user.uid" />
  </div>
</template>

<script>
import firebase from 'firebase'
import Navbar from '@/components/Navbar'
import Collection from '@/components/Collection'
import EditResource from '@/components/EditResource'
import DeleteResource from '@/components/DeleteResource'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Collection,
    EditResource,
    DeleteResource
  },
  computed: {
    user: function () {
      return firebase.auth().currentUser
    }
  }
}
</script>
