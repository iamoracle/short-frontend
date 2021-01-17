<template>
  <main class="about-page">
    <div class="about-widget">
      <div
        class="about-widget-content animation"
      >
        <h1 v-if="!error">
          Deleted successfully
        </h1>
        <h1 v-if="error">
          Error Deleting, Data Not Found
        </h1>
      </div>
    </div>
  </main>
</template>
<script>

export default {
  name: 'Secret',
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
      this.$axios.delete('/api/', { data: { slug: this.$route.params.slug, secret: this.$route.params.secret } })
        .catch((error) => {
          if (error.response.status === 504) {
            this.error = false
          } else {
            this.error = true
          }
        })
    }
  }
}
</script>

<style>

@import '../../assets/style.css';

</style>
