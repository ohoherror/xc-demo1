<template>
  <div class="y-nav">
    <div class="y_nav_h">
      <img src="../assets/images/homepage_man.png" alt>年轻哪能不放纵，high起来
    </div>
    <ul>
      <li>
        <router-link to="/user/regist">
          <i class="icon">&#xe733;</i>
          <span>新用户</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/navbar">
          <i class="icon">&#xe666;</i>
          <span>我的跑步</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/navbar">
          <i class="icon">&#xe6bd;</i>
          <span>我的步行</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/post">
          <i class="icon">&#xe63c;</i>
          <span>去发布</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/function";

.y-nav {
  background: #fff;
  padding-bottom: px2rem(20px);
  .y_nav_h {
    width: px2rem(380px);
    margin: 0 auto;
  }
}
</style>
