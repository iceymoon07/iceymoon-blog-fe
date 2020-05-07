<template>
  <div class="post" v-if="post">
    <!--文章信息-->
    <div class="post-info">
      <span>创建时间：{{formatDate(post.createdAt).date}}</span>
      <span>最后修改于：{{formatDate(post.updatedAt).date}}</span>
      <span>阅读数：{{post.viewCount}}</span>
      <div class="post-opration">
        <i class="iconfont iconxiugai" @click="$router.push(`/edit/${id}`)"></i>
        <i class="iconfont iconshanchu" @click="handleDelete"></i>
      </div>
      <div class="post-tags">
        <el-tag
          v-for="(tag, index) in post.tags"
          :key="index"
          effect="light"
          @click.native="$router.push(`/category/${tag}`)"
        >{{tag}}</el-tag>
      </div>
    </div>
    <!--文章内容（Markdown）-->
    <div class="post-content" v-html="htmlResult"></div>
    <div class="post-mulu-title">目录</div>
  </div>
</template>

<script>
import { getPostById, addPostView, deletePost } from "../api/posts";
import { formatDate } from "../utils/timestamp";
import hljs from "highlight.js";
import "highlight.js/styles/agate.css";
import "../style/markdown.less";
import MarkdownIt from "markdown-it";
import MarkdownItAnchor from "markdown-it-anchor";
import MarkdownItTOC from "markdown-it-toc-done-right";

let md = new MarkdownIt({
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
md.use(MarkdownItAnchor); // 在标题上生成导航锚点
md.use(MarkdownItTOC, { level: [2, 3], listType: "ul" }); // 生成导航目录，应用于二级标题和三级标题

export default {
  data() {
    return {
      post: null,
      id: this.$route.params.id
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
    formatDate,
    // 点击删除文章键的事件处理
    handleDelete() {
      this.$confirm("您确定要删除这篇文章吗？", "提示", {
        confirmButtonText: "确定删除",
        cancelButtonText: "取消"
      })
        .then(async () => {
          const res = await deletePost(this.id);
          this.$message.success(res.msg);
          this.$router.push("/");
        })
        .catch(() => {
          return;
        });
    }
  },
  async mounted() {
    // 组件挂载完成时，根据路由 id 从后端获取文章数据
    await addPostView(this.id);
    const res = await getPostById(this.id);
    if (res) {
      this.post = res;
    } else {
      this.$router.push("/404");
    }
  }
};
</script>

<style lang="less" scoped>
.post-info {
  padding: 20px 30px;
  position: relative;

  > span {
    margin-right: 10px;
    font-size: 13px;
    color: #999;
  }

  .post-opration {
    position: absolute;
    top: 10px;
    right: 10px;

    i {
      font-size: 24px;
      cursor: pointer;

      &.iconxiugai {
        margin-right: 4px;
      }

      &.iconshanchu {
        color: red;
      }
    }
  }

  .post-tags {
    margin-top: 10px;
    .el-tag {
      cursor: pointer;
      margin: 4px 4px;
      border: none;
    }
  }
}

.post-content {
  padding: 0 30px 40px 30px;
  line-height: 1.75;
}

.post-mulu-title {
  position: fixed;
  top: 90px;
  right: 300px;
}
</style>