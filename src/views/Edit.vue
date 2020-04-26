<template>
  <div class="edit">
    <post-editor :prop_content="content" :prop_tags="tags" @submitPost="handleSubmitPost" v-if="content"></post-editor>
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
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
      this.content = "";
      this.tags = [];
    }
  },
  created() {
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