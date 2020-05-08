<template>
  <div class="archives" v-if="posts && tags">
    <h2>分类</h2>
    <div class="all-tags">
      <el-tag
        v-for="(tag, index) in tags"
        :key="index"
        effect="dark"
        color="#22313f"
        @click.native="$router.push(`/category/${tag.name}`)"
      >{{tag.name}}({{tag.count}})</el-tag>
    </div>
    <el-timeline>
      <el-timeline-item class="summary" color="#22313f">
        目前总共
        <span style="color:red">{{posts.length}}</span> 篇文章
      </el-timeline-item>
      <el-timeline-item class="year">2020</el-timeline-item>
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
import { getPostsInfo, getTagsInfo } from "../api/posts";
import { formatDate } from "../utils/timestamp";

export default {
  data() {
    return {
      posts: null,
      tags: null,
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
    this.posts = await getPostsInfo("time", -1);
    for (let i = 0; i < this.posts.length; i++) {
      this.nodeColor.push("#bbb");
    }
    this.tags = await getTagsInfo();
  }
};
</script>

<style lang="less" scoped>
.archives {
  padding: 30px 40px;

  h2 {
    margin: 16px 30px;
  }

  .all-tags {
    margin-left: 30px;

    /deep/ .el-tag {
      margin: 4px 4px;
      border: none;
      cursor: pointer;
    }
  }

  /deep/ .el-timeline {
    margin-top: 30px;
    margin-left: 20px;

    .el-timeline-item {
      padding-bottom: 40px;
    }

    .summary {
      font-weight: bold;
    }

    .year {
      font-size: 24px;
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