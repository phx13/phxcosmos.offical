<template>
  <footer class="footer bg-dark">
    <div class="container">
      <!--Footer Info -->
      <div class="row footer-info">
        <div class="col-lg-4 col-md-12">
          <img src="../../assets/logo-removebg.png" alt="logo" height="40" />
          <p class="text-foot mt-4">
            寰凤PHXCOSMOS，您的物联网解决方案合作伙伴。
          </p>
          <div>
            <ul class="list-unstyled social-icon social mt-4 mb-0">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded"
                  ><i class="fa fa-weixin text-foot" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded"
                  ><i class="fa fa-weibo text-foot" aria-hidden="true"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded"
                  ><i class="fa fa-qq text-foot" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
          <div class="footer-head">
            <h6 class="title mb-0">网站导航</h6>
          </div>
          <div class="footer-item mt-4">
            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/"
                  ><i class="fa fa-angle-right" aria-hidden="true"></i>
                  回到首页</router-link
                >
              </li>
              <li>
                <router-link to="/about"
                  ><i class="fa fa-angle-right" aria-hidden="true"></i>
                  关于我们</router-link
                >
              </li>
              <li>
                <router-link to="/product"
                  ><i class="fa fa-angle-right" aria-hidden="true"></i>
                  产品中心</router-link
                >
              </li>
              <li>
                <router-link to="/solution"
                  ><i class="fa fa-angle-right" aria-hidden="true"></i>
                  解决方案</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
          <div class="footer-head">
            <h6 class="title mb-0">资源中心</h6>
          </div>
          <div class="footer-item mt-4">
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#"
                  ><i class="fa fa-angle-right" aria-hidden="true"></i>
                  案例下载</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
          <div class="footer-head">
            <h6 class="title mb-0">联系我们</h6>
          </div>
          <div class="footer-news mt-4">
            <p class="text-foot">
              <i class="fa fa-phone" aria-hidden="true"></i>
              18910652328
            </p>
            <p class="text-foot">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              945871257@qq.com
            </p>
            <p class="text-foot">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              北京市朝阳区富尔大厦11层1102
            </p>
          </div>
        </div>
      </div>
      <!-- End Footer Info -->
    </div>
  </footer>
  <footer class="footer bg-dark footer-bar py-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="text-center">
            <p class="text-foot mb-0">
              &copy; 2022 北京寰凤科技有限公司版权所有
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterContact",
};
</script>

<style scoped>
</style>