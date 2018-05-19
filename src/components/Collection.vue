<template>
  <div>
    <div class="collection">
      <button @click="showModal" class="add-resource js-grid-item js-grid-item-stamp">
        <i class="material-icons large">add_circle_outline</i>
      </button>

      <Tile title="one" url="https://www.google.com">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis impedit saepe alias delectus? Assumenda tenetur architecto molestias temporibus sapiente error, velit cumque, dolore ipsum harum ratione, consequatur repellendus dolorem.
      </Tile>

      <Tile title="two" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="three" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="one" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="two" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="three" url="https://www.google.com">
        Hello
      </Tile>

        <Tile title="one" url="https://www.google.com">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis impedit saepe alias delectus? Assumenda tenetur architecto molestias temporibus sapiente error, velit cumque, dolore ipsum harum ratione, consequatur repellendus dolorem.
      </Tile>

      <Tile title="two" url="https://www.google.com">
        Hello
      </Tile>

      <Tile title="three" url="https://www.google.com">
        Hello
      </Tile>

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
import Packery from 'packery'
import Draggabilly from 'draggabilly'
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
    const pckry = new Packery(this.$el, {
      itemSelector: '.js-grid-item',
      stamp: '.js-grid-item-stamp',
      columnWidth: 200,
      gutter: 15,
      stagger: 25
    })

    const items = this.$el.querySelectorAll('.js-grid-item-draggable')
    items.forEach(item => {
      // eslint-disable-next-line
      const draggie = new Draggabilly(item)
      pckry.bindDraggabillyEvents(draggie)
    })

    pckry.on('dragItemPositioned', () => {
      setTimeout(() => {
        pckry.layout()
      }, 20)
    })
  }
}

</script>

<style lang="scss" scoped>
  .collection {
    margin-top: 5px;
    padding: 0 25px;
  }

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
