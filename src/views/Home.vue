<template>
  <div class="home" v-if="posts">
    <!--文章预览组件-->
    <PostPreview
      v-for="(post,index) in currentPosts"
      :key="post._id"
      :post="post"
      :index="index"
      @delete-post="handleDelete"
    />
    <!--element 分页组件-->
    <el-pagination
      layout="prev, pager, next"
      :total="posts.length"
      @current-change="handleCurrentPageChange"
    ></el-pagination>
  </div>
</template>

<script>
import PostPreview from "../components/PostPreview";
import { getPostsInfo, deletePost } from "../api/posts";

export default {
  components: { PostPreview },
  data() {
    return {
      posts: null, // 所有文章的数据
      currentPage: 1 // 当前页数
    };
  },
  computed: {
    currentPosts() {
      let firstIndex = (this.currentPage - 1) * 10;
      let lastIndex = firstIndex + 10;
      return this.posts.slice(firstIndex, lastIndex);// slice方法切片数组
    } // 当前页数对应的文章数据，每页10条数据
  },
  methods: {
    handleDelete(index) {
      deletePost(this.posts[index]._id);
      this.posts.splice(index, 1);
    }, 
    handleCurrentPageChange(currentPage) {
      this.currentPage = currentPage;
    } // 跳转页数的事件处理，把跳转到的页数设置为当前页数
  },
  mounted() {
    getPostsInfo()
      .then(response => (this.posts = response.data.reverse()))
      .catch(err => console.log(err)); // 初始化所有文章的数据
  }
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>
