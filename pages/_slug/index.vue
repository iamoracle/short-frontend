<template>
  <main class="about-page">
    <div class="about-widget">
      <div
        class="about-widget-content animation"
      >
        <h1 v-if="!error">
          Hold On...
        </h1>
        <h1 v-if="error">
          Page Not Found
        </h1>
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: 'Redirect',
  data () {
    return {
      error: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('/api/', { params: { slug: this.$route.params.slug } })
        .then((response) => { window.location.href = response.data.url })
        .catch(() => { this.error = true })
    }
  }
}
</script>

<style>

@import '../../assets/style.css';

</style>
