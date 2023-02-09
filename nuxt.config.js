module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ojc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },  
  modules: [    
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],
  css: [
    '~/assets/css/common.css',
  ],
  loading: { color: '#3B8070' },
  build: {
    analyze: false,
    extend(config, { isClient, isServer, isDev }) {
      if (isServer && !isDev) {
        config.devtool = 'hidden-source-map';
      }else{
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      console.log('webpack', config, isServer, isClient);
    },
  },
  vuetify: {},
  axios: {
    browserBaseURL: process.env.NODE_ENV === 'production' ? 'http://52.79.72.184' : 'http://localhost:4000',
    baseURL: process.env.NODE_ENV === 'production' ? 'http://52.79.72.184' : 'http://localhost:4000',
    https: false,
  },
  server: {
    port: process.env.PORT || 4000,
  },
}

