<template>
  <div class="post" v-if="post">
    <div class="title">{{post.title}}</div>
    <div class="content">{{post.content}}</div>
    <div class="post-nav"></div>
  </div>
</template>

<script>
import { getPostById } from "../api/posts";

export default {
  data() {
    return {
      post: null
    };
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
</style>