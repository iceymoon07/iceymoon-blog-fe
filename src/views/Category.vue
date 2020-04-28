<template>
  <div class="category" v-if="posts">
    <el-timeline>
      <el-timeline-item>{{tag}}分类 共{{posts.length}}篇文章</el-timeline-item>
      <el-timeline-item v-for="post in posts" :key="post._id">
        <span>{{formatDate(post.createdAt).date}}</span>
        <span @click="$router.push(`/post/${post._id}`)">{{post.title}}</span>
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
      posts: null
    };
  },
  methods: {
    formatDate
  },
  async mounted() {
    this.posts = await getPostsByTag(this.tag);
  }
};
</script>

<style lang="less">
</style>