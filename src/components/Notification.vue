<template>
  <transition name="notification-animation">
  <div v-show="isVisible" class="notification" :class="type">
    <button @click="isVisible = false" class="delete" aria-label="dismiss notice"></button>
    <slot></slot>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  data () {
    return {
      isVisible: true
    }
  },
  props: [
    'type'
  ]
}
</script>

<style lang="scss" scoped>

</style>
