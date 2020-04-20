<template>
  <div class="top-bar">
    <span @click="$router.push('/newpost')">写文章</span>
    <el-input v-model="search" prefix-icon="el-icon-search" placeholder="搜索"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:''
    }
  },
};
</script>

<style lang="less" scoped>
.top-bar {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span{
    margin-right: 5px;
  }
  .el-input {
    width: 20%;
  }
}
</style>
