<template>
  <div class="edit">
    <post-editor
      :prop_content="content"
      :prop_tags="tags"
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
      id: this.$route.params.id
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
  }
};
</script>

<style lang="less">
</style>