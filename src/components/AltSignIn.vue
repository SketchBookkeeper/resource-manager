<template>
  <div class="sign-in">
    <div class="columns">
      <div class="column is-2">
        <button @click="providerSignIn('google')">
          <GoogleIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleIcon from '@/icons/Google'
import providerAuth from '@/mixins/provider-auth'
export default {
  mixins: [providerAuth],
  components: {
    GoogleIcon
  }
}
</script>

<style lang="scss" scoped>
  .sign-in {
    padding: 20px 0;
  }
</style>
