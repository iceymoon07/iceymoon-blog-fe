module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
      vue: "window.Vue",
      "vue-router": "window.VueRouter",
      vuex: "window.Vuex",
      "element-ui": "window.ELEMENT",
      axios: "window.axios",
      "markdown-it": "window.markdownit"
    };
  }
};
