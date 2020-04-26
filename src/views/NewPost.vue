<template>
  <div class="new-post">
    <post-editor :prop_content="content" :prop_tags="tags" @submitPost="handleSubmitPost"></post-editor>
  </div>
</template>

<script>
import PostEditor from "../components/PostEditor";
import { createPost } from "../api/posts";

export default {
  components: { PostEditor },
  data() {
    return {
      content: "",
      tags: []
    };
  },
  methods: {
    handleSubmitPost(post) {
      createPost(post)
        .then(response => console.log(response.data))
        .catch(/*err => console.log(err)*/);
      this.content = "";
      this.tags = [];
    }
  }
};
</script>

<style lang="less" scoped>
</style>