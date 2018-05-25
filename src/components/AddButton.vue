<template>
  <div class="js-grid-item js-grid-item-stamp">
    <button @click="showModal" class="button is-primary add-resource">
      <i class="material-icons large">add_circle_outline</i>
    </button>

    <Modal title="Add Resource" v-show="isAddModalVisible" @close="closeModal">
      <div>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="How to peel a banana...">
            <span class="icon is-small is-left">
              <i class="material-icons">title</i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea class="textarea" placeholder="Add notes here"></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">URL</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="https://...">
            <span class="icon is-small is-left">
              <i class="material-icons">insert_link</i>
            </span>
          </div>
        </div>

        <div class="control">
        <button class="button is-primary">
            <span class="icon is-small">
            <i class="material-icons large">add_circle_outline</i>
            </span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  components: {
    Modal
  },
  props: ['userId'],
  data () {
    return {
      isAddModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isAddModalVisible = true
    },
    closeModal () {
      this.isAddModalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-resource {
    cursor: pointer;
  }
</style>
