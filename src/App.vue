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
}

#app {
  height: 100%;
  display: flex;
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

      code {
        color: #ffffaa;
        background-color: #333;
        padding: 3px 5px;
        margin: 0 2px;
        border-radius: 2px;
        white-space: nowrap;
        font: 0.85em firacode;
      }

      pre {
        position: relative;
        code {
          // 代码区样式，抄了下 Vue 官网的
          padding: 1.2em 1.4em;
          line-height: 1.6rem;
          color: #fff;
          white-space: pre;
          &::before {
            position: absolute;
            top: 0;
            right: 0;
            color: #ccc;
            text-align: right;
            font-size: 0.9em;
            padding: 5px 10px 0;
            line-height: 15px;
            height: 15px;
            font-weight: 600;
            content: "Code";
          }
          &.js::before {
            content: "JS";
          }
          &.html::before {
            content: "HTML";
          }
          &.bash::before {
            content: "Shell";
          }
        }
      }
    }
  }
}
</style>
