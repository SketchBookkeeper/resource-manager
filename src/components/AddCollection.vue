<template>
  <div>
    <button @click="showModal" class="is-size-6" title="Add Collection">Add</button>

    <Modal title="New Collection" v-show="isModalVisible" @close="closeModal">
      <form action="/index.html" novalidate>
        <div class="field has-addons">
          <div class="control has-icons-left name-field">
            <input class="input" type="text" name="name" v-model="name" autocomplete="off" placeholder="New Collection Name"/>
            <span class="icon is-small is-left">
              <i class="material-icons">folder_open</i>
            </span>
          </div>

          <div class="control">
            <input type="submit" value="Add" class="button is-primary" @click.prevent="addCollection" :disabled="isLoading ? true : false" />
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import db from './../firebaseinit'
import Modal from './Modal'
import randomColor from 'randomcolor'
export default {
  components: {
    Modal
  },
  props: [
    'userId'
  ],
  data () {
    return {
      isModalVisible: false,
      isLoading: false,
      name: ''
    }
  },
  methods: {
    showModal () {
      this.clearInput()
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    clearInput () {
      this.name = ''
    },
    addCollection () {
      if (this.name === '') {
        this.eventHub.$emit('notification', {
          message: 'Collection name cannot be blank',
          type: 'is-danger'
        })

        return
      }

      this.isLoading = true

      db.collection('collections').add({
        name: this.name,
        uid: this.userId,
        color: randomColor({luminosity: 'light'})
      })
        .then(docRef => {
          this.eventHub.$emit('notification', {
            message: `Collection ${this.name} added.`,
            type: 'is-primary'
          })

          this.isLoading = false
          this.clearInput()
          this.closeModal()
        })
        .catch(error => {
          this.isLoading = false
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .name-field {
    width: 100%;
  }
</style>
