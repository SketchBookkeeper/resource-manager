<template>
  <div class="js-grid-item js-grid-item-stamp">
    <button @click="showModal" class="add-resource">
      <i class="material-icons large">add_circle_outline</i>
    </button>

    <Modal title="Add Resource" v-show="isAddModalVisible" @close="closeModal">
      <Add />
    </Modal>
  </div>
</template>

<script>
import Add from './Add'
import Modal from './Modal'
export default {
  components: {
    Add,
    Modal
  },
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
    border: 1px dashed #333;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    height: 200px;
    left: 0;
    top: 0;
  }
</style>
