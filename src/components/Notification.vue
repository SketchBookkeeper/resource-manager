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
 .notification-animation-enter-active {
    transition: transform 300ms ease-out, opacity 200ms;
  }

  .notification-animation-enter {
    opacity: 0.8;
    transform: scale(1);
  }

  .notification-animation-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .notification-animation-leave-active {
    transition: transform 300ms ease-out, opacity 300ms;
  }

  .notification-animation-leave-to {
    opacity: 0;
    transform: scale(1);
  }
</style>
