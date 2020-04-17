<template>
  <div class="edit">
    <el-input v-model="title" placeholder="标题"></el-input>
    <el-input v-model="content" placeholder="内容" type="textarea" autosize></el-input>
    <el-button type="primary" @click="submitPost">提交</el-button>
  </div>
</template>

<script>
import { createPost } from "../api/posts";

export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    submitPost() {
      createPost(this.title, this.content)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      this.title = "";
      this.content = "";
    }
  }
};
</script>

<style lang="less">
</style>