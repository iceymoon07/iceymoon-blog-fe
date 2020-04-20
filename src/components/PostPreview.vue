<template>
  <div class="post-preview">
    <h1>{{post.title}}</h1>
    <el-button type="primary" @click="$router.push(`/post/${post._id}`)">详情</el-button>
    <el-button type="danger" @click="$emit('delete-post',index)">删除</el-button>
    <el-button type="warning" @click="$router.push(`/edit/${post._id}`)">修改</el-button>
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