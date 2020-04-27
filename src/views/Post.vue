<template>
  <div class="post" v-if="post">
    <!--文章信息-->
    <div class="post-info">
      <span>创建时间：{{formatDate(post.createdAt).date}}</span>
      <span>最后修改于：{{formatDate(post.updatedAt).date}}</span>
      <span>阅读数：{{post.viewCount}}</span>
      <div>
        <el-tag
          v-for="(tag, index) in post.tags"
          :key="index"
          effect="dark"
          @click.native="$router.push(`/category/${tag}`)"
        >{{tag}}</el-tag>
      </div>
    </div>
    <!--文章内容（Markdown）-->
    <div class="post-content" v-html="htmlResult"></div>
    <!--文章导航目录-->
    <div class="post-nav">目录</div>
  </div>
</template>

<script>
import { getPostById, addPostView } from "../api/posts";
import { formatDate } from "../utils/timestamp";
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
    formatDate
  },
  mounted() {
    // 组件挂载完成时，根据路由 id 从后端获取文章数据
    addPostView(this.$route.params.id)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    getPostById(this.$route.params.id)
      .then(response => (this.post = response.data))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="less" scoped>
.post-info {
  span {
    margin-right: 10px;
  }
}

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