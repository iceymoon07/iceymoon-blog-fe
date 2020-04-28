<template>
  <div class="new-post">
    <post-editor :init_content="''" :init_tags="[]" @submitPost="handleSubmitPost"></post-editor>
  </div>
</template>

<script>
import PostEditor from "../components/PostEditor";
import { createPost } from "../api/posts";

export default {
  components: { PostEditor },
  data() {
    return {
      isSubmitted: false
    };
  },
  methods: {
    async handleSubmitPost(post) {
      const res = await createPost(post);
      this.$message.success(res.msg);
      this.isSubmitted = true;
      this.$router.push("/");
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