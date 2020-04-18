<template>
  <div class="post" v-if="post">
    <div class="title">{{post.title}}</div>
    <div class="content" v-html="htmlResult"></div>
    <div class="post-nav"></div>
  </div>
</template>

<script>
import { getPostById } from "../api/posts";
import hljs from "highlight.js";
import "highlight.js/styles/agate.css";
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (err) {
        console.log(err);
      }
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  }
});

export default {
  data() {
    return {
      post: null
    };
  },
  computed: {
    htmlResult() {
      let result = md.render(this.post.content);
      return result;
    }
  },
  mounted() {
    getPostById(this.$route.params.id)
      .then(response => (this.post = response.data))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="less" scoped>
.post-nav {
  position: fixed;
  top: 80px;
  right: 5%;
  background-color: #fff;
  width: 250px;
  height: 80%;
}
</style>