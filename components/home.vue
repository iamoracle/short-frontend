<template>
  <main class="main-page">
    <div class="main-widget">
      <div class="animation">
        <form @submit.prevent="submitForm">
          <div class="input-wrapper">
            <input
              v-model="url"
              class="form-input"
              type="text"
              placeholder="https://example.com"
              :class="{'error': error}"
              @keyup="checkUrlValid"
            >
          </div>
          <div class="input-wrapper delay-10">
            <input
              class="form-button"
              type="submit"
              value="short"
              name="next"
            >
          </div>
        </form>
      </div>
    </div>
    <div v-if="alert" class="alert-widget animation">
      <div class="alert-close" @click="closeAlert">
        X
      </div>
      <div class="alert">
        <p>Copy the link below</p>
        <input v-model="fullSlug">
        <p>Copy the delete link below</p>
        <input v-model="secretUrl">
      </div>
    </div>
  </main>
</template>

<script>

import { siteUrl } from '../assets/config'

export default {
  name: 'Home',
  data () {
    return {
      url: null,
      error: false,
      alert: false,
      slug: '',
      secret: ''
    }
  },
  computed: {
    fullSlug () {
      return `${siteUrl}${this.slug}`
    },
    secretUrl () {
      return `${this.fullSlug}/${this.secret}`
    }
  },
  methods: {
    checkUrlValid () {
      const regex = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w-._~:/?#[\]@!$&'()*+,;=.]+$/
      this.error = !regex.test(this.url)
      return !this.error
    },
    closeAlert () {
      this.alert = false
      this.slug = ''
      this.secret = ''
    },
    submitForm () {
      if (!this.checkUrlValid()) {
        return false
      }
      this.$axios.post('/api', { url: this.url })
        .then((response) => {
          const { secret, slug } = response.data
          this.secret = secret
          this.slug = slug
          this.alert = true
        })
        .catch(() => { this.error = true })
    }
  }
}
</script>
