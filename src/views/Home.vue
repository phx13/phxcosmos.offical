<template>
  <header-navbar/>
  <home-carousel/>
</template>

<script>
import HeaderNavbar from "../components/public_components/HeaderNavbar"
import HomeCarousel from "../components/home_components/HomeCarousel"

export default {
  name: 'Home',
  components: {
    HeaderNavbar,HomeCarousel
  }
}
</script>
