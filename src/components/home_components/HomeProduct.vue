<template>
  <section class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="section-title mb-4 pb-2 text-center">
            <h4 class="title text-uppercase mb-4">产品体系</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- 高精度定位 -->
        <div class="col">
          <div class="card h-100">
            <router-link to="/product/locate">
              <img
                src="../../assets/images/home-product-1.jpg"
                class="card-img-top"
                alt="home-product-1.jpg"
            /></router-link>
            <div class="card-body text-center">
              <router-link to="/product/locate">
                <h5 class="card-title text-dark">高精度定位</h5>
              </router-link>
              <p class="text-muted">
                在物联网世界中，位置是一个不可或缺的基础信息。
              </p>
              <p class="text-muted">
                更高精度的定位信息伴随着更高的应用价值，可以更加精确地根据位置管理人员和物资。
              </p>
            </div>
          </div>
        </div>
        <!-- 高精度定位end -->

        <!-- 高感知终端 -->
        <div class="col">
          <div class="card h-100">
            <router-link to="/product/terminal">
              <img
                src="../../assets/images/home-product-2.jpg"
                class="card-img-top"
                alt="home-product-2.jpg"
            /></router-link>
            <div class="card-body text-center">
              <router-link to="/product/terminal">
                <h5 class="card-title text-dark">高感知终端</h5>
              </router-link>
              <p class="text-muted">
                高感知终端作为传感网络层和传输网络层的媒介，是物联网世界的关键设备。
              </p>
              <p class="text-muted">
                依靠其采集和传输外部感知数据到互联网中，才能将传感数据送达指定位置，构建物联网世界。
              </p>
            </div>
          </div>
        </div>
        <!-- 高感知终端end -->

        <!-- 高可用平台 -->
        <div class="col">
          <div class="card h-100">
            <router-link to="/product/platform">
              <img
                src="../../assets/images/home-product-3.jpg"
                class="card-img-top"
                alt="home-product-3.jpg"
            /></router-link>
            <div class="card-body text-center">
              <router-link to="/product/platform">
                <h5 class="card-title text-dark">高可用平台</h5>
              </router-link>
              <p class="text-muted">
                高可用平台覆盖管理应用运行状态，为用户打造可靠的物联网平台。
              </p>
              <p class="text-muted">
                在全生命周期不同阶段，平台对应用进行巡检、诊断、恢复和回溯，保证应用稳定运行实现闭环管理。
              </p>
            </div>
          </div>
        </div>
        <!-- 高可用平台end -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeProduct",
};
</script>

<style scoped>
</style>