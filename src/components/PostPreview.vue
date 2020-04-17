<template>
  <div class="post-preview">
    <div>{{title}}</div>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
};
</script>

<style lang="less">
.post-preview {
  border-bottom: 1px solid #000;
}
</style>