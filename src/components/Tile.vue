<template>
  <transition name="tile-animation">
    <div class="card js-grid-item js-grid-item-draggable">
      <div class="card-header">
        <p class="card-header-title">{{ title }}</p>

        <div class="card-header-icon" aria-label="more options">
          <Dropdown />
        </div>
      </div>

      <div class="card-content">
        <slot></slot>
      </div>

      <div class="card-footer">
        <a :href="url" target="_blank" class="card-footer-item view">View</a>
      </div>
    </div>
  </transition>
</template>

<script>
import Dropdown from '@/components/Dropdown'
export default {
  name: 'tile',
  components: {
    Dropdown
  },
  props: [
    'title',
    'url'
  ],
  data () {
    return {

    }
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

  // Animations
  .tile-animation-enter-active {
    transition: transform 500ms ease-out, opacity 400ms;
  }

  .tile-animation-enter {
    opacity: 0;
    transform: scale(0.8)
  }

  .tile-animation-enter-to {
    opacity: 1;
    transform: scale(1);
  }
</style>
