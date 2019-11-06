<template>
  <section class="container">
    <div>
      <button @click="INCREMENT">+</button>
      <button @click="decrement">-</button>
        <div
          v-for="post in posts.posts"
          :key="post.id"
        >
          {{post.title}}
        </div>
      </div>

  </section>
</template>

<script>
  import {mapState ,mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'posts'
      ]),
    },
    async fetch ({store}) {
      await store.dispatch('posts/fetchAllPosts')
    },
    methods: {
      decrement() {
        this.DECREMENT({ minus: 2 })
      },
      ...mapMutations({
        "INCREMENT": "cart/INCREMENT",
        "DECREMENT": "cart/DECREMENT"
      })
    }
  }
</script>

<style>

</style>

