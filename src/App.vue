<template>
  <div id="app">
    <!--左侧导航栏-->
    <left-nav />
    <div class="main">
      <!--顶栏-->
      <top-bar />
      <!--路由视图区域-->
      <transition name="el-fade-in">
        <router-view class="router-view" v-show="show" />
      </transition>
    </div>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";

export default {
  components: { LeftNav, TopBar },
  data() {
    return { show: true };
  }
};
</script>

<style lang="less">
@font-face {
  // logo的字体
  font-family: chunkfive;
  src: url("../public/fonts/chunkfive-regular-webfont.woff");
  src: url("../public/fonts/chunkfive-regular-webfont.woff2");
}

@font-face {
  // 代码区的字体
  font-family: firacode;
  src: url("../public/fonts/firacode-regular-webfont.woff");
  src: url("../public/fonts/firacode-regular-webfont.woff2");
}

* {
  // 初始化
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  //font-size: 14px;
}

#app {
  height: 100%;
  display: flex;
  color: #333;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .main {
    width: 85%;
    background-color: #f4f5f5;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      //display: none;
    }
    .router-view {
      background-color: #fff;
      width: 65%;
      min-height: calc(100% - 80px);
      margin-top: 30px;
      margin-left: 6%;
    }
  }
}
</style>
