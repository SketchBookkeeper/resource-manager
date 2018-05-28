<template>
   <Modal title="Edit" v-show="isAddModalVisible" @close="closeModal">
      <form action="/index.html" novalidate>
        <div>
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input class="input" type="text" name="title" v-model="title" placeholder="Helpful link for..." required autocomplete="off" />
              <span class="icon is-small is-left">
                <i class="material-icons">title</i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Notes</label>
            <div class="control">
              <textarea class="textarea" name="note" v-model="note" placeholder="Add notes here"></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">URL</label>
            <div class="control has-icons-left">
              <input class="input" type="text" name="url" v-model="url" placeholder="https://..." autocomplete="off" />
              <span class="icon is-small is-left">
                <i class="material-icons">insert_link</i>
              </span>
            </div>
          </div>

          <div class="control">
            <button class="button is-primary" :class="{'is-loading': isLoading}" @click.prevent="updateResource" >Save</button>
            <button class="button" @click.prevent="closeModal">Cancel</button>
          </div>
        </div>
      </form>
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
      isLoading: false,
      title: '',
      note: '',
      url: '',
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
    updateResource () {
      this.isLoading = true
      const documentRef = db.collection('resources').doc(this.docId)

      const updatedDoc = {
        title: this.title,
        note: this.note,
        url: this.url
      }

      documentRef.update(updatedDoc)
        .then(() => {
          this.isLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    clearData () {
      this.docId = ''
      this.title = ''
      this.note = ''
      this.url = ''
    }
  },
  created: function () {
    this.eventHub.$on('editResource', (event) => {
      this.docId = event.id
      this.title = event.title
      this.note = event.note
      this.url = event.url

      this.showModal()
    })
  },
  beforeDestroy: function () {

  }
}
</script>
