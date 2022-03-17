<template>
  <header-navbar />
  <page-title />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar";
import PageTitle from "../components/public_components/PageTitle";
import FooterContact from "../components/public_components/FooterContact";

export default {
  name: "Product",
  components: {
    HeaderNavbar,
    PageTitle,
    FooterContact
  },
};
</script>
