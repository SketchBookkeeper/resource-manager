<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
