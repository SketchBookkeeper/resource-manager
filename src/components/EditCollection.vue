<template>
  <div>
    <button @click="showModal">
      <span class="icon">
        <i class="is-size-6 material-icons">edit</i>
      </span>
    </button>

    <Modal title="Edit Collection" v-show="isModalVisible" @close="closeModal">
      <form action="/index.html" novalidate>
        <div class="field has-addons">
          <div class="control has-icons-left name-field">
            <input class="input" type="text" name="name" v-model="name" autocomplete="off" />
            <span class="icon is-small is-left">
              <i class="material-icons">folder_open</i>
            </span>
          </div>

          <div class="control">
            <input type="submit" value="Update Name" class="button is-primary" @click.prevent="editCollection" :disabled="isLoading ? true : false" />
          </div>
        </div>

        <div class="field has-addons">
          <div class="control delete-field">
            <input class="input is-danger" type="text" v-model="confirmDelete" placeholder="Type collection name to confirm delete">
          </div>

          <div class="control">
            <input type="submit" value="Delete Collection" class="button is-danger" @click.prevent="deleteCollection">
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import db from './../firebaseinit'
import Modal from '@/components/Modal'
export default {
  name: 'edit-collection',
  components: {
    Modal
  },
  props: [
    'collectionId',
    'collectionName',
    'collectionsLength'
  ],
  data () {
    return {
      isModalVisible: false,
      isLoading: false,
      confirmDelete: ''
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    editCollection () {
      if (this.name === '') {
        this.eventHub.$emit('notification', {
          message: 'Collection name cannot be blank',
          type: 'is-danger'
        })

        return
      }

      this.isLoading = true

      const collection = db.collection('collections').doc(this.collectionId)

      collection.update({name: this.name})
        .then(docRef => {
          this.eventHub.$emit('notification', {
            message: `Collection ${this.name} updated.`,
            type: 'is-primary'
          })

          this.isLoading = false
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    },
    deleteCollection () {
      if (this.collectionsLength === 1) {
        this.eventHub.$emit('notification', {
          message: 'You need at least one collection.',
          type: 'is-warning'
        })

        return
      }

      if (this.name !== this.confirmDelete) {
        this.eventHub.$emit('notification', {
          message: 'Name does not match',
          type: 'is-danger'
        })

        return
      }

      db.collection('collections').doc(this.collectionId).delete()

      db.collection('resources')
        .where('collection', '==', this.collectionId)
        .get()
        .then(resources => {
          resources.forEach(resource => {
            db.collection('resources').doc(resource.id).delete()
          })

          this.closeModal()

          this.eventHub.$emit('notification', {
            message: `${this.name} was deleted.`,
            type: 'is-warning'
          })
        })
    }
  },
  created () {
    this.name = this.collectionName
  }
}
</script>

<style lang="scss" scoped>
  .delete-field,
  .name-field {
    width: 100%;
  }
</style>
