<template>
  <header-navbar />
  <page-title />
  <product-terminal />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import ProductTerminal from "../../components/product_components/ProductTerminal";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "ProductTerminalPage",
  components: {
    HeaderNavbar,
    PageTitle,
    ProductTerminal,
    FooterContact,
  },
};
</script>
