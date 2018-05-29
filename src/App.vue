<template>
  <div id="app">
    <FlashMessage />
    <router-view/>
  </div>
</template>

<script>
import FlashMessage from '@/components/FlashMessage'
export default {
  name: 'App',
  components: {
    FlashMessage
  }
}
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  .packery-drop-placeholder {
    outline: 3px dashed #444;
    outline-offset: -6px;
    transition: transform 0.2s;
  }
</style>
