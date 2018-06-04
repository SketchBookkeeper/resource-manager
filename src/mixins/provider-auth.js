/**
 * Handle users using provider singin methods
 */
import firebase from 'firebase'
import db from '../firebaseinit'

export default {
  methods: {
    providerSignIn (provider) {
      const authProvider = (provider => {
        switch (provider) {
          case 'google':
            return new firebase.auth.GoogleAuthProvider()
        }
      })(provider)

      firebase.auth().signInWithPopup(authProvider)
        .then(user => {
          if (user.additionalUserInfo.isNewUser) {
            db.collection('collections').add({
              name: '1st Collection',
              uid: user.user.uid
            })
          }

          this.eventHub.$emit('notification', {
            message: `Welcome ${user.user.email}`,
            type: 'is-primary'
          })

          this.$router.push('/dashboard')
        })
        .catch(error => {
          this.eventHub.$emit('notification', {
            message: error.message,
            type: 'is-danger'
          })
        })
    }
  }
}
