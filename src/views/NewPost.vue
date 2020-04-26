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
        .then(response => {
          this.$message({
            type: "success",
            message: response.data.msg
          });
          this.$router.push("/");
        })
        .catch(err => {
          if (err.response) {
            this.$message({
              type: "error",
              message: err.response.data.message[0]
            });
          } else {
            console.log(err);
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>