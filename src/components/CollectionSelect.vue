<template>
  <Dropdown title="Collections" icon="folder_open">
    <DropdownItem v-for="collection in collections" :key="collection.id" >
      <div class="columns">
        <div class="column is-8">
          <button class="is-size-6" @click="selectedCollection = collection.id">
            <span>{{ collection.name }}</span>
          </button>
        </div>

        <div class="column is-1">
          <EditCollection :collection-name="collection.name" :collection-id="collection.id" />
        </div>
      </div>
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
import EditCollection from '@/components/EditCollection'
export default {
  name: 'collection-select',
  props: [
    'collections',
    'userId'
  ],
  components: {
    Dropdown,
    DropdownItem,
    AddCollection,
    EditCollection
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
