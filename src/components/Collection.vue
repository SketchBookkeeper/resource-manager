<template>
  <div class="collection">
    <!-- <AddButton /> -->

    <Tile v-for="resource in resourceItems" :id="resource.id" :key="resource.id" :title="resource.title" :url="resource.url">
        {{ resource.note }}
    </Tile>
   </div>
</template>

<script>
import db from './../firebaseinit'
import Packery from 'packery'
import Draggabilly from 'draggabilly'
import Tile from './Tile'
import AddButton from './AddButton'
export default {
  components: {
    Tile,
    AddButton
  },
  data () {
    return {
      isAddModalVisible: false,
      pckry: null,
      resourceItems: [],
      resourceCollection: null
    }
  },
  computed: {

  },
  methods: {
    packArea () {
      // eslint-disable-next-line
     this.pckry = new Packery(this.$el, {
        stamp: '.js-grid-item-stamp',
        columnWidth: 250,
        gutter: 15,
        stagger: 25
      })

      const items = this.$el.querySelectorAll('.js-grid-item-draggable')
      items.forEach(item => {
        // eslint-disable-next-line
        const draggie = new Draggabilly(item)
        this.pckry.bindDraggabillyEvents(draggie)
      })

      this.pckry.on('dragItemPositioned', () => {
        // Update items' order
        this.pckry
          .getItemElements()
          .forEach((item, index) => {
            const itemId = item.id

          })

        setTimeout(() => {
          this.pckry.layout()
        }, 20)
      })
    }
  },
  created () {
    this.resourceCollection = db
      .collection('resources')
      .orderBy('order')
      .onSnapshot(resources => {
        this.resourceItems = []
        resources
          .forEach(resource => {
            let resourceItem
            resourceItem = resource.data()
            resourceItem['id'] = resource.id
            this.resourceItems.push(resourceItem)
          })
      })
  },
  updated () {
    if (this.pckry !== null) {
      this.pckry.destroy()
    }
    this.packArea()
  }
}
</script>

<style lang="scss" scoped>
  .collection {
    margin-top: 5px;
    padding: 0 25px;
  }
</style>
