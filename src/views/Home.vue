<template>
  <div class="home" v-if="posts">
    <!--文章预览组件-->
    <PostPreview v-for="post in currentPosts" :key="post._id" :post="post" />
    <!--element 分页组件-->
    <el-pagination
      layout="prev, pager, next"
      :total="posts.length"
      :page-size="5"
      background
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
      let firstIndex = (this.currentPage - 1) * 5;
      let lastIndex = firstIndex + 5;
      return this.posts.slice(firstIndex, lastIndex); // slice 方法切片数组
    } // 当前页数对应的文章数据，每页5条数据
  },
  methods: {
    handleCurrentPageChange(currentPage) {
      this.currentPage = currentPage;
      document.querySelector(".container").scrollTop = 0;
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

  /deep/ .el-pagination {
    position: absolute;
    left: 42%;
    top: 105%;
    margin-bottom: 30px;

    *,
    button .el-icon {
      font-size: 18px;
    }

    &.is-background .el-pager li:not(.disabled).active {
      background-color: #22313f;
    }
  }
}
</style>
