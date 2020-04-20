<template>
  <div class="new-post">
    <!--标题编辑-->
    <el-input v-model="post.title" placeholder="标题"></el-input>
    <!--内容编辑-->
    <el-input v-model="post.content" placeholder="内容" type="textarea" autosize></el-input>
    <!--提交按钮-->
    <el-button type="primary" @click="submitPost">提交</el-button>
  </div>
</template>

<script>
import { createPost } from "../api/posts";

export default {
  data() {
    return {
      post: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    submitPost() {
      createPost(this.post)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
      this.post = {
        title: "",
        content: ""
      };
    }
  }
};
</script>

<style lang="less" scoped>
</style>