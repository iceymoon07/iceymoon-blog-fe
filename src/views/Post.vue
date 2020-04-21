<template>
  <div class="post" v-if="post">
    <div class="post-info">info</div>
    <div class="post-content" v-html="htmlResult"></div>
    <div class="post-nav"></div>
  </div>
</template>

<script>
import { getPostById } from "../api/posts";
import hljs from "highlight.js";
import "highlight.js/styles/agate.css";
import "../style/markdown.less";
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          `<pre><code  class="hljs ${lang}">` +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (err) {
        console.log(err);
      }
    }
    return (
      '<pre><code class="hljs">' + md.utils.escapeHtml(str) + "</code></pre>"
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

.post-content {
  padding: 0 30px;
  line-height: 1.75;
}
</style>