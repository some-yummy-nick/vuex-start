<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="logo">
        <nuxt-link :to="{name: 'index'}">
          <img src="https://placeimg.com/150/50/any" alt="">
        </nuxt-link>
      </div>
      <div class="count">{{cart}}</div>
    </div>
  </header>
</template>

<script>

  export default {
    computed: {
      cart(){
        return this.$store.state.cart.count;
      }
    }
  }
</script>

<style lang="scss">
  .header {
    padding: 20px 0;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
