<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <div class="vh-100 d-flex align-items-center w-100">
          <div class="bg-overlay"></div>
          <img
            src="../../assets/images/home-carousel-1.jpg"
            class="d-block w-100"
            alt="home-carousel-1.jpg"
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 class="heading text-white">行业深耕</h1>
            <p>创造有感情的智能终端，有能力的互联平台，有深度的数据分析。</p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <div class="vh-100 d-flex align-items-center w-100">
          <div class="bg-overlay"></div>
          <img
            src="../../assets/images/home-carousel-2.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 class="heading text-white">寰凤PHXCOSMOS</h1>
            <p>打造未来的物联网交互体系，让事物变得更有温度。</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="vh-100 d-flex align-items-center w-100">
          <div class="bg-overlay"></div>
          <img
            src="../../assets/images/home-carousel-3.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h1 class="heading text-white">未来愿景</h1>
            <p>助力产业数字化转型，提升资源配置效率，实现绿色复苏碳中和。</p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel",
};
</script>

<style scoped>
.bg-overlay {
  background-color: rgba(37, 41, 52, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.carousel-caption {
  bottom: initial;
}

.heading {
  font-size: 42px;
  letter-spacing: 1px;
}
</style>