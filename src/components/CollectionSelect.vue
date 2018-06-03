<template>
  <Dropdown title="Collections" icon="folder_open">
    <DropdownItem v-for="collection in collections" :key="collection.id" >
      <button class="is-size-6" @click="selectedCollection = collection.id">
        <span>{{ collection.name }}</span>
      </button>
    </DropdownItem>

    <hr class="dropdown-divider">

    <DropdownItem>
      <AddCollection :user-id="userId" />
    </DropdownItem>
  </Dropdown>
</template>

<script>
import Dropdown from '@/components/Dropdown'
import DropdownItem from '@/components/DropdownItem'
import AddCollection from '@/components/AddCollection'
export default {
  name: 'collection-select',
  props: [
    'collections',
    'userId'
  ],
  components: {
    Dropdown,
    DropdownItem,
    AddCollection
  },
  data () {
    return {
      selectedCollection: ''
    }
  },
  watch: {
    selectedCollection: function () {
      this.eventHub.$emit('collectionChange', {collectionId: this.selectedCollection})
    }
  }
}
</script>
