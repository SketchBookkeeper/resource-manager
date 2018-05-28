<template>
   <Modal :title="title" v-show="isAddModalVisible" @close="closeModal">
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
            <input type="submit" value="Save" class="button is-primary" @click.prevent="updateResource" />
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
    },
    updateResource () {
      const documentRef = db.collection('resources').doc(this.docId)

      const updatedDoc = {
        title: this.title,
        note: this.note,
        url: this.url
      }

      documentRef.update(updatedDoc)
        .then(() => {
          console.log('updated')
        })
        .catch(error => {
          console.log(error)
        })
    },
    clearData () {
      this.title = ''
      this.note = ''
      this.url = ''
    }
  },
  created: function () {

  },
  beforeDestroy: function () {

  }
}
</script>
