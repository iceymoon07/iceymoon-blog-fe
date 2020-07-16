<template>
  <div class="top-bar">
    <span class="top-bar-label--login" @click="loginDialogVisible = true" v-if="!isLogin">登录</span>
    <span class="top-bar-label--logged" style="color:red" v-if="isLogin">已登录</span>
    <span class="top-bar-label--newpost" @click="$router.push('/newpost')" v-if="isLogin">写文章</span>
    <span class="top-bar-label--logout" v-if="isLogin" @click="handleLogout">退出登录</span>
    <el-dialog title="登录" :visible.sync="loginDialogVisible">
      <el-form :model="loginForm">
        <el-form-item label="用户名" label-width="120px">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="120px">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="loginDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { login, logout } from "../api/users";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      loginDialogVisible: false,
      loginForm: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState("user", ["isLogin"]),
    isInPostPage() {
      if (this.$route.name === "Post") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapMutations("user", ["setLoginStatus"]),
    async handleLogin() {
      const res = await login(this.loginForm);
      this.$message.success(res.msg);
      this.setLoginStatus(true);
      this.loginDialogVisible = false;
    },
    async handleLogout() {
      const res = await logout();
      this.$message.warning(res.msg);
      this.setLoginStatus(false);
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
    font-weight: bold;
    margin-right: 10px;
  }

  .top-bar-label--login,
  .top-bar-label--newpost,
  .top-bar-label--logout {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .el-input {
    width: 20%;
  }
}
</style>
