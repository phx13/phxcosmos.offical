<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img
          alt="logo"
          src="../../assets/logo-removebg.png"
          style="height: 40px"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse navbar-menu"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">关于我们</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link">产品中心</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/solution" class="nav-link">解决方案</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNavbar"
};
</script>

<style scoped>
.navbar-menu {
  float: right;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-grow: initial;
}
</style>