<template>
  <div class="post-preview">
    <div>{{post.title}}</div>
    <div>{{post.content}}</div>
    <el-button type="primary" @click="$router.push(`/post/${post._id}`)">详情</el-button>
    <el-button type="danger" @click="$emit('delete-post',index)">删除</el-button>
  </div>
</template>

<script>
export default {
  props: ["post", "index"]
};
</script>

<style lang="less">
.post-preview {
  border-bottom: 1px solid #000;
}
</style>