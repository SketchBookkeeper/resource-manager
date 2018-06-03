<template>
  <div>
    <Navbar :user-data="user" :collections="collections" :active-collection="activeCollection.id"/>
    <div class="section">
      <Collection :user-data="user" :collection="activeCollection"/>
    </div>
    <EditResource :user-id="user.uid" />
    <DeleteResource :user-id="user.uid" />
  </div>
</template>

<script>
import db from './../../firebaseinit'
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
  data () {
    return {
      collections: [],
      activeCollection: {
        id: 0
      }
    }
  },
  computed: {
    user: function () {
      return firebase.auth().currentUser
    }
  },
  created () {
    this.collections = db
      .collection('collections')
      .where('uid', '==', this.user.uid)
      .onSnapshot(collections => {
        this.collections = []

        collections
          .forEach(collection => {
            let collectionItem
            collectionItem = collection.data()
            collectionItem['id'] = collection.id
            this.collections.push(collectionItem)
          })

        this.activeCollection = this.collections[0]
      })

    this.eventHub.$on('collectionChange', event => {
      this.activeCollection = this.collections.find(item => {
        return item.id === event.collectionId
      })
    })
  }
}
</script>
