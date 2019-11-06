<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="logo">
        <nuxt-link :to="{name: 'index'}">
          <img src="http://placeimg.com/150/50/any" alt="">
        </nuxt-link>
      </div>
      <div class="count">{{cart.cart}}</div>
    </div>
  </header>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: {
      ...mapState([
        'cart'
      ]),
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
