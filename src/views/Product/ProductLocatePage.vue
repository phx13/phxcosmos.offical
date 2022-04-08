<template>
  <header-navbar />
  <page-title />
  <product-locate />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import ProductLocate from "../../components/product_components/ProductLocate";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "ProductLocatePage",
  components: {
    HeaderNavbar,
    PageTitle,
    ProductLocate,
    FooterContact
  },
};
</script>
