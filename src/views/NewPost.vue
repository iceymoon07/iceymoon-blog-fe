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
      tags: [],
      isSubmitted: false
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
          this.isSubmitted = true;
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
  },
  beforeRouteLeave(to, from, next) {
    if (this.isSubmitted) {
      next();
    } else {
      this.$confirm("您还没有提交编辑结果，真的要离开当前页面吗？", "提示", {
        distinguishCancelAndClose: true,
        confirmButtonText: "继续编辑",
        cancelButtonText: "离开"
      })
        .then(() => {
          next(false);
        })
        .catch(action => {
          action === "cancel" ? next() : next(false);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>