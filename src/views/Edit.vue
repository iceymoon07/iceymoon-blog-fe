<template>
  <div class="edit">
    <el-input v-model="title" placeholder="标题"></el-input>
    <el-input v-model="content" placeholder="内容" type="textarea" autosize="true"></el-input>
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

<style lang="less">
</style>