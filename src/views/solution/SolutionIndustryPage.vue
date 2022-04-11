<template>
  <header-navbar />
  <page-title />
  <solution-industry />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import SolutionIndustry from "../../components/solution_components/SolutionIndustry";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "SolutionIndustryPage",
  components: {
    HeaderNavbar,
    PageTitle,
    SolutionIndustry,
    FooterContact,
  },
};
</script>
