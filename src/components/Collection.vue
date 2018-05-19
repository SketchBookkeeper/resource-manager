<template>
  <div>
    <div class="section collection">
      <button @click="showModal" class="add-resource">
        <i class="material-icons large">add_circle_outline</i>
      </button>

      <Tile title="one" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="two" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="three" url="https://www.google.com">
        Hello
      </Tile>
   </div>

    <Modal title="Add Resource" v-show="isAddModalVisible" @close="closeModal">
      <Add />
    </Modal>
  </div>
</template>

<script>
import {Swappable, Plugins} from '@shopify/draggable'
import Tile from './Tile'
import Modal from './Modal'
import Add from './Add'
export default {
  components: {
    Tile,
    Modal,
    Add
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
  },
  mounted () {
    // eslint-disable-next-line
    new Swappable(this.$el, {
      draggable: '.draggable',
      mirror: {
        constrainDimensions: true
      },
      plugins: [Plugins.ResizeMirror]
    })
  }
}

</script>

<style lang="scss" scoped>
  .collection {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-auto-rows: 200px;
    align-items: stretch;
    grid-gap: 20px;
    padding-top: 1px;
    max-width: 100vw;
  }

  .add-resource {
    border: 1px dashed #333;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
