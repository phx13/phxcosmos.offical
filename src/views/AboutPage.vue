<template>
  <header-navbar />
  <page-title />
  <about-company />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar";
import PageTitle from "../components/public_components/PageTitle";
import AboutCompany from "../components/about_components/AboutCompany";
import FooterContact from "../components/public_components/FooterContact";

export default {
  name: "AboutPage",
  components: {
    HeaderNavbar,
    PageTitle,
    AboutCompany,
    FooterContact,
  },
};
</script>
