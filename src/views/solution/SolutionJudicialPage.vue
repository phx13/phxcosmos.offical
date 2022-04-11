<template>
  <header-navbar />
  <page-title />
  <solution-judicial />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import SolutionJudicial from "../../components/solution_components/SolutionJudicial";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "SolutionJudicialPage",
  components: {
    HeaderNavbar,
    PageTitle,
    SolutionJudicial,
    FooterContact
  },
};
</script>
