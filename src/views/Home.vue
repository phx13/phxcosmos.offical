<template>
  <header-navbar />
  <home-carousel />
  <home-introduction />
  <home-product />
  <home-partner />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar";
import HomeCarousel from "../components/home_components/HomeCarousel";
import HomeIntroduction from "../components/home_components/HomeIntroduction";
import HomeProduct from "../components/home_components/HomeProduct";
import HomePartner from "../components/home_components/HomePartner";
import FooterContact from "../components/public_components/FooterContact";

export default {
  name: "Home",
  components: {
    HeaderNavbar,
    HomeCarousel,
    HomeIntroduction,
    HomeProduct,
    HomePartner,
    FooterContact
  },
};
</script>
