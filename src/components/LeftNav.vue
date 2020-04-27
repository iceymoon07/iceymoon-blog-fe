<template>
  <div class="left-nav">
    <div class="logo" @click="$router.push('/')">iceymoon07</div>
    <el-menu background-color="#22313f" text-color="#fff">
      <el-menu-item index="1" @click="$router.push('/')">
        <i class="iconfont iconhome"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="$router.push('/archives')">
        <i class="iconfont iconfolder"></i>
        <span>归档</span>
      </el-menu-item>
      <el-submenu index="3" v-if="tags">
        <template slot="title">
          <i class="iconfont iconall"></i>
          <span>分类</span>
        </template>
        <el-menu-item v-for="(tag, index) in tags" :key="tag._id" :index="'3-'+(index+1)" @click="$router.push(`/category/${tag.name}`)">
          <span>{{tag.name}}({{tag.count}})</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="$router.push('/project')">
        <i class="iconfont iconapplication"></i>
        <span>项目</span>
      </el-menu-item>
      <el-menu-item index="5" @click="$router.push('/link')">
        <i class="iconfont iconlianjie"></i>
        <span>链接</span>
      </el-menu-item>
      <el-menu-item index="6" @click="$router.push('/about')">
        <i class="iconfont iconaccount"></i>
        <span>关于</span>
      </el-menu-item>
    </el-menu>
    <div class="info">
      <i class="iconfont iconlogo-qq"></i>
      <a href="https://github.com/iceymoon07" target="_blank">
        <i class="iconfont icongithub"></i>
      </a>
      <i class="iconfont icongmail"></i>
    </div>
  </div>
</template>

<script>
import { getTagsInfo } from "../api/posts";

export default {
  data() {
    return {
      tags: null
    };
  },
  mounted() {
    getTagsInfo()
      .then(response => (this.tags = response.data))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="less" scoped>
.left-nav {
  background-color: #22313f;
  width: 15%;
  overflow-x: hidden; // 左侧导航栏有未知的宽度被撑开问题
  overflow-y: auto;
  scrollbar-width: none; // Firefox 滚动条隐藏
  -ms-overflow-style: none; // IE10+ 滚动条隐藏
  &::-webkit-scrollbar {
    display: none; // Chrome、Safari 滚动条隐藏
  }
  color: white;
  .logo {
    cursor: pointer;
    margin: 20px 0;
    text-align: center;
    font: 26px chunkfive;
  }
  .el-menu {
    width: 100%;
    i {
      margin-right: 6px;
    }
  }
  .info {
    text-align: center;
    margin-top: 230px;
    // 去除 a 标签的默认样式
    a {
      text-decoration: none;
      color: #fff;
      &:hover {
        opacity: 0.5;
        color: #fff;
      }
      &:visited {
        color: #fff;
      }
    }
    i {
      font-size: 26px;
      margin-right: 20px;
    }
  }
}
</style>
