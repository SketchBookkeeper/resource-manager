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
            <input type="submit" value="Update" class="button is-primary" @click.prevent="editCollection" :disabled="isLoading ? true : false" />
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
    'collectionName'
  ],
  data () {
    return {
      isModalVisible: false,
      isLoading: false
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
    }
  },
  created () {
    this.name = this.collectionName
  }
}
</script>

<style lang="scss" scoped>
  .name-field {
    width: 100%;
  }
</style>
