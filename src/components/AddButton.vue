<template>
  <div class="js-grid-item js-grid-item-stamp">
    <button @click="showModal" class="button is-primary add-resource">
      <i class="material-icons large">add_circle_outline</i>
    </button>

    <Modal title="Add Resource" v-show="isAddModalVisible" @close="closeModal">
      <form action="/index.html">
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
            <input type="submit" value="Save" class="button is-primary" @click.prevent="addResource" />
          </div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import db from './../firebaseinit'
import Modal from './Modal'
export default {
  components: {
    Modal
  },
  props: ['userId'],
  data () {
    return {
      isAddModalVisible: false,
      title: '',
      note: '',
      url: ''
    }
  },
  methods: {
    showModal () {
      this.isAddModalVisible = true
    },
    closeModal () {
      this.isAddModalVisible = false
    },
    addResource () {
      const newData = {
        title: this.title,
        notes: this.note,
        url: this.url,
        uid: this.userId
      }

      db.collection('resources').add(newData)
        .then(docRef => {
          console.log(docRef)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-resource {
    cursor: pointer;
  }
</style>
