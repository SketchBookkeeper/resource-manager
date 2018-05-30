<template>
   <Modal title="Delete" v-show="isAddModalVisible" @close="closeModal">
      <div class="content">
        <p>Delete <span class="tag is-light">{{ title }}</span> ?</p>
        <p class="is-size-7">This cannot be undone.</p>
      </div>
      <div class="control">
        <button class="button is-danger" @click="deleteResource" >Delete</button>
        <button class="button" @click="closeModal">Cancel</button>
      </div>
    </Modal>
</template>

<script>
import db from './../firebaseinit'
import Modal from './Modal'
export default {
  components: {
    Modal
  },
  props: [ 'userId' ],
  data () {
    return {
      isAddModalVisible: false,
      title: '',
      docId: ''
    }
  },
  methods: {
    showModal () {
      this.isAddModalVisible = true
    },
    closeModal () {
      this.isAddModalVisible = false
      this.clearData()
    },
    deleteResource () {
      const documentRef = db.collection('resources').doc(this.docId)

      documentRef.delete()
        .then(() => {
          this.eventHub.$emit('notification', {
            message: `Deleted ${this.title}.`,
            type: 'is-primary'
          })

          this.closeModal()
          this.clearData()
        })
        .catch(() => {
          this.eventHub.$emit('notification', {
            message: 'Opps, something broke...',
            type: 'is-danger'
          })
        })
    },
    clearData () {
      this.docId = ''
      this.title = ''
    }
  },
  created: function () {
    this.eventHub.$on('deleteResource', event => {
      this.docId = event.docId
      this.title = event.title

      this.showModal()
    })
  }
}
</script>
