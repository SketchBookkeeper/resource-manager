<template>
  <transition name="modal-animation">
    <div class="modal is-active">
      <div class="modal-background" @click="close"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ title }}</p>
            <button class="delete" aria-label="close" @click="close"></button>
          </header>
          <section class="modal-card-body">
            <slot></slot>
          </section>
          <footer class="modal-card-foot">
            <slot name="footer"></slot>
          </footer>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'title'
  ],
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-animation-enter-active {
    &,
    .modal-card {
      transition: transform 300ms ease-out, opacity 200ms;
    }
  }

  .modal-animation-enter {
    opacity: 0.8;
    transform: scale(1);

    .modal-card {
      transform: scale(0.9);
    }
  }

  .modal-animation-enter-to {
    opacity: 1;
    transform: scale(1);

    .modal-card {
      transform: scale(1);
    }
  }

  .modal-animation-leave-active {
    &,
    .modal-card {
      transition: transform 300ms ease-out, opacity 300ms;
    }
  }

  .modal-animation-leave-to {
    opacity: 0;
    transform: scale(1);

    .modal-card {
      transform: scale(0.9);
      opacity: 0;
    }
  }

</style>
