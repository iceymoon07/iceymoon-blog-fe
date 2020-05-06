<template>
  <div class="category" v-if="posts">
    <el-timeline>
      <el-timeline-item class="summary">
        <span style="font-size:20px">{{tag}}</span>
        <span style="color:#bbb">
          分类 共
          <span style="color:red">{{posts.length}}</span> 篇文章
        </span>
      </el-timeline-item>
      <el-timeline-item
        class="post"
        v-for="(post,index) in posts"
        :key="post._id"
        :color="nodeColor[index]"
      >
        <span class="post-date">{{formatDate(post.createdAt).date.substr(5)}}</span>
        <span
          class="post-title"
          @click="$router.push(`/post/${post._id}`)"
          @mouseenter="handleMouseEnterTitle(index)"
          @mouseleave="handleMouseLeaveTitle(index)"
        >{{post.title}}</span>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getPostsByTag } from "../api/posts";
import { formatDate } from "../utils/timestamp";

export default {
  data() {
    return {
      tag: this.$route.params.tag,
      posts: null,
      nodeColor: []
    };
  },
  methods: {
    formatDate,
    handleMouseEnterTitle(index) {
      this.nodeColor[index] = "#22313f";
      this.$forceUpdate();
    },
    handleMouseLeaveTitle(index) {
      this.nodeColor[index] = "#bbb";
      this.$forceUpdate();
    }
  },
  async mounted() {
    this.posts = await getPostsByTag(this.tag);
    for (let i = 0; i < this.posts.length; i++) {
      this.nodeColor.push("#bbb");
    }
  }
};
</script>

<style lang="less">
.category {
  padding: 40px 60px;

  .el-timeline {
    .el-timeline-item {
      padding-bottom: 40px;
    }

    .summary {
      font-weight: bold;
    }

    .post {
      .el-timeline-item__node {
        transition: 0.2s;
      }

      .el-timeline-item__content {
        display: flex;
        align-items: center;

        .post-date {
          font-size: 12px;
          margin-right: 8px;
        }

        .post-title {
          transition: 0.2s;
          font-size: 16px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
            color: #000;
          }
        }
      }
    }
  }
}
</style>