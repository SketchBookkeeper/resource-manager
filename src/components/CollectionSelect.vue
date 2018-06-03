<template>
  <div class="control has-icons-left">
    <div class="select">
      <select id="select-collection" v-model="selectedCollection">
        <option v-for="(collection, index) in collections" :value="index" :key="collection.id" >
          {{ collection.name }}
        </option>
      </select>
      <span class="icon is-left">
        <i class="material-icons">folder_open</i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collection-select',
  props: ['collections'],
  data () {
    return {
      selectedCollection: '',
      firstRender: false
    }
  },
  watch: {
    collections: function () {
      // when the collections are aviable, set the first one as active
      if (this.collections.length > 0 && !this.firstRender) {
        this.firstRender = true
        this.selectedCollection = 0
      }
    },
    selectedCollection: function () {
      this.eventHub.$emit('collectionChange', {collectionIndex: this.selectedCollection})
    }
  }
}
</script>
