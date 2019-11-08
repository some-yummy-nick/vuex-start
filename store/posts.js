export const state = () => ({
  all: []
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
  },
  async fetchPost ({commit}, id) {
    let post = await this.$axios.$get(`posts/${id}`);
    commit('setPost', post)
  }
};

export const mutations = {
  setPosts (state, posts) {
    state.all = posts
  },
  setPost (state, post) {
    state.all.push(post)
  },
};
