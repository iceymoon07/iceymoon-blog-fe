<template>
  <div id="app">
    <!--左侧导航栏-->
    <left-nav />
    <div class="main">
      <!--顶栏-->
      <top-bar />
      <!--路由视图区域-->
      <div class="container">
        <transition name="el-fade-in">
          <router-view class="router-view" v-show="show" />
        </transition>
        <el-backtop target=".container" :right="80" :bottom="50">
          <el-tooltip content="回到顶部" placement="top">
            <i class="iconfont iconshang"></i>
          </el-tooltip>
        </el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";
import "./style/fontface.less";
import { isLogin } from "./api/users";
import { mapMutations } from "vuex";

export default {
  components: { LeftNav, TopBar },
  data() {
    return {
      show: true
    };
  },
  methods: {
    ...mapMutations("user", ["setLoginStatus"])
  },
  async mounted() {
    const res = await isLogin();
    this.setLoginStatus(res);
  }
};
</script>

<style lang="less">
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

    .container {
      height: calc(100% - 50px);
      overflow-y: scroll;

      /*
      &::-webkit-scrollbar {
        display: none;
      }
      */

      .router-view {
        background-color: #fff;
        width: 65%;
        min-height: calc(100% - 30px);
        margin-top: 30px;
        margin-left: 6%;

        &.home {
          background-color: #f4f5f5;
          margin-top: 50px;
        }
      }

      .el-backtop {
        height: 50px;
        width: 50px;
        background-color: #22313f;

        i {
          color: #fff;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
