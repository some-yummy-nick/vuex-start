<template>
  <div class="container">
    <my-header/>
    <nuxt/>
  </div>
</template>
<script>
  import MyHeader from '~/components/MyHeader.vue'

  export default {
    components: {
      MyHeader
    },
  }
</script>
<style lang="scss">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .container {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
  }
</style>

