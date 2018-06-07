<template>
  <transition name="tile-animation">
    <div class="card resource-card js-grid-item js-grid-item-draggable">
      <div class="card-header" :style="{background: color}">
        <p class="card-header-title">{{ title }}</p>

        <div class="card-header-icon" aria-label="more options">
          <Dropdown icon="more_vert">
            <DropdownItem>
              <button @click="editResource">
                <span class="icon">
                  <i class="is-size-6 material-icons">edit</i>
                </span>
                <span class="is-size-6">Edit</span>
              </button>
            </DropdownItem>
            <DropdownItem>
              <button @click="deleteResource">
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
        {{ note }}
      </div>

      <div v-if="url" class="card-footer">
        <a :href="url" target="_blank" class="card-footer-item view">View</a>
      </div>
    </div>
  </transition>
</template>

<script>
import Dropdown from '@/components/Dropdown'
import DropdownItem from '@/components/DropdownItem'
export default {
  name: 'tile',
  components: {
    Dropdown,
    DropdownItem
  },
  props: [
    'title',
    'note',
    'url',
    'doc-id',
    'color'
  ],
  methods: {
    editResource () {
      this.eventHub.$emit('editResource', this.$props)
    },
    deleteResource () {
      this.eventHub.$emit('deleteResource', this.$props)
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    width: 250px;
    float: left;
    cursor: grab;

    &-header {
      transition: background 100ms 200ms;
    }

    &.is-dragging {
      z-index: 300;
      cursor: grabbing;
    }
  }

  .tile-animation-enter-active {
    transition: opacity 400ms 400ms;
  }

  .tile-animation-enter {
    opacity: 0;
  }

  .tile-animation-enter-to {
    opacity: 1;
  }
</style>

<style lang="scss">
  // Style it's dropdown
  .resource-card {
    .dropdown {
      .button {
        background-color: transparent;
        border: 0;
      }
    }
  }
</style>
