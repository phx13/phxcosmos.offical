<template>
  <section class="bg-half d-table w-100" :style="backgroundImage">
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="row justify-content-center pt-5">
        <div class="col-lg-12">
          <div class="text-dark text-center">
            <h3 class="text-uppercase">{{ titleName }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var backgroundImageUrl = require("../../assets/images/page-title-bg.jpg");

export default {
  name: "PageTitle",
  data() {
    return {
      titleName: "",
      backgroundImage: {
        backgroundImage: "url(" + backgroundImageUrl + ")",
      },
    };
  },
  mounted() {
    let routeName = this.$route.name;
    switch (routeName) {
      case "AboutPage":
        this.titleName = "关于我们";
        break;
      case "ProductLocatePage":
        this.titleName = "产品中心 - 高精度定位";
        break;
      case "ProductTerminalPage":
        this.titleName = "产品中心 - 高感知终端";
        break;
      case "ProductPlatformPage":
        this.titleName = "产品中心 - 高可用平台";
        break;
      default:
        break;
    }
  },
};
</script>

<style scoped>
.bg-half {
  padding: 170px 0 120px;
  background-size: cover;
  align-self: center;
  position: relative;
}

.bg-overlay {
  background-color: rgba(37, 41, 52, 0.1);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>