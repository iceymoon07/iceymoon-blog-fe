<template>
  <div id="app">
    <!--左侧导航栏-->
    <left-nav />
    <div class="main">
      <!--顶栏-->
      <top-bar />
      <!--路由视图区域-->
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";

export default {
  components: { LeftNav, TopBar },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@font-face {
  font-family: chunkfive;
  src: url('../public/fonts/chunkfive-regular-webfont.woff');
  src: url('../public/fonts/chunkfive-regular-webfont.woff2');
}

* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

html,
body {
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
  .main {
    width: 85%;
    background-color: #f4f5f5;
  }
}
</style>
