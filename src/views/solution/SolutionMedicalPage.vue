<template>
  <header-navbar />
  <page-title />
  <solution-medical />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../../components/public_components/HeaderNavbar";
import PageTitle from "../../components/public_components/PageTitle";
import SolutionMedical from "../../components/solution_components/SolutionMedical";
import FooterContact from "../../components/public_components/FooterContact";

export default {
  name: "SolutionMedicalPage",
  components: {
    HeaderNavbar,
    PageTitle,
    SolutionMedical,
    FooterContact
  },
};
</script>
