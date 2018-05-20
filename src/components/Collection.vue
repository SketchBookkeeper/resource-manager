<template>
  <div class="collection">
    <!-- <AddButton /> -->

    <Tile v-for="resource in resourceItems" :key="resource.order" :title="resource.title" :url="resource.url">
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
    makeItemsDraggable () {
      const items = this.$el.querySelectorAll('.js-grid-item-draggable')
      items.forEach(item => {
        // eslint-disable-next-line
        const draggie = new Draggabilly(item)
        this.pckry.bindDraggabillyEvents(draggie)
      })
    },
    addItemsToPckry () {
      this.pckry.items = []
      const items = this.$el.querySelectorAll('.js-grid-item')
      this.pckry.appended(items)
      this.makeItemsDraggable()
      this.pckry.layout()
    }
  },
  created () {
    this.resourceCollection = db
      .collection('resources')
      .orderBy('order')
      .onSnapshot(resources => {
          this.resourceItems = []

          resources.forEach(resource => {
            const resourceItem = resource.data()
            this.resourceItems.push(resourceItem);
          })
        }
      )
  },
  mounted () {
    // eslint-disable-next-line
    this.pckry = new Packery(this.$el, {
      stamp: '.js-grid-item-stamp',
      columnWidth: 200,
      gutter: 15,
      stagger: 25
    })

    this.pckry.on('dragItemPositioned', () => {
      setTimeout(() => {
        this.pckry.layout()
      }, 20)
    })
  },
  updated () {
    this.addItemsToPckry()
  }
}
</script>

<style lang="scss" scoped>
  .collection {
    margin-top: 5px;
    padding: 0 25px;
  }
</style>
