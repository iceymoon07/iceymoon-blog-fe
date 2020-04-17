<template>
  <div class="home" v-if="posts">
    <PostPreview v-for="post in posts" :key="post._id" :title="post.title" :content="post.content" />
  </div>
</template>

<script>
import PostPreview from "../components/PostPreview";
import { getPosts } from "../api/posts";

export default {
  components: { PostPreview },
  data() {
    return {
      posts: null
    };
  },
  created() {
    getPosts()
      .then(response => (this.posts = response.data))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="less" scoped></style>
