<template>
  <div class="post">
    <div>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。</div>
    <div class="post-nav"></div>
  </div>
</template>

<script>
export default {};
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