<template>
  <div class="post-preview">
    <div class="post-date">
      <div class="post-month">{{ date.substr(5, 2) + "月" }}</div>
      <div class="post-day">{{ date.substr(8, 2) }}</div>
    </div>
    <h1 class="post-title">
      <div @click="$router.push(`/post/${post._id}`)">{{ post.title }}</div>
    </h1>
    <div class="post-info">
      <span class="post-created-at">
        <i class="iconfont iconriqi"></i>
        <span>发表于 {{ date }}</span>
      </span>
      <span class="post-info-divider">|</span>
      <span class="post-view-count">
        <i class="iconfont iconliulan"></i>
        <span>阅读数 {{ post.viewCount }}</span>
      </span>
      <span class="post-info-divider">|</span>
      <span class="post-tags">
        <i class="iconfont iconall"></i>分类于
        <span
          class="post-tag"
          v-for="(tag, index) in post.tags"
          :key="index"
          @click="$router.push(`/category/${tag}`)"
          >{{ tag }}</span
        >
      </span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../utils/timestamp";

export default {
  props: ["post"],
  data() {
    return {
      date: formatDate(this.post.createdAt).date
    };
  }
};
</script>

<style lang="less" scoped>
.post-preview {
  background-color: #fff;
  padding: 40px;
  margin-bottom: 40px;
  position: relative;
  border-radius: 6px;

  .post-date {
    background-color: #22313f;
    position: absolute;
    top: -20px;
    left: -30px;
    height: 60px;
    width: 70px;
    border-radius: 100px;
    padding-top: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    color: #fff;
    text-align: center;
    line-height: 1.1;

    .post-day {
      font-size: 30px;
      font-weight: bold;
    }
  }

  .post-title {
    color: #333;
    font-size: 26px;
    text-align: center;

    div {
      display: inline-block;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .post-info {
    text-align: center;

    * {
      font-size: 12px;
    }

    i {
      margin-right: 3px;
    }

    .post-info-divider {
      margin: 0 6px;
    }

    .post-tag {
      margin-right: 3px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
