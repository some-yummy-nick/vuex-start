export const state = () => ({
  posts: []
});

export const actions = {
  async fetchAllPosts ({commit}) {
    let posts = await this.$axios.$get('posts');
    commit('setPosts', posts)
  },
  async addPost ({commit}, payload) {
    let post = await this.$axios.$post(`posts`, {
      payload
    });
    commit('setPost', post);
  }
};

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },
  setPost (state, post) {
    state.posts.push(post)
  },
};
