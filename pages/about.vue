<template>
  <div>
    <About />
    <Footer />
  </div>
</template>

<script>

import Footer from '../components/footer'

import About from '../components/about'

if (process.client) {
  require('../assets/typing')
}

export default {
  name: 'AboutPage',
  components: { Footer, About }
}
</script>

<style>

@import '../assets/style.css';

</style>
