<template>
  <div class="post-editor">
    <!--添加分类标签-->
    <el-tag
      v-for="(tag, index) in tags"
      :key="index"
      closable
      effect="dark"
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
      class="post-input"
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
  props: ["init_content", "init_tags"],
  data() {
    return {
      content: this.init_content,
      tags: this.init_tags,
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
        let isTagExisted = this.tags.indexOf(tagInputValue);
        if (isTagExisted !== -1) {
          this.$message({
            type: "warning",
            message: "不要输入重复的标签名"
          });
          this.tagInputValue = "";
          return;
        }
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
          const patt = /^# \S.*\n/; // 正则匹配，检测输入内容的首行是否符合 Markdown 一级标题格式
          const matched = patt.test(this.content);
          if (matched) {
            this.$emit("submitPost", this.post); // 符合格式，正常提交
          } else {
            this.$message({
              type: "warning",
              message: "请按格式标准修改第一行"
            }); // 不符合格式，弹出警告信息
          }
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
.post-editor {
  .post-input {
    textarea {
      font-family: consolas;
    }
  }
}
</style>
