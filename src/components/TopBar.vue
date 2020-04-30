<template>
  <div class="top-bar">
    <el-select
      v-model="value"
      placeholder="选择代码字体"
      @change="$emit('change-code-font',value)"
      v-if="isInPostPage"
    >
      <el-option v-for="item in codeFont" :key="item.value" :label="item.label" :value="item.value">
        <span>{{item.label}}</span>
        <span :style="{'font-family':item.value,float:'right'}">{{fontPreviewText}}</span>
      </el-option>
    </el-select>
    <span>登录</span>
    <span @click="$router.push('/newpost')">写文章</span>
    <span>管理</span>
    <el-input v-model="search" prefix-icon="el-icon-search" placeholder="搜索"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      codeFont: [
        { label: "Consolas", value: "consolas" },
        { label: "Fira Code", value: "firacode" }
      ],
      fontPreviewText: "</code>",
      value: ""
    };
  },
  computed: {
    isInPostPage() {
      if (this.$route.name === "Post") {
        return true;
      } else {
        return false;
      }
    }
  }
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

  > span {
    margin-right: 5px;
  }

  .el-input {
    width: 20%;
  }
}
</style>
