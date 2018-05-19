<template>
  <div class="card draggable" @click="log">
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
  $self: &;

  border-radius: 5px;

  &-footer {
    a.view {
      position: relative;
      z-index: 5;
    }
  }

  &.draggable {
    &-source--is-dragging {
      border: 1px dashed #333333;
      box-shadow: 0;
      color: transparent;

      #{ $self }-header,
      #{ $self }-content,
      #{ $self }-footer {
      display: none;
    }
  }

    &-mirror {
      background-color: beige;
      z-index: 100;
    }
  }
}
</style>
