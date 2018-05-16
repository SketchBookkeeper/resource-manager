<template>
  <div class="tile is-parent">
    <Tile title="Link" url="https://www.google.com">
      Hello
    </Tile>

    <Tile title="Link" url="https://www.google.com">
        my old friend
    </Tile>

    <Tile title="Link" url="https://www.google.com">
      content
    </Tile>
  </div>
</template>

<script>
import Tile from './Tile'
export default {
  components: {
    Tile
  }
}

</script>
