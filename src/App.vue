<template>
  <div id="app">
    <left-nav />
    <div class="main">
      <top-bar />
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
* {
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
  .main {
    width: 85%;
  }
}
</style>
