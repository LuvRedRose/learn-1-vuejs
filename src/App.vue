<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld   msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <Navbar />? -->
  <!-- <Navigasi /> -->
  <!-- <Home/> -->
  <Navbar />

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigasi from './components/Navigasi.vue'
import Home from './components/Home.vue'
// import Navbar from './components/includes/Navbar.vue'
import Navbar from './components/layouts/Navbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigasi,
    Home,
    Navbar
  }
}
</script>
