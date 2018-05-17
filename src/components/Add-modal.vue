<template>
  <div v-show="showModal" class="modal is-active" v-on:modal="showModal = true">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New Resource</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">

      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      this.showModal = true
    }
  }
}
</script>
