export const state = () => ({
  count: 0
});

export const getters = {
  cart: state => state.count
};

export const mutations = {
  INCREMENT(state) {
    state.count += 1;
  },
  DECREMENT(state, payload) {
    state.count -= payload.minus;
  }
};

export const actions = {};
