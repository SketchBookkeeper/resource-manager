<template>
  <div class="card js-grid-item js-grid-item-draggable">
    <div class="card-header">
      <p class="card-header-title">{{ title }}</p>
    </div>

    <div class="card-content">
      <slot></slot>
    </div>

    <div class="card-footer">
      <a :href="url" target="_blank" class="card-footer-item view">View</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'url'
  ],
  data () {
    return {

    }
  },
  methods: {
    // todo make sure urls have https:// when saved to database
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 250px;
    float: left;

    &.is-dragging {
      background-color: aquamarine;
      z-index: 300;
    }
  }
</style>
