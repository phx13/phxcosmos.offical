<template>
  <section class="section section-bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2 text-center">
            <h4 class="title text-uppercase mb-4">产品介绍</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- 高精度定位 -->
        <div class="col">
          <div class="card h-100">
            <a href="#">
              <img
                src="../../assets/images/home-product-1.jpg"
                class="card-img-top"
                alt="home-product-1.jpg"
            /></a>
            <div class="card-body text-center">
              <h5 class="card-title text-dark">高精度定位</h5>
              <p class="text-muted">
                是一款专用工业级数据采集而设计的一款模拟量输入设备。采用CAN总线或RS485技术，同时支持蓝牙5.0。UIIM采用防水外壳，防护等级达到IP68
              </p>
            </div>
          </div>
        </div>
        <!-- 高感知终端 -->
        <div class="col">
          <div class="card h-100">
            <a href="#">
              <img
                src="../../assets/images/home-product-2.jpg"
                class="card-img-top"
                alt="home-product-2.jpg"
            /></a>
            <div class="card-body text-center">
              <h5 class="card-title text-dark">高感知终端</h5>
              <p class="text-muted">
                是一款专用工业级数据采集而设计的一款模拟量输入设备。采用CAN总线或RS485技术，同时支持蓝牙5.0。UIIM采用防水外壳，防护等级达到IP68
              </p>
            </div>
          </div>
        </div>
        <!-- 高可用平台 -->
        <div class="col">
          <div class="card h-100">
            <a href="#"
              ><img
                src="../../assets/images/home-product-3.jpg"
                class="card-img-top"
                alt="home-product-3.jpg"
            /></a>
            <div class="card-body text-center">
              <h5 class="card-title text-dark">高可用平台</h5>
              <p class="text-muted">
                是一款专用工业级数据采集而设计的一款模拟量输入设备。采用CAN总线或RS485技术，同时支持蓝牙5.0。UIIM采用防水外壳，防护等级达到IP68
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-4 pt-2">
          <div class="text-center">
            <router-link to="/products" class="btn btn-custom"
              >查看全部产品<i class="fas fa-angle-right"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeProducts",
};
</script>

<style scoped>
.section-title .title {
  letter-spacing: 0.5px;
  font-size: 24px;
}

.section {
  padding: 100px 0;
  position: relative;
}

.section-bg-light {
  background-color: #f8f9fa !important;
}
</style>