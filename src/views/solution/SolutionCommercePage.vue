<template>
  <header-navbar />
  <page-title />
  <solution-commerce />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import SolutionCommerce from "../../components/solution_components/SolutionCommerce";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "SolutionCommercePage",
  components: {
    HeaderNavbar,
    PageTitle,
    SolutionCommerce,
    FooterContact,
  },
};
</script>
