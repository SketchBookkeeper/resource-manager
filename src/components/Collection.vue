<template>
  <div class="collection">
    <Tile v-for="resource in sortedResourceItems"
      :id="resource.id"
      :key="resource.id"
      :doc-id="resource.id"
      :title="resource.title"
      :note ="resource.note"
      :url="resource.url"
      :color="collection.color"
    >
    </Tile>
   </div>
</template>

<script>
import _ from 'lodash'
import db from './../firebaseinit'
import Packery from 'packery'
import Draggabilly from 'draggabilly'
import Tile from './Tile'
// Some packery functions need to take place after a tranistion
// Times are set here for ease
const transitionDuration = 300
const transitionWaitTime = transitionDuration + 100
export default {
  name: 'collection',
  props: {
    userData: Object,
    collection: {
      type: Object,
      default: function () {
        return {
          id: '0',
          color: '#333333'
        }
      }
    }
  },
  components: {
    Tile
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
    },
    sortedResourceItems: function () {
      return this.resourceItems.slice(0).sort((a, b) => a.order - b.order)
    }
  },
  watch: {
    resourceItemsLength: function () {
      this.eventHub.$emit('lengthChange', this.resourceItemsLength)

      this.reloadPackery()
    },
    collection: function () {
      this.loadResources()
        .then(() => [
          this.reloadPackery()
        ])
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
    reloadPackery () {
      if (!this.pckry) return

      setTimeout(() => {
        this.pckry.reloadItems()
        this.makeItemsDraggable()
        this.pckry.layout()
      }, transitionWaitTime)
    },
    makeItemsDraggable () {
      const items = this.$el.querySelectorAll('.js-grid-item-draggable')
      items.forEach(item => {
        // eslint-disable-next-line
        const draggie = new Draggabilly(item)
        this.pckry.bindDraggabillyEvents(draggie)
      })
    },
    loadResources () {
      return new Promise((resolve, reject) => {
        this.resourceCollection = db
          .collection('resources')
          .where('uid', '==', this.userData.uid)
          .where('collection', '==', this.collection.id)
          .onSnapshot(resources => {
            this.resourceItems = []

            resources
              .forEach(resource => {
                let resourceItem
                resourceItem = resource.data()
                resourceItem['id'] = resource.id
                this.resourceItems.push(resourceItem)
              })

            resolve(this.resourceItems)
          })
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
            .catch(error => {
              console.log(error)
            })
        })
    }
  },
  created () {
    // Create debounced version of UpdateResourceOrder()
    this.debouncedUpdateResourceOrder = _.debounce(this.updateResourceOrder, 2000)
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
