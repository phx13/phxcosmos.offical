<template>
  <section
    class="bg-half d-table w-100"
    :style="sectionBGStyle"
  >
    <div class="bg-overlay"></div>
    <div class="container">
      <div class="row justify-content-center pt-5">
        <div class="col-lg-12">
          <div class="text-white">
            <h4 class="text-uppercase">{{ titleName }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageTitle",
  data() {
    return {
      titleName: "",
      sectionBGStyle: {
        backgroundImage: "../../assets/images/page-title-bg.jpg"
      },
    };
  },
  mounted() {
    this.titleName = this.$route.name;
  },
};
</script>

<style scoped>
.bg-half {
  padding: 270px 0 210px;
  background-size: cover;
  align-self: center;
  position: relative;
}

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
</style>