<template>
  <div class="hero is-fullheight" >
    <div class="hero-body">
      <div class="sign-up box">
        <h1 class="title is-4">Login</h1>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
  .hero {
    background-image: url(../../assets/home.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &-body {
      justify-content: center;
    }
  }

  .sign-up {
    max-width: 600px;
    width: 100%;
  }
</style>
