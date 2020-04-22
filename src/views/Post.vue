<template>
  <div class="post" v-if="post">
    <div class="post-info">
      <span>创建时间：{{formatDate(post.createdAt)}}</span>
      <span>最后修改于：{{formatDate(post.updatedAt)}}</span>
    </div>
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
  // 使用 highlight.js 实现 Markdown 代码区高亮
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
    // markdown-it 把文章内容解析为 html
    htmlResult() {
      let result = md.render(this.post.content);
      return result;
    }
  },
  methods: {
    // 格式化后端传过来的时间字符串
    formatDate(dateStr) {
      let dateObj = new Date(dateStr); // 用传过来的时间字符串，初始化一个 Date 对象
      let date = dateObj.toLocaleDateString(); // 格式化日期
      let time = dateObj.toTimeString().substr(0, 8); // 格式化时间
      return date + " " + time;
    }
  },
  mounted() {
    // 组件挂载完成时，根据路由 id 从后端获取文章数据
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