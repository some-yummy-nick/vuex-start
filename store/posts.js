export const state = () => ({
  posts: []
});

export const actions = {
  async fetchAllPosts ({commit}) {
    let posts = await this.$axios.$get('posts');
    commit('setPosts', posts)
  },

};

export const mutations = {

  setPosts (state, posts) {
    state.posts = posts
  }
};
