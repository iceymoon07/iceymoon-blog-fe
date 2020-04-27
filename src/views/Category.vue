<template>
  <div class="category">分类显示文章，时间线形式 {{show}}</div>
</template>

<script>
export default {
  data() {
    return {
      show: this.$route.params.tag
    }
  },
};
</script>

<style lang="less">
</style>