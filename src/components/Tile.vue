<template>
  <div class="card draggable" title="click to drag">
    <div class="card-header">
      <p class="card-header-title">{{ title }}</p>
    </div>

    <div class="card-content">
      <slot></slot>
    </div>

    <div class="card-footer">
      <a :href="url" target="_blank" rel="noopener" class="card-footer-item">View</a>
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
