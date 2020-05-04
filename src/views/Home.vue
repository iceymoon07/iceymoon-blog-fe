<template>
  <div class="home" v-if="posts">
    <!--文章预览组件-->
    <PostPreview v-for="post in currentPosts" :key="post._id" :post="post" />
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
import { getPostsInfo } from "../api/posts";

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
      return this.posts.slice(firstIndex, lastIndex); // slice 方法切片数组
    } // 当前页数对应的文章数据，每页10条数据
  },
  methods: {
    handleCurrentPageChange(currentPage) {
      this.currentPage = currentPage;
    } // 跳转页数的事件处理，把跳转到的页数设置为当前页数
  },
  async mounted() {
    this.posts = await getPostsInfo("time", -1);
  }
};
</script>

<style lang="less" scoped>
.home {
  position: relative;

  .el-pagination {
    position: absolute;
    left: 50%;
    bottom: 10px;
    * {
      font-size: 20px;
    }
  }
}
</style>
