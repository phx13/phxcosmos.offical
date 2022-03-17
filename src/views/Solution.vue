<template>
  <header-navbar />
  <footer-contact />
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar";
import FooterContact from "../components/public_components/FooterContact";

export default {
  name: "Solution",
  components: {
    HeaderNavbar,
    FooterContact
  },
};
</script>
