<template>
  <header-navbar />
  <page-title />
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar";
import PageTitle from "../components/public_components/PageTitle";

export default {
  name: "Products",
  components: {
    HeaderNavbar,
    PageTitle,
  },
};
</script>
