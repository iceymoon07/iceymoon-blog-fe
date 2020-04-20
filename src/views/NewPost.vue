<template>
  <div class="new-post">
    <!--内容编辑-->
    <el-input v-model="content" placeholder="内容" type="textarea" autosize></el-input>
    <!--提交按钮-->
    <el-button type="primary" @click="submitPost">提交</el-button>
  </div>
</template>

<script>
import { createPost } from "../api/posts";

export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    submitPost() {
      // 截取 content 的第一行作为标题，传入后端
      let index = this.content.indexOf("\n");
      let firstLine = this.content.substring(2, index);
      let post = {
        title: firstLine,
        content: this.content
      };
      createPost(post)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
      this.content = "";
    }
  }
};
</script>

<style lang="less" scoped>
</style>