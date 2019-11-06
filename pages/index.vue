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
  import { mapState, mapMutations } from "vuex";

  export default {
    data() {
      return {
        msg: "lower",
        newItem: "",
        items: []
      }
    },
    computed: {
      ...mapState([
        "posts"
      ]),
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
  }
</style>

