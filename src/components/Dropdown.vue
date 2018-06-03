<template>
  <div class="dropdown" :class="{'is-active' : open}" v-on-clickaway="closeDropdown">
    <div class="dropdown-trigger" @click="toggleDropdown">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{ title }}</span>
        <span class="icon">
          <i class="material-icons">{{ icon }}</i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <ul class="dropdown-content">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'dropdown',
  mixins: [clickaway],
  props: [
    'title',
    'icon',
    'data',
    'items'
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
  },
  created () {

  }
}
</script>
