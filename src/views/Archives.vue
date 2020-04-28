<template>
  <div class="archives" v-if="posts">
    <el-timeline>
      <el-timeline-item>目前总共{{posts.length}}篇文章</el-timeline-item>
      <el-timeline-item v-for="post in posts" :key="post._id">
        <span>{{formatDate(post.createdAt).date}}</span>
        <span @click="$router.push(`/post/${post._id}`)">{{post.title}}</span>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { getPostsInfo } from "../api/posts";
import { formatDate } from "../utils/timestamp";

export default {
  data() {
    return {
      posts: null
    };
  },
  methods: {
    formatDate
  },
  async mounted() {
    this.posts = await getPostsInfo("time", -1);
  }
};
</script>

<style lang="less">
</style>