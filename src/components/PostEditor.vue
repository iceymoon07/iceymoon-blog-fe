<template>
  <div class="post-editor">
    <!--添加分类标签-->
    <el-tag
      v-for="(tag, index) in tags"
      :key="index"
      closable
      @close="handleTagClose(index)"
    >{{tag}}</el-tag>
    <el-input
      v-if="tagInputVisible"
      v-model="tagInputValue"
      ref="tagInputSave"
      @keyup.enter.native="handleTagInput"
      @blur="handleTagInput"
    ></el-input>
    <el-button v-else @click="showTagInput">+ 添加新标签</el-button>
    <!--内容编辑-->
    <el-input
      v-model="content"
      placeholder="# 首行请按照这样的 Markdown 一级标题形式输入，以便正确读取标题\n输入文章内容"
      type="textarea"
      autosize
    ></el-input>
    <!--提交按钮-->
    <el-button type="primary" @click="handleClickSubmit">提交</el-button>
  </div>
</template>

<script>
export default {
  props: ["prop_content", "prop_tags"],
  data() {
    return {
      content: this.prop_content,
      tags: this.prop_tags,
      tagInputVisible: false,
      tagInputValue: ""
    };
  },
  computed: {
    title() {
      // 截取 content 的第一行作为标题，传入后端
      let index = this.content.indexOf("\n");
      let firstLine = this.content.substring(2, index);
      return firstLine;
    },
    post() {
      return {
        title: this.title,
        content: this.content,
        tags: this.tags
      };
    }
  },
  methods: {
    handleTagClose(index) {
      this.tags.splice(index, 1);
    },
    showTagInput() {
      this.tagInputVisible = true;
      this.$nextTick(() => {
        this.$refs.tagInputSave.$refs.input.focus();
      });
    },
    handleTagInput() {
      let tagInputValue = this.tagInputValue;
      if (tagInputValue) {
        this.tags.push(tagInputValue);
      }
      this.tagInputVisible = false;
      this.tagInputValue = "";
    },
    handleClickSubmit() {
      this.$confirm("是否确认提交文章编辑结果？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$emit("submitPost", this.post);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交"
          });
        });
    }
  }
};
</script>

<style lang="less">
</style>
