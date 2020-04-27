<template>
  <div class="edit">
    <post-editor
      :init_content="content"
      :init_tags="tags"
      @submitPost="handleSubmitPost"
      v-if="content"
    ></post-editor>
  </div>
</template>

<script>
import PostEditor from "../components/PostEditor";
import { updatePost, getPostById } from "../api/posts";

export default {
  components: { PostEditor },
  data() {
    return {
      content: "",
      tags: [],
      // 从当前路由取得当前文章的id
      id: this.$route.params.id,
      // 判断是否点了确定提交键
      isSubmitted: false
    };
  },
  methods: {
    handleSubmitPost(post) {
      updatePost(this.id, post)
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
  mounted() {
    getPostById(this.id)
      .then(response => {
        this.content = response.data.content;
        this.tags = response.data.tags;
      })
      .catch(err => console.log(err));
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

<style lang="less">
</style>