<template>
  <header-navbar />
  <home-carousel />
  <home-introduction />
  <home-products />
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar";
import HomeCarousel from "../components/home_components/HomeCarousel";
import HomeIntroduction from "../components/home_components/HomeIntroduction";
import HomeProducts from "../components/home_components/HomeProducts";

export default {
  name: "Home",
  components: {
    HeaderNavbar,
    HomeCarousel,
    HomeIntroduction,
    HomeProducts,
  },
};
</script>
