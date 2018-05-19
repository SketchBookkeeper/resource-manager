<template>
  <div>
    <Navbar />
    <div class="section">
      <Collection />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Collection from '@/components/Collection'
export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Collection
  }
}
</script>
