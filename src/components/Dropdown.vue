<template>
  <div class="dropdown" :class="{'is-active' : open}" v-on-clickaway="closeDropdown">
    <div class="dropdown-trigger" @click="toggleDropdown">
      <button aria-haspopup="true" aria-controls="dropdown-menu">
        <span class="icon">
          <i class="material-icons">more_vert</i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item">
          <span class="icon">
            <i class="material-icons">edit</i>
          </span>
          <span>Edit</span>
        </a>
        <a href="#" class="dropdown-item">
          <span class="icon">
            <i class="material-icons">delete</i>
          </span>
          <span>Delete</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'dropdown',
  mixins: [clickaway],
  props: [
    'data'
  ],
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggleDropdown () {
      this.open = !this.open
    },
    closeDropdown () {
      this.open = false
    }
  }
}
</script>
