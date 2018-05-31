export default {
  data () {
    return {
      title: '',
      note: '',
      url: '',
      errors: []
    }
  },
  methods: {
    checkForm () {
      this.errors = []
      // eslint-disable-next-line
      const validUrl = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)

      if (this.title === '') this.errors.push('Title must not be blank')
      if (this.url !== '' && !validUrl.test(this.url)) this.errors.push('Please provide a valid url, including the protocol "https://"')

      if (this.errors.length > 0) return false
      return true
    },
    showErrors () {
      this.errors.forEach(error => {
        this.eventHub.$emit('notification', {
          message: error,
          type: 'is-warning'
        })
      })
    }
  }
}
