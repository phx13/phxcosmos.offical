<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <!-- logo -->
      <a class="navbar-brand" href="/"
        ><img alt="logo" src="../../assets/logo.jpg" style="height: 40px"
      /></a>
      <!-- logoend -->

      <!-- 折叠 -->
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
      <!-- 折叠end -->


      <div
        class="collapse navbar-collapse navbar-menu"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- 首页 -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">首页</router-link>
          </li>
          <!-- 首页end -->

          <!-- 关于我们 -->
          <li class="nav-item">
            <router-link to="/about" class="nav-link">关于我们</router-link>
          </li>
          <!-- 关于我们end -->

          <!-- 产品中心 -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              产品中心
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item nav-link" to="/product/locate"
                  >高精度定位</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item nav-link"
                  to="/product/terminal"
                  >高感知终端</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item nav-link"
                  to="/product/platform"
                  >高可用平台</router-link
                >
              </li>
            </ul>
          </li>
          <!-- 产品中心end -->

          <!-- 解决方案 -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              解决方案
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link
                  class="dropdown-item nav-link"
                  to="/solution/industry"
                  >智慧工业</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item nav-link"
                  to="/solution/medical"
                  >智慧医疗</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item nav-link"
                  to="/solution/judicial"
                  >智慧司法</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item nav-link"
                  to="/solution/commerce"
                  >智慧商超</router-link
                >
              </li>
            </ul>
          </li>
          <!-- 解决方案end -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNavbar",
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