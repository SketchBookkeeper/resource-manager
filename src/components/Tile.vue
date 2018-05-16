<template>
  <div class="box">
    <h3>{{ title }}</h3>
    <slot></slot>
    <a :href="url" target="_blank" rel="noopener" class="button">View</a>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'url'
  ],
  data () {
    return {

    }
  },
  methods: {
    // todo make sure urls have https:// when saved to database
  }
}
</script>
