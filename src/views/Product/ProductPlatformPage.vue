<template>
  <header-navbar />
  <page-title />
  <product-platform />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import ProductPlatform from "../../components/product_components/ProductPlatform";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "ProductPlatformPage",
  components: {
    HeaderNavbar,
    PageTitle,
    ProductPlatform,
    FooterContact,
  },
};
</script>
