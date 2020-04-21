<template>
  <div class="home" v-if="posts">
    <PostPreview
      v-for="(post,index) in posts"
      :key="post._id"
      :post="post"
      :index="index"
      @delete-post="deletePost"
    />
  </div>
</template>

<script>
import PostPreview from "../components/PostPreview";
import { getPosts, deletePost } from "../api/posts";

export default {
  components: { PostPreview },
  data() {
    return {
      posts: null
    };
  },
  methods: {
    deletePost(index) {
      deletePost(this.posts[index]._id);
      this.posts.splice(index, 1);
    }
  },
  mounted() {
    getPosts()
      .then(response => (this.posts = response.data.reverse()))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="less" scoped></style>
