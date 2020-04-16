<template>
  <div class="post">
    <div class="title">{{title}}</div>
    <div class="content">{{content}}</div>
    <div class="post-nav"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  }
};
</script>

<style lang="less" scoped>
.post-nav {
  position: fixed;
  top: 80px;
  right: 5%;
  background-color: #fff;
  width: 250px;
  height: 80%;
}
</style>