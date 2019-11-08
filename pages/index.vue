<template>
  <section class="container">
    <div>
      <p> filtered:{{msg | filtered}}</p>
      <br>
      <button @click="INCREMENT">+</button>
      <button @click="decrement">-</button>
      <br> <br>
      <input type="text" v-model="newItem" @keyup.enter="addItem">
      <button :disabled="!newItem" @click="addItem">Add Item</button>
      <ul class="items" v-if="items">
        <li v-for="(item,index) in reversedItems" :key="index">{{item}}</li>
      </ul>
      <nuxt-link
        v-for="post in posts"
        :to="{name: 'posts-id', params: {id: post.id}}"
        :key="post.id"
        class="items__link"
      >
        {{post.title}}
      </nuxt-link>
    </div>

  </section>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    data() {
      return {
        msg: "lower",
        newItem: "",
        items: []
      }
    },
    computed: {
      posts () {
        return this.$store.state.posts.all
      },
      reversedItems(){
        return this.items.slice(0).reverse();
      }
    },
    async fetch({ store }) {
      await store.dispatch("posts/fetchAllPosts")
    },
    filters: {
      filtered(msg) {
        return msg.toLocaleUpperCase();
      }
    },
    methods: {
      decrement() {
        this.DECREMENT({ minus: 2 })
      },
      ...mapMutations({
        "INCREMENT": "cart/INCREMENT",
        "DECREMENT": "cart/DECREMENT"
      }),
      addItem() {
        this.items.push(this.newItem);
        this.newItem = "";
      }
    }
  }
</script>

<style lang="scss">
  .items {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;

    &__link{
      display: block;
      padding: 10px 0;
    }
  }
</style>

