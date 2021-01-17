<template>
  <div>
    <Home />
    <Footer />
  </div>
</template>

<script>

import Footer from '../components/footer'

import Home from '../components/home'

if (process.client) {
  require('../assets/typing')
}

export default {
  name: 'IndexPage',
  components: { Footer, Home }
}
</script>

<style>

@import '../assets/style.css';

</style>
