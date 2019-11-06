export const state = () => ({
  cart: 0
});

export const getters = {
  cart: state => state.cart
};

export const mutations = {
  INCREMENT(state) {
    state.cart += 1;
  },
  DECREMENT(state, payload) {
    state.cart -= payload.minus;
  }
};

export const actions = {};
