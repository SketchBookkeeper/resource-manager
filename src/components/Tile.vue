<template>
  <transition name="tile-animation">
    <div class="card js-grid-item js-grid-item-draggable">
      <div class="card-header">
        <p class="card-header-title">{{ title }}</p>

        <div class="card-header-icon" aria-label="more options">
          <Dropdown>
            <DropdownItem>
              <button>
                <span class="icon">
                  <i class="is-size-6 material-icons">edit</i>
                </span>
                <span class="is-size-6">Edit</span>
              </button>
            </DropdownItem>
            <DropdownItem>
              <button>
                <span class="icon">
                  <i class="is-size-6 material-icons">delete</i>
                </span>
                <span class="is-size-6">Delete</span>
              </button>
            </DropdownItem>
          </Dropdown>
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
import DropdownItem from '@/components/DropdownItem'
import EditResource from '@/components/EditResource'
export default {
  name: 'tile',
  components: {
    Dropdown,
    DropdownItem,
    EditResource
  },
  props: [
    'title',
    'url',
    'id'
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
