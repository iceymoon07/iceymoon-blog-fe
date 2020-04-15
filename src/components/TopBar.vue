<template>
  <div class="top-bar">
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
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-input {
    width: 20%;
  }
}
</style>
