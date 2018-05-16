<template>
  <div class="section collection">
    <AddResource />

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
</template>

<script>
import {Swappable, Plugins} from '@shopify/draggable'
import Tile from './Tile'
import AddResource from './Add-resource'
export default {
  components: {
    Tile,
    AddResource
  },
  methods: {

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
</style>
