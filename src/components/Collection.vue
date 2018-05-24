<template>
  <div class="collection">
    <!-- <AddButton /> -->

    <Tile v-for="resource in resourceItems" :id="resource.id" :key="resource.id" :title="resource.title" :url="resource.url">
        {{ resource.note }}
    </Tile>
   </div>
</template>

<script>
import _ from 'lodash'
import db from './../firebaseinit'
import Packery from 'packery'
import Draggabilly from 'draggabilly'
import Tile from './Tile'
import AddButton from './AddButton'
// Some packery functions need to take place after a tranistion
// Times are set here for ease
const transitionDuration = 400
const transitionWaitTime = transitionDuration + 100
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
    resourceItemsLength: function () {
      return this.resourceItems.length
    }
  },
  watch: {
    resourceItemsLength: function () {
      if (!this.pckry) return
      setTimeout(() => {
        this.pckry.reloadItems()
        this.makeItemsDraggable()
        this.pckry.layout()
      }, transitionWaitTime)
    }
  },
  methods: {
    setupPackery () {
      // eslint-disable-next-line
      this.pckry = new Packery(this.$el, {
        selector: '.js-grid-item',
        stamp: '.js-grid-item-stamp',
        columnWidth: 250,
        gutter: 15,
        transitionDuration: transitionDuration
      })

      this.pckry.on('dragItemPositioned', () => {
        setTimeout(() => {
          this.pckry.layout()
          this.debouncedUpdateResourceOrder()
        }, transitionWaitTime)
      })
    },
    makeItemsDraggable () {
      const items = this.$el.querySelectorAll('.js-grid-item-draggable')
      items.forEach(item => {
        // eslint-disable-next-line
        const draggie = new Draggabilly(item)
        this.pckry.bindDraggabillyEvents(draggie)
      })
    },
    updateResourceOrder () {
      this.pckry
        .getItemElements()
        .forEach((item, index) => {
          db.collection('resources')
            .doc(item.id)
            .update({
              'order': index
            })
            .then(() => {
              console.log('Updated', item.id)
            })
            .catch(error => {
              console.log(error)
            })
        })
    }
  },
  created () {
    // Setup realtime database
    this.resourceCollection = db
      .collection('resources')
      .orderBy('order')
      .onSnapshot(resources => {
        this.resourceItems = [] // TODO just check for new items

        resources
          .forEach(resource => {
            let resourceItem
            resourceItem = resource.data()
            resourceItem['id'] = resource.id
            this.resourceItems.push(resourceItem)
          })
      })

    // Create debounced version of UpdateResourceOrder()
    this.debouncedUpdateResourceOrder = _.debounce(this.updateResourceOrder, 2000)
  },
  mounted () {

  },
  updated () {
    // Setup Packery instance on first update
    if (this.pckry === null) {
      this.setupPackery()
      this.makeItemsDraggable()
    }
  }
}
</script>

<style lang="scss" scoped>
  .collection {
    margin-top: 5px;
  }
</style>
