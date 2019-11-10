import axios from 'axios';

module.exports = {

  generate:{
    routes () {
      return axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then((res) => {
          return res.data.map((post) => {
            return '/posts/' + post.id
          })
        })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuex-start',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ["@/assets/scss/main.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
 ** Nuxt.js modules
 */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** axios configuration
  */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

