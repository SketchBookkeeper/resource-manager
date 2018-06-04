<template>
  <div>
    <Navbar :user-data="user" :collections="collections" :active-collection="activeCollection.id"/>
    <div class="section">
      <h1 class="title is-2" :style="{ color: activeCollection.color }">{{ activeCollection.name }}</h1>
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
        id: null,
        name: '',
        color: '#333333'
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

        // Set first collection as active if user has at least one collection
        if (this.collections.length > 0) {
          this.activeCollection = this.collections[0]
        }
      })

    this.eventHub.$on('collectionChange', event => {
      this.activeCollection = this.collections.find(item => {
        return item.id === event.collectionId
      })
    })
  }
}
</script>
